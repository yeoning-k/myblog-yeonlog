# yeonlog


[블로그 바로가기](https://yeonlog.vercel.app/)

<br/><br/>

## 프로젝트 소개
Next.js로 만든 정적 블로그로 vercel로 배포까지 진행하였습니다.
포트폴리오 겸 나만의 블로그를 만들고자 설계부터 디자인-개발까지 모두 직접 작업하였습니다.
이전에 노션으로 작성한 포스트들은 현재 만든 블로그로 천천히 이전 중입니다.

<br/><br/>

## 주요 기능
해당 블로그의 주요 기능은 다음과 같습니다.

- 다크모드
- 반응형
- 게시글
    - 태그 필터링 및 게시글 제목 검색
    - 마크다운 언어 HTML로 변환
    - 게시글 TOC 목차 구현
    - 댓글(utterances)
    - 이전 게시글, 다음 게시글 노출


<br/><br/>

## 기술 스택
- 환경: nextjs
- 사용 언어: typescript
- 컨텐츠 관리: markdown
- 스타일링: scss module
- 코드 관리: git
- 배포: vercel
- 사용 라이브러리 및 플러그인: 
    - react-syntax-highlighter
    - rehype-raw
    - rehype-slug
    - remark-gfm
    - react-markdown
    - react-icon
    - markdown-to-txt
    - framer-motion


<br/><br/>

## 추가 작업 예정
- SEO 검색 엔진 최적화
- 게시글 관리자 페이지 작업(CMS)
    - 마크다운 변환기 작업으로 게시글을 편하게 등록할 수 있지 않을까..?
