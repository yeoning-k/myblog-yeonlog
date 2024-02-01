import { IntroMessagesType, ProfileType } from '@/interfaces';

export const NAVIGATION = [
  {
    name: 'Blog',
    link: '/blog/list'
  },
  {
    name: 'Project',
    link: '/project/list'
  },
  {
    name: 'About me',
    link: '/about'
  }
];

export const GITHUB_LINK = 'http://github.com/yeoning-k';

export const INTRO_MESSAGES: IntroMessagesType[] = [
  {
    text: `안녕하세요, 프론트엔드 개발자 <b>김수연</b>입니다.`
  },
  {
    text: `웹 퍼블리셔를 시작으로 프론트엔드 개발자로 전향해 현재까지 성장하는 중입니다.
        새로움을 배우고 어려움을 해결하는 것을 좋아하기 때문에 즐겁게 학습하며 일하고 있습니다.
        웹 퍼블리싱 경험으로 마크업에 대한 이해도가 높으며, 대학시절 배운 기획과 디자인의 경험으로 원활한 커뮤니케이션이 가능합니다.
        사용자 중심의 웹을 만들기 위해 노력하고 확장성과 유지보수성이 높은 소프트웨어 아키텍처와 패턴을 위해 고민합니다.
      `
  },
  {
    text: `저에 대해 궁금한 정보가 있다면,
        아래에서 원하는 메뉴를 선택해주세요.
      `,
    option: [
      {
        text: '📄 경력기술서 보기',
        type: 'file'
      },
      {
        text: '📧 연락처 보기',
        type: 'email'
      }
    ]
  }
];

export const PROFILE: ProfileType = {
  name: 'yeoning💜',
  contact: '📧 sy03549@gmail.com'
};
