import { QnA } from "../../types";

const htmlQuestions: QnA[] = [
  {
    question: "시맨틱 HTML이란 무엇이며, 왜 중요한가요?",
    answer:
      "시맨틱 HTML은 콘텐츠의 의미와 구조를 명확히 전달하는 방식으로 마크업하는 것을 의미합니다. header, nav, main, article, section, aside, footer 등의 시맨틱 태그를 사용하여 문서의 구조를 명확히 표현할 수 있습니다. 이는 검색엔진 최적화(SEO), 웹 접근성 향상, 코드 가독성 개선, 유지보수 용이성 등에 중요한 역할을 합니다. 특히 스크린 리더와 같은 보조 기술을 사용하는 사용자들에게 더 나은 사용자 경험을 제공하며, 검색 엔진이 콘텐츠의 중요도와 관련성을 파악하는 데 도움을 줍니다.",
  },
  {
    question: "HTML5의 주요 기능과 이전 버전과의 차이점을 설명해주세요.",
    answer:
      "HTML5는 웹 애플리케이션 개발을 위한 다양한 새로운 기능을 도입했습니다. 시맨틱 태그, canvas, video, audio 등의 멀티미디어 요소, localStorage와 sessionStorage를 통한 클라이언트 측 저장소, WebSocket을 통한 실시간 통신, Geolocation API를 통한 위치 정보 접근, Web Workers를 통한 백그라운드 처리, drag & drop API 등을 제공합니다. 이전 버전과 비교하여 플러그인(예: Flash) 의존성이 줄어들었고, 모바일 디바이스 지원이 강화되었으며, 웹 애플리케이션 개발을 위한 표준화된 API를 제공합니다. 또한 form 요소의 기능이 강화되어 input type이 다양화되고 유효성 검사 기능이 추가되었습니다.",
  },
  {
    question: "웹 접근성과 ARIA의 역할에 대해 설명해주세요.",
    answer:
      "웹 접근성은 모든 사용자가 동등하게 웹 콘텐츠에 접근하고 이용할 수 있도록 보장하는 것을 의미합니다. ARIA(Accessible Rich Internet Applications)는 웹 콘텐츠와 웹 애플리케이션을 더 접근성 있게 만들기 위한 WAI-ARIA 표준으로, role, state, property 속성을 통해 스크린 리더 및 보조 기술에 추가적인 정보를 제공합니다. 예를 들어, role='button'을 사용하여 div 요소를 버튼처럼 동작하게 만들거나, aria-label을 사용하여 시각적으로 표시되지 않는 요소에 대한 설명을 제공할 수 있습니다. 또한 aria-expanded, aria-hidden과 같은 속성을 통해 동적 콘텐츠의 상태를 관리할 수 있습니다.",
  },
  {
    question: "script 태그의 async와 defer 속성의 차이점에 대해 설명해주세요.",
    answer:
      "script 태그의 async와 defer 속성은 JavaScript 파일의 로딩과 실행 타이밍을 제어합니다. 기본적으로 script 태그는 HTML 파싱을 중단하고 스크립트를 로드 및 실행합니다. async 속성은 스크립트를 비동기적으로 로드하며, 로드가 완료되면 즉시 실행됩니다. 이는 스크립트 실행 순서가 보장되지 않지만, 빠른 로딩이 가능합니다. defer 속성은 HTML 파싱이 완료될 때까지 스크립트 실행을 지연시키며, 작성된 순서대로 실행됩니다. 주로 async는 Google Analytics 같은 독립적인 스크립트에, defer는 DOM 조작이 필요한 스크립트에 사용됩니다.",
  },
  {
    question: "Attribute와 Property의 차이점에 대해 설명해주세요.",
    answer:
      "Attribute는 HTML 마크업에 작성되는 요소의 초기 값이며, Property는 DOM 객체의 속성을 나타냅니다. Attribute는 정적이며 초기값을 유지하지만, Property는 동적으로 변할 수 있습니다. 예를 들어, input 요소의 value attribute는 초기값을 설정하지만, value property는 사용자 입력에 따라 실시간으로 변경됩니다. 또한 일부 attribute는 boolean 값을 가지며(checked, disabled 등), 존재 여부로 상태를 표현하지만, 해당 property는 true/false 값을 가집니다. data-* 속성과 같은 사용자 정의 attribute는 dataset property를 통해 접근할 수 있습니다.",
  },
  {
    question:
      "HTML 렌더링 도중 JavaScript가 실행되면 렌더링이 멈추는 이유가 무엇인가요?",
    answer:
      "JavaScript는 싱글 스레드로 동작하며, 브라우저의 메인 스레드에서 HTML 파싱, DOM 구성, JavaScript 실행이 모두 이루어집니다. JavaScript는 DOM을 조작할 수 있기 때문에, JavaScript 실행 중에는 HTML 파싱과 렌더링이 일시 중지됩니다. 이는 JavaScript가 실행되는 동안 DOM 구조가 변경될 수 있어, 일관성 있는 DOM 상태를 보장하기 위함입니다. 이러한 블로킹을 최소화하기 위해 async나 defer 속성을 사용하거나, script 태그를 body 태그 끝에 배치하는 것이 좋습니다. 또한 큰 JavaScript 파일은 코드 스플리팅을 통해 필요한 시점에 로드하는 것이 성능 향상에 도움이 됩니다.",
  },
];

export default htmlQuestions;
