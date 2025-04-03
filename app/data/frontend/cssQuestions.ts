import { QnA } from "../../types";

const cssQuestions: QnA[] = [
  {
    question: "CSS Box Model과 box-sizing 속성에 대해 설명해주세요.",
    answer:
      "CSS Box Model은 모든 HTML 요소를 박스로 표현하는 개념으로, content, padding, border, margin의 네 가지 영역으로 구성됩니다. box-sizing 속성은 요소의 크기 계산 방식을 결정하는데, content-box(기본값)는 width와 height를 content 영역에만 적용하고, border-box는 padding과 border를 포함한 전체 박스 크기에 적용합니다. border-box는 더 직관적인 레이아웃 계산을 가능하게 하므로, 많은 개발자들이 * { box-sizing: border-box; }를 기본 설정으로 사용합니다. 이를 통해 padding과 border가 요소의 실제 크기에 영향을 주지 않고 내부로 적용되어 레이아웃 설계가 용이해집니다.",
  },
  {
    question: "px, em, rem, vw, vh 등 CSS 단위의 차이점과 용도를 설명해주세요.",
    answer:
      "px는 절대 단위로 고정된 크기를 지정할 때 사용합니다. em은 부모 요소의 font-size를 기준으로 하는 상대 단위이며, rem은 루트 요소(html)의 font-size를 기준으로 합니다. vw/vh는 뷰포트의 너비/높이를 기준으로 하는 단위입니다. 반응형 웹에서는 주로 rem을 사용하여 일관된 비율을 유지하고, 레이아웃에는 vw/vh를 활용하며, 미세한 조정이 필요한 경우 px을 사용합니다. em은 컴포넌트 내부에서 요소 간의 상대적인 크기를 지정할 때 유용합니다.",
  },
  {
    question:
      "position 속성의 값들(static, relative, absolute, fixed, sticky)에 대해 설명해주세요.",
    answer:
      "static은 기본값으로 일반적인 문서 흐름을 따릅니다. relative는 자신의 원래 위치를 기준으로 상대적으로 배치되며, 문서 흐름을 유지합니다. absolute는 가장 가까운 position이 static이 아닌 조상 요소를 기준으로 배치되며, 문서 흐름에서 제외됩니다. fixed는 뷰포트를 기준으로 고정 배치되어 스크롤해도 위치가 변하지 않습니다. sticky는 스크롤 위치가 임계점에 도달하기 전에는 relative처럼, 이후에는 fixed처럼 동작하는 하이브리드 방식입니다.",
  },
  {
    question: "CSS 애니메이션과 JavaScript 애니메이션의 차이점을 설명해주세요.",
    answer:
      "CSS 애니메이션은 transition과 @keyframes를 사용하여 구현하며, 간단한 애니메이션에 적합합니다. 브라우저가 최적화를 자동으로 처리하여 성능이 우수하고, 하드웨어 가속을 활용할 수 있습니다. JavaScript 애니메이션은 requestAnimationFrame을 사용하여 구현하며, 복잡한 애니메이션이나 동적인 제어가 필요한 경우에 적합합니다. 더 세밀한 제어가 가능하지만, 잘못 구현하면 성능 저하가 발생할 수 있습니다.",
  },
  {
    question: "CSS 선택자의 우선순위(Specificity)에 대해 설명해주세요.",
    answer:
      "CSS 선택자의 우선순위는 특정성(Specificity) 점수로 결정됩니다. !important가 가장 높은 우선순위를 가지며, 그 다음으로 인라인 스타일(1000점), ID 선택자(100점), 클래스/속성/가상 클래스 선택자(10점), 요소/가상 요소 선택자(1점) 순입니다. 동일한 특정성을 가진 경우에는 나중에 선언된 스타일이 적용됩니다. 유지보수를 위해서는 너무 높은 특정성을 피하고, 필요한 경우에만 선택적으로 높은 특정성을 사용하는 것이 좋습니다.",
  },
  {
    question: "margin 병합(Margin Collapse)현상에 대해 설명해주세요.",
    answer:
      "margin 병합은 인접한 블록 레벨 요소들의 수직 마진이 더 큰 마진 값으로 병합되는 현상입니다. 부모-자식 요소 간, 인접한 형제 요소 간에 발생할 수 있습니다. 이를 방지하기 위해서는 부모 요소에 padding이나 border를 추가하거나, overflow: hidden을 설정하거나, display: flex나 grid를 사용할 수 있습니다. margin 병합은 CSS의 기본 동작이며, 때로는 이를 활용하여 일관된 여백을 유지할 수 있습니다.",
  },
  {
    question:
      "display 속성의 주요 값들(block, inline, inline-block, flex, grid)에 대해 설명해주세요.",
    answer:
      "block은 요소가 새로운 줄에서 시작하며, 가로 폭 전체를 차지합니다. inline은 텍스트처럼 줄바꿈 없이 흐르며, width/height를 지정할 수 없습니다. inline-block은 inline처럼 흐르면서 block처럼 width/height/margin을 지정할 수 있습니다. flex는 1차원 레이아웃을 위한 것으로, 주축과 교차축을 기준으로 요소를 배치합니다. grid는 2차원 레이아웃을 위한 것으로, 행과 열을 기준으로 요소를 배치합니다. 각 값은 사용 목적에 따라 적절히 선택해야 합니다.",
  },
  {
    question: "Flexbox와 Grid의 차이점과 각각의 사용 사례를 설명해주세요.",
    answer:
      "Flexbox는 1차원 레이아웃 시스템으로, 주로 행이나 열 단위의 요소 배치에 적합합니다. justify-content, align-items 등의 속성을 통해 축을 기준으로 요소들을 유연하게 배치할 수 있으며, 반응형 디자인과 동적 콘텐츠에 효과적입니다. Grid는 2차원 레이아웃 시스템으로, 행과 열을 동시에 제어할 수 있어 복잡한 레이아웃 구현에 적합합니다. grid-template-columns, grid-template-rows 등의 속성을 통해 격자 구조를 정의하고, grid-area를 통해 요소의 위치와 크기를 지정할 수 있습니다. Flexbox는 네비게이션 바, 카드 리스트 등의 1차원 배치에, Grid는 전체 페이지 레이아웃, 갤러리 등의 2차원 배치에 주로 사용됩니다.",
  },
  {
    question:
      "CSS 전처리기(Sass, Less)와 PostCSS의 특징과 장단점을 설명해주세요.",
    answer:
      "CSS 전처리기는 변수, 믹스인, 중첩 선택자, 조건문, 반복문 등의 프로그래밍적 기능을 제공하여 CSS 작성을 더 효율적으로 만듭니다. Sass는 가장 성숙한 전처리기로, 풍부한 기능과 생태계를 가지고 있으며, .scss와 .sass 두 가지 문법을 지원합니다. Less는 JavaScript 기반으로 더 단순한 문법을 제공하며, 학습 곡선이 낮습니다. PostCSS는 JavaScript 플러그인을 통해 CSS를 변환하는 도구로, Autoprefixer, CSS Modules, cssnano 등 다양한 플러그인을 통해 현대적인 CSS 기능을 사용하고 최적화할 수 있습니다. 전처리기의 장점은 코드 재사용성과 유지보수성 향상이지만, 빌드 과정이 필요하고 디버깅이 복잡해질 수 있다는 단점이 있습니다.",
  },
  {
    question:
      "UI 컴포넌트 라이브러리(Material-UI, Tailwind CSS)의 장단점을 설명해주세요.",
    answer:
      "Material-UI는 Google의 Material Design을 구현한 React 컴포넌트 라이브러리로, 완성도 높은 컴포넌트와 테마 시스템을 제공합니다. 빠른 프로토타이핑과 일관된 디자인이 가능하지만, 번들 크기가 크고 커스터마이징이 복잡할 수 있습니다. Tailwind CSS는 유틸리티 우선 접근 방식의 CSS 프레임워크로, 높은 커스터마이징 자유도와 작은 번들 크기가 장점입니다. JIT 컴파일을 통해 필요한 스타일만 포함되며, 반응형 디자인이 용이하지만, 클래스명이 길어져 HTML이 복잡해질 수 있습니다.",
  },
  {
    question:
      "CSS-in-JS 라이브러리(Styled-Components, Emotion)의 특징과 장단점을 설명해주세요.",
    answer:
      "CSS-in-JS 라이브러리는 JavaScript 내에서 CSS를 작성할 수 있게 해주는 도구입니다. Styled-Components는 컴포넌트 기반 스타일링에 최적화되어 있으며, 동적 스타일링, 테마 지원, SSR 지원 등의 기능을 제공합니다. props를 통한 조건부 스타일링이 직관적이고 컴포넌트와 스타일이 밀접하게 결합되어 있어 유지보수가 용이하지만, 런타임 오버헤드와 번들 크기 증가가 단점입니다. Emotion은 Styled-Components와 유사하지만 더 가벼운 번들 크기와 다양한 스타일링 방식(css prop, styled 컴포넌트)을 제공하며, 특히 SSR 성능이 우수합니다. 두 라이브러리 모두 TypeScript 지원이 우수하며, 테마 시스템과 글로벌 스타일 관리를 지원합니다.",
  },
];

export default cssQuestions;
