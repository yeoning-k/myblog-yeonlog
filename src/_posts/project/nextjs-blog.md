---
title: Next.js 블로그 만들기
description: 블로그 제작부터 배포까지
tags: 
  - next.js
  - typescript
  - vercel
coverImage: '/images/thumbnail/blog.jpg'
link: https://github.com/yeoning-k/myblog-yeonlog
date: 2024-02-02
---


# 블로그 제작기

이 [블로그](https://yeonlog.vercel.app/)는 next.js 로 만들고 vercel로 배포 되었습니다. ([github code 보러 가기👀](https://github.com/yeoning-k/myblog-yeonlog))  
블로그를 어떻게 만들었는지, 만들때 어떤 부분을 고려했는지 공유해보고자 합니다.


개발 블로그를 만들게 된 이유는  
공부하며 노션에 정리한 개발일기(?)들과 나를 보여줄 수 있는 포트폴리오가 있었으면 좋겠다- 라는 생각이 들었기 때문인데요.  
Next.js를 아예 모르는 상태에서 시작했기 때문에 공부용으로도 아주 좋을거 같았습니다🤩

> Next.js는 서버사이트렌더링(SSR), 정적 웹 페이지 생성 등 리액트 기반 프레임워크로
자세한 내용은  
[공식문서](https://nextjs.org/docs)를 통해 확인 가능합니다.


## 시작하기
### 프로젝트 설정

먼저 nextjs 를 설치해 줍니다. 
터미널을 열고 아래 명령어를 입력하면 next js 설치가 진행됩니다.

```plaintext
npx create next-app [폴더명(or 현위치면 .)]
```

설치할때 아래와 같이 여러가지 설정을 물어보는데 본인 환경에 맞게 설정해주면 됩니다.
저는 아래와 같이 설정했습니다.

- Would you like to use TypeScript? → ⭕️
- Would you like to use ESLint? → ⭕️
- Would you like to use Tailwind CSS? → ❌
- Would you like to use `src/` directory? → ⭕️
- Would you like to use App Router? → ❌
- Would you like to customize the default import alias (@/*)? → ⭕️
- What import alias would you like configured? → `@`

이후, 생성된 프로젝트에서 불필요한 파일은 제거해줍니다.
- pages/api
- styles/Home.module.css

### 라우팅
Next.js는 `pages` 폴더 내부에 파일을 정의하면 해당 경로로 자동으로 라우팅 됩니다.  
제가 만드는 사이트는 포트폴리오 겸 블로그이기 때문에 아래 페이지대로 라우팅 설정을 해주었습니다. 
```plaintext
src
ㄴ pages
	ㄴ index.tsx //home
    ㄴ about
    	ㄴ index.tsx //간단한 자기소개 페이지
    ㄴ blog
    	ㄴ list.tsx //블로그 목록 페이지
        ㄴ [slug].tsx //상세페이지
    ㄴ project
    	ㄴ list.tsx //프로젝트 목록 페이지
        ㄴ [slug].tsx //상세페이지
```
예시로 위 디렉토리 위치대로 `project/list.tsx`를 페이지를 생성하고
```tsx
export default function ProjectPage() {
	return <></>
}
```
`/project/list` 에 접근하게 되면 **프로젝트 목록 페이지**가 노출되게 됩니다.



### 스타일링
Nexst js에서 스타일링을 지원하는 방법은 여러가지가 있습니다.


- global css: 여러 웹 페이지 또는 컴포넌트에 일관된 스타일을 적용하기 위해 사용되는 CSS 스타일
- css module: 클래스명을 고유한 이름으로 자동 변환해 css 클래스명이 서로 중첨되는 현상을 방지해주는 기술
- tailwind css: 유틸리티 우선 css 프레임워크
- sass: css 전처리기
- css-in-js: css를 javascript 구성요소에 직접 적용

저는 직접 디자인한 블로그를 제작했기 때문에 Tailwind CSS가 필요없다고 판단하여 이번 프로젝트에서는 제외 시켰습니다. 
reset.css 및 공통으로 적용되는 css는 global css로 관리해주고,
로컬범위의 페이지들은 CSS module 과 sass를 사용해 스타일링 해주었습니다.
```jsx
import sytles from '@/styles/Post.module.scss';

export default function ProjectPage() {
	return <div className={styles.post__title}></div>
}
```
```scss
/styles/Post.module.scss
.post__title {
	//...포스트 관련 css
}
```
css module은 일반 css 파일과 같이 작성하지만, 파일을 만들때 이름을 `[이름].module.css`로 작성해주고 className을 string이 아닌 객체의 프로퍼티 형식으로 작성하면 됩니다.
원하는 페이지들의 스타일 작업이 끝났다면 이제 마크다운으로 작성된 게시글을 상세페이지에 HTML로 변환하여 렌더링하는 작업을 진행해 봅시다.


### 마크다운을 이용한 포스트 작성 방법
#### 마크다운 파일 불러오기
작성된 마크다운을 데이터화 시켜야하는데 아래와 같이 크게 두가지 방법이있습니다.

1. 마크다운이 담긴 폴더안의 파일을 모두 읽어와서 데이터 처리하는 방법
2. contentlayer 플러그인을 사용하는 방법

저는 공식 예제를 보고 따라만들었기 때문에 위의 1번 방법으로 진행했습니다.

우선 마크다운 파일을 만들어볼게요.
저는 `_posts` 폴더안에 project와 blog를 따로 관리하기 때문에 폴더를 두개 생성해 주었습니다.
```plaintext
src
ㄴ _posts
	ㄴ project
    	ㄴ (...md 파일 생성 위치)
    ㄴ blog
    	ㄴ (...md 파일 생성 위치)
```
```plaintext
//마크다운.md
---
title: Next.js 블로그 만들기
description: 블로그 제작부터 배포까지
tags: 
  - next.js
  - typescript
  - vercel
coverImage: '/images/thumbnail/blog.jpg'
date: 2024-02-02
---

### 제목
내용

```









### 테마 작업을 위한 context 만들기



### vercel 배포하기



### 추가 기능들


### 후기