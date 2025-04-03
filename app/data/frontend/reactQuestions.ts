import { QnA } from "../../types";

const reactQuestions: QnA[] = [
  {
    question: "React란 무엇인가요?",
    answer:
      "React는 Facebook에서 개발한 JavaScript 라이브러리로, 사용자 인터페이스를 구축하기 위해 설계되었습니다. 컴포넌트 기반 아키텍처를 사용하여 재사용 가능한 UI 요소를 만들고, 가상 DOM을 통해 효율적인 렌더링을 수행합니다. 단방향 데이터 흐름을 지원하여 예측 가능한 상태 관리가 가능하며, JSX 문법을 사용하여 JavaScript 내에서 마크업을 작성할 수 있습니다.",
  },
  {
    question: "React의 Virtual DOM이란 무엇이며, 어떤 이점이 있나요?",
    answer:
      "Virtual DOM은 실제 DOM의 가벼운 복사본으로, React가 메모리에 유지하는 가상 표현입니다. 상태 변경 시 React는 먼저 Virtual DOM을 업데이트하고, 이전 Virtual DOM과 비교(Diffing)한 후, 실제로 변경된 부분만 실제 DOM에 적용(Reconciliation)합니다. 이런 방식의 이점은 1) 불필요한 DOM 조작을 최소화하여 성능 향상, 2) 배치 업데이트를 통한 효율적인 렌더링, 3) 선언적 UI 프로그래밍 가능, 4) 크로스 플랫폼 지원(React Native) 등이 있습니다.",
  },
  {
    question: "React 컴포넌트의 라이프사이클에 대해 설명해주세요.",
    answer:
      "React 클래스 컴포넌트의 라이프사이클은 마운팅, 업데이팅, 언마운팅 세 단계로 나뉩니다. 마운팅 단계에는 constructor(), static getDerivedStateFromProps(), render(), componentDidMount() 메서드가 호출됩니다. 업데이팅 단계에는 getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidUpdate() 메서드가 호출됩니다. 언마운팅 단계에는 componentWillUnmount() 메서드가 호출됩니다. 추가로 에러 처리를 위한 componentDidCatch()와 static getDerivedStateFromError() 메서드도 있습니다. 함수형 컴포넌트에서는 useEffect Hook을 사용하여 비슷한 기능을 구현합니다.",
  },
  {
    question: "React Hooks란 무엇이며, 어떤 이점이 있나요?",
    answer:
      "React Hooks는 함수형 컴포넌트에서 상태(state)와 생명주기 기능(lifecycle features)을 사용할 수 있게 해주는 함수입니다. React 16.8에서 도입되었으며, 클래스 컴포넌트 없이도 React의 기능을 사용할 수 있게 합니다. 주요 Hook으로는 useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef 등이 있습니다. Hook의 이점으로는 1) 상태 로직 재사용성 향상, 2) 관련 로직을 한 곳에 모아 가독성 향상, 3) 클래스 컴포넌트의 복잡성(this 바인딩, 중복 코드 등) 제거, 4) 트리 셰이킹을 통한 번들 크기 감소 등이 있습니다.",
  },
  {
    question: "useState와 useEffect Hook의 주요 용도와 사용법을 설명해주세요.",
    answer:
      "useState는 함수형 컴포넌트에서 상태를 관리하기 위한 Hook입니다. const [state, setState] = useState(initialState) 형태로 사용하며, state는 현재 상태 값, setState는 상태를 업데이트하는 함수입니다. useEffect는 컴포넌트의 사이드 이펙트(네트워크 요청, DOM 조작, 구독 설정 등)를 처리하기 위한 Hook입니다. useEffect(() => { /* 사이드 이펙트 코드 */ return () => { /* 정리(cleanup) 코드 */ }; }, [dependencies]) 형태로 사용합니다. dependencies 배열에 포함된 값이 변경될 때만 이펙트가 재실행되며, 빈 배열([])을 전달하면 마운트와 언마운트 시에만 실행됩니다. 정리(cleanup) 함수는 컴포넌트가 언마운트되거나 의존성이 변경되기 전에 실행됩니다.",
  },
  {
    question: "useCallback과 useMemo Hook의 차이점은 무엇인가요?",
    answer:
      "useCallback과 useMemo는 모두 메모이제이션을 위한 Hook으로, 성능 최적화에 사용됩니다. useCallback은 함수를 메모이제이션하여 의존성 배열의 값이 변경되지 않는 한 동일한 함수 참조를 유지합니다. 주로 자식 컴포넌트에 함수를 props로 전달할 때 불필요한 렌더링을 방지하기 위해 사용합니다. 형태: useCallback(fn, dependencies). useMemo는 계산 결과 값을 메모이제이션하여 의존성 배열의 값이 변경되지 않는 한 재계산을 방지합니다. 계산 비용이 큰 연산의 결과를 캐싱하는 데 유용합니다. 형태: useMemo(() => computeExpensiveValue(a, b), [a, b]). useCallback(fn, deps)는 useMemo(() => fn, deps)와 동일합니다.",
  },
  {
    question:
      "React에서 상태 관리를 어떻게 하나요? Context API와 Redux의 차이점은 무엇인가요?",
    answer:
      "React에서 상태 관리는 1) 컴포넌트 내부 상태(useState, useReducer), 2) 컴포넌트 간 상태 공유(props drilling), 3) 전역 상태 관리(Context API, Redux, Recoil, Zustand 등)로 구분할 수 있습니다. Context API는 React 내장 기능으로, Provider와 Consumer(useContext)를 통해 prop drilling 없이 데이터를 전달할 수 있습니다. 간단한 전역 상태 관리에 적합합니다. Redux는 별도의 라이브러리로, 단일 스토어, 리듀서, 액션, 미들웨어 등의 개념을 통해 복잡한 상태 관리를 지원합니다. Context API와 Redux의 차이점으로는 1) Redux는 미들웨어를 통한 비동기 처리 지원, 2) Redux는 DevTools를 통한 디버깅 용이, 3) Redux는 보일러플레이트 코드가 많지만 구조화된 상태 관리 가능, 4) Context API는 상태가 자주 변경되는 경우 성능 이슈 발생 가능 등이 있습니다.",
  },
  {
    question: "React에서 렌더링 최적화를 위한 방법에는 어떤 것들이 있나요?",
    answer:
      "React 렌더링 최적화 방법으로는 1) React.memo를 사용하여 불필요한 리렌더링 방지, 2) useMemo와 useCallback을 통한 계산 값과 함수의 메모이제이션, 3) 컴포넌트 분할과 적절한 상태 위치 설계, 4) key 속성을 올바르게 사용하여 리스트 렌더링 최적화, 5) 불변성(Immutability) 유지로 변경 감지 최적화, 6) 상태 업데이트 일괄 처리, 7) 가상화(react-window, react-virtualized)를 통한 대량 데이터 렌더링 최적화, 8) 레이지 로딩과 코드 스플리팅(React.lazy, Suspense), 9) 렌더링이 많은 컴포넌트를 웹 워커로 분리, 10) react-query, SWR 등을 사용한 데이터 페칭 최적화 등이 있습니다.",
  },
  {
    question: "React의 Strict Mode란 무엇인가요?",
    answer:
      "React의 Strict Mode는 애플리케이션 내의 잠재적 문제를 발견하기 위한 개발 모드 전용 도구입니다. <React.StrictMode> 컴포넌트로 애플리케이션을 감싸서 활성화할 수 있습니다. Strict Mode는 1) 안전하지 않은 생명주기 메서드 사용 감지, 2) 레거시 문자열 ref API 사용 경고, 3) 권장되지 않는 findDOMNode 사용 경고, 4) 예상치 못한 부작용 감지(개발 환경에서 컴포넌트 생성자와 렌더링을 두 번 호출), 5) 레거시 Context API 사용 감지 등의 검사를 수행합니다. 이는 오직 개발 모드에서만 작동하며 프로덕션 빌드에는 영향을 주지 않습니다.",
  },
  {
    question: "React에서 이벤트 핸들링은 어떻게 동작하나요?",
    answer:
      "React에서 이벤트 핸들링은 합성 이벤트(SyntheticEvent) 시스템을 통해 이루어집니다. 이는 브라우저의 네이티브 이벤트를 감싸는 크로스 브라우저 래퍼로, 브라우저 간 일관된 속성과 메서드를 제공합니다. 특징으로는 1) 카멜 케이스 명명 규칙(onClick 등), 2) 함수로 이벤트 핸들러 전달, 3) preventDefault()를 명시적으로 호출해야 함, 4) 이벤트 위임(delegation)을 자동으로 처리(내부적으로 이벤트를 문서 수준에서 처리), 5) 이벤트 핸들러 내에서 this 바인딩이 필요(클래스 컴포넌트의 경우) 등이 있습니다. 또한 React 17부터는 이벤트를 루트 DOM 컨테이너에 연결하도록 변경되어 마이크로프론트엔드 등에서 여러 React 버전을 함께 사용할 수 있게 되었습니다.",
  },
  {
    question: "React에서 조건부 렌더링은 어떻게 구현하나요?",
    answer:
      "React에서 조건부 렌더링은 JavaScript의 조건문을 활용하여 구현합니다. 주요 방법으로는 1) if/else 문을 사용하여 컴포넌트 반환 값 결정, 2) 논리 연산자 &&를 사용한 단축 평가(condition && <Component />), 3) 삼항 연산자 활용(condition ? <ComponentA /> : <ComponentB />), 4) 즉시 실행 함수(IIFE) 사용, 5) 조건에 따라 컴포넌트 변수 할당 후 렌더링, 6) switch 문을 사용한 다중 조건 처리, 7) 객체 매핑을 통한 조건부 렌더링 등이 있습니다. 0, false, null, undefined, NaN은 모두 React에서 렌더링되지 않는 값입니다.",
  },
  {
    question: "React의 key 속성은 왜 중요한가요?",
    answer:
      "key 속성은 React가 리스트 항목의 변경, 추가, 제거를 효율적으로 처리하기 위해 사용하는 특별한 속성입니다. 고유한 key를 통해 React는 가상 DOM 비교 과정에서 어떤 항목이 변경되었는지 빠르게 식별할 수 있습니다. key가 없거나 적절하지 않은 경우(예: 인덱스를 key로 사용), 전체 리스트가 불필요하게 재렌더링되거나 상태 관련 버그가 발생할 수 있습니다. key는 형제 요소 사이에서만 고유하면 되며, 전역적으로 고유할 필요는 없습니다. 항목의 고유 ID나 데이터의 해시 값을 key로 사용하는 것이 좋은 방법입니다.",
  },
  {
    question: "React의 Fragment란 무엇인가요?",
    answer:
      "Fragment는 DOM에 별도의 노드를 추가하지 않고 여러 자식 요소를 그룹화할 수 있는 React 기능입니다. React 컴포넌트는 단일 루트 요소만 반환할 수 있기 때문에, 여러 요소를 반환할 때 불필요한 div를 사용하는 대신 Fragment를 사용할 수 있습니다. <React.Fragment></React.Fragment> 또는 단축 문법인 <></> 형태로 사용할 수 있습니다. Fragment를 사용하면 DOM 구조가 깔끔해지고, CSS 선택자나 Flexbox, Grid 등의 레이아웃에 영향을 주지 않으며, 약간의 메모리와 성능상 이점도 있습니다. 단축 문법은 key 속성을 사용할 수 없다는 제한이 있습니다.",
  },
  {
    question: "React에서 REF의 용도와 사용법에 대해 설명해주세요.",
    answer:
      "Ref는 React에서 DOM 노드나 클래스 컴포넌트 인스턴스에 직접 접근할 수 있는 방법을 제공합니다. 주요 용도로는 1) DOM 요소에 직접 접근(포커스 설정, 텍스트 선택, 미디어 재생 제어 등), 2) 명령형 애니메이션 실행, 3) 서드파티 DOM 라이브러리 통합, 4) 부모 컴포넌트에서 자식 컴포넌트의 메서드 호출 등이 있습니다. 클래스 컴포넌트에서는 createRef() 메서드를, 함수형 컴포넌트에서는 useRef() Hook을 사용하여 생성합니다. Ref의 사용은 React의 선언적 패러다임에서 벗어나므로 필요한 경우에만 제한적으로 사용해야 합니다.",
  },
  {
    question: "React에서 고차 컴포넌트(HOC)란 무엇인가요?",
    answer:
      "고차 컴포넌트(Higher-Order Component, HOC)는 컴포넌트 로직을 재사용하기 위한 패턴으로, 컴포넌트를 인자로 받아 새 컴포넌트를 반환하는 함수입니다. HOC는 다른 컴포넌트를 감싸는 컴포넌트로, 원본 컴포넌트를 수정하지 않고 기능을 확장하는 합성(composition) 방식입니다. 주요 사용 사례로는 1) 횡단 관심사(cross-cutting concerns) 분리, 2) 조건부 렌더링, 3) 상태 관리 로직 공유, 4) props 조작 및 주입 등이 있습니다. React의 connect(), withRouter() 등이 HOC의 예입니다. React Hooks의 등장으로 HOC 사용이 줄었지만, 여전히 유효한 패턴입니다.",
  },
  {
    question:
      "React에서 제어 컴포넌트(Controlled Component)와 비제어 컴포넌트(Uncontrolled Component)의 차이점은 무엇인가요?",
    answer:
      "제어 컴포넌트는 React 상태에 의해 값이 제어되는 폼 요소로, 입력값의 변경을 React가 처리합니다. onChange 이벤트를 통해 상태를 업데이트하고, value 속성을 통해 입력 값을 표시합니다. 상태 로직이 집중되어 있어 폼 데이터 검증, 조건부 제출 버튼 활성화 등의 구현이 용이합니다. 비제어 컴포넌트는 DOM 자체에서 폼 데이터를 처리하며, React에서는 ref를 통해 필요할 때 DOM에서 값을 가져옵니다. defaultValue, defaultChecked 속성으로 초기값을 설정하고, 제출 시점에 값을 읽어옵니다. 구현이 간단하고 React에 의존하지 않는 라이브러리 통합에 유용합니다. 일반적으로 폼 데이터에 많은 상호작용이 필요한 경우 제어 컴포넌트를, 간단한 폼이나 파일 업로드 등의 경우 비제어 컴포넌트를 사용합니다.",
  },
  {
    question:
      "React의 Context API에 대해 설명하고, 어떤 경우에 사용하는 것이 적합한가요?",
    answer:
      "Context API는 컴포넌트 트리를 통해 데이터를 직접 전달하지 않고도 여러 컴포넌트 간에 데이터를 공유할 수 있는 React의 내장 기능입니다. React.createContext()로 컨텍스트를 생성하고, Context.Provider로 값을 제공하며, useContext Hook이나 Context.Consumer로 값을 소비합니다. 사용하기 적합한 경우로는 1) 전역 데이터 공유(테마, 언어 설정, 인증 상태 등), 2) 깊은 prop drilling 방지, 3) 여러 컴포넌트에서 필요로 하는 상태 관리 등이 있습니다. 단, 컨텍스트 값이 변경되면 Provider 하위의 모든 소비 컴포넌트가 재렌더링될 수 있어, 성능상의 이유로 자주 변경되는 데이터는 지역 상태나 다른 상태 관리 라이브러리를 고려해야 합니다.",
  },
  {
    question: "React에서 에러 처리는 어떻게 하나요?",
    answer:
      "React에서 에러 처리 방법으로는 1) 에러 경계(Error Boundaries): componentDidCatch()와 static getDerivedStateFromError()를 사용하여 자식 컴포넌트 트리의 에러를 캐치하고 대체 UI를 보여주는 클래스 컴포넌트 (함수형 컴포넌트에서는 아직 직접적인 지원 없음), 2) try-catch 블록: 이벤트 핸들러나 비동기 작업에서 발생하는 에러 처리, 3) Promise의 catch(): Promise 기반 비동기 작업의 에러 처리, 4) async/await와 try-catch: 비동기 작업의 가독성 높은 에러 처리, 5) 전역 에러 핸들러: window.onerror 또는 window.addEventListener('error')를 사용한 전역 에러 캐치, 6) React Query, SWR 등의 데이터 페칭 라이브러리를 통한 네트워크 요청 에러 처리 등이 있습니다. 에러 경계는 이벤트 핸들러, 비동기 코드, 서버 사이드 렌더링, 자체적인 에러에서 발생한 오류는 캐치하지 못하는 제한이 있습니다.",
  },
  {
    question:
      "React에서 code splitting과 lazy loading은 무엇이며, 어떻게 구현하나요?",
    answer:
      "Code splitting은 애플리케이션 번들을 작은 청크로 분할하여 필요할 때만 로드하는 기술로, 초기 로드 시간을 개선합니다. Lazy loading은 실제로 필요할 때까지 컴포넌트나 리소스 로딩을 지연시키는 기법입니다. React에서는 React.lazy()와 Suspense를 사용하여 구현합니다. React.lazy()는 동적 import()를 사용하는 컴포넌트를 로드하는 함수를 받아 지연 로딩 컴포넌트를 생성하고, Suspense는 컴포넌트가 로드되는 동안 fallback UI를 표시합니다. 주로 라우팅, 대화상자, 큰 컴포넌트 등에 적용됩니다. 추가로 loadable-components 같은 라이브러리를 사용하거나, Webpack의 Dynamic Imports를 직접 활용할 수도 있습니다. React Router와 함께 사용하면 라우트 기반 코드 분할을 쉽게 구현할 수 있습니다.",
  },
  {
    question:
      "React에서 SSR(Server-Side Rendering)과 CSR(Client-Side Rendering)의 차이점과 각각의 장단점은 무엇인가요?",
    answer:
      "SSR은 서버에서 완전한 HTML을 생성하여 클라이언트로 전송하는 방식입니다. 장점으로는 1) 초기 로드 시간 개선(FCP 빠름), 2) 검색 엔진 최적화(SEO) 향상, 3) 소셜 미디어 공유를 위한 메타 태그 제공, 4) 느린 기기나 네트워크에서도 콘텐츠 빠르게 표시 등이 있습니다. 단점으로는 1) 서버 부하 증가, 2) 복잡한 설정 및 개발, 3) 전체 페이지 새로고침으로 인한 사용자 경험 저하 가능성 등이 있습니다. CSR은 브라우저에서 JavaScript를 실행하여 DOM을 구성하는 방식입니다. 장점으로는 1) 서버 부하 감소, 2) 페이지 전환 시 빠른 응답성, 3) 풍부한 상호작용, 4) 클라이언트 측 캐싱 활용 등이 있습니다. 단점으로는 1) 초기 로드 시간 증가, 2) SEO 제한(개선되고 있음), 3) 느린 기기에서 성능 저하 등이 있습니다. Next.js, Remix 등의 프레임워크는 SSR, CSR, SSG(Static Site Generation), ISR(Incremental Static Regeneration) 등 다양한 렌더링 방식을 혼합하여 사용할 수 있게 해줍니다.",
  },
  {
    question: "React의 Suspense란 무엇인가요?",
    answer:
      "Suspense는 컴포넌트가 렌더링되기 전에 비동기 작업이 완료될 때까지 '기다릴' 수 있게 해주는 React 기능입니다. React 16.6에서 코드 분할(React.lazy)을 위해 먼저 도입되었고, React 18에서는 데이터 페칭을 위한 지원이 추가되었습니다. Suspense를 사용하면 비동기 작업이 완료될 때까지 fallback UI를 표시할 수 있으며, 여러 개의 Suspense 경계를 중첩하여 로딩 시퀀스를 조정할 수 있습니다. 또한 useTransition Hook과 함께 사용하여 UI 업데이트의 우선순위를 지정할 수 있습니다. Suspense의 장점으로는 1) 선언적 로딩 상태 관리, 2) 경쟁 상태(race condition) 방지, 3) 워터폴(waterfall) 요청 방지, 4) 자동 오류 경계 통합 등이 있습니다.",
  },
  {
    question: "React의 성능 최적화 기법에 대해 설명해주세요.",
    answer:
      "React 성능 최적화 기법으로는 1) React.memo를 사용한 컴포넌트 메모이제이션, 2) PureComponent 사용(클래스 컴포넌트), 3) shouldComponentUpdate 생명주기 메서드 구현, 4) useMemo와 useCallback Hook을 통한 값과 함수 메모이제이션, 5) 불변성(Immutability) 유지로 변경 감지 최적화, 6) 지연 초기화(lazy initialization)를 통한 초기 렌더링 최적화, 7) 상태 저장 위치 최적화(state colocation), 8) 리스트 아이템에 고유한 key 사용, 9) 이벤트 핸들러 최적화(메모이제이션, 디바운싱, 스로틀링), 10) 가상화(windowing)를 통한 대량 데이터 렌더링 최적화, 11) React.lazy와 Suspense를 통한 코드 분할, 12) 웹 워커 활용, 13) 비용이 많이 드는 계산의 캐싱 등이 있습니다. React DevTools Profiler를 사용하여 성능 병목 현상을 식별하고 targeted 최적화를 수행하는 것이 중요합니다.",
  },
  {
    question:
      "React에서 상태 관리 라이브러리(Redux, MobX, Recoil 등)를 사용해야 하는 경우는 언제인가요?",
    answer:
      "상태 관리 라이브러리를 사용해야 하는 경우는 1) 애플리케이션 규모가 커지고 상태가 복잡해질 때, 2) 여러 컴포넌트에서 공유되는 상태가 많을 때, 3) 깊은 컴포넌트 트리에서 prop drilling이 과도할 때, 4) 서버 상태, 폼 상태, UI 상태 등 다양한 유형의 상태를 체계적으로 관리해야 할 때, 5) 시간 여행 디버깅, 상태 지속성, 상태 동기화 등의 고급 기능이 필요할 때, 6) 비동기 작업과 부수 효과를 일관된 방식으로 처리해야 할 때, 7) 팀 규모가 크고 명확한 상태 관리 패턴이 필요할 때 등이 있습니다. 작은 애플리케이션이나 프로토타입에서는 Context API와 useReducer로도 충분할 수 있으며, 상태 유형에 따라 다른 도구를 조합하는 것도 좋은 접근 방식입니다(예: 서버 상태는 React Query, 클라이언트 상태는 Zustand 등).",
  },
  {
    question: "React의 렌더링 과정을 설명해주세요.",
    answer:
      "React의 렌더링 과정은 크게 1) 렌더 단계(Render Phase)와 2) 커밋 단계(Commit Phase)로 나뉩니다. 렌더 단계에서는 a) 컴포넌트 함수 호출 또는 render() 메서드 실행, b) JSX를 React 요소 트리로 변환, c) Virtual DOM 생성, d) 이전 Virtual DOM과 비교(Diffing), e) 변경 사항 계산 및 조정(Reconciliation)이 이루어집니다. 커밋 단계에서는 계산된 변경 사항을 실제 DOM에 적용합니다. React 18에서는 동시성 렌더링(Concurrent Rendering)이 도입되어, 렌더 단계를 여러 청크로 나누고 중단/재개할 수 있게 되었으며, 우선순위가 높은 업데이트를 먼저 처리할 수 있게 되었습니다. 렌더링은 1) 초기 렌더링, 2) 상태 변경, 3) 부모 컴포넌트 리렌더링, 4) 컨텍스트 변경 등으로 트리거될 수 있습니다.",
  },
  {
    question: "React에서 불변성(Immutability)이 중요한 이유는 무엇인가요?",
    answer:
      "React에서 불변성이 중요한 이유는 1) 효율적인 변경 감지: 참조 비교만으로 객체 변경 여부를 빠르게 확인할 수 있어 렌더링 최적화에 도움, 2) 이전 상태 보존: 시간 여행 디버깅, 실행 취소/다시 실행 기능 구현 가능, 3) 예측 가능한 상태 관리: 상태가 직접 변경되지 않아 부작용 방지, 4) 동시성 모드 지원: React 18의 동시성 기능은 불변성을 전제로 동작, 5) 메모이제이션 최적화: React.memo, useMemo, useCallback 등이 제대로 작동하려면 불변성 필요 등이 있습니다. JavaScript에서 불변성을 구현하는 방법으로는 스프레드 연산자, Object.assign(), concat(), slice() 등을 사용하거나, Immer, Immutable.js 같은 라이브러리를 활용할 수 있습니다.",
  },
  {
    question: "React의 합성 이벤트(Synthetic Event)란 무엇인가요?",
    answer:
      "React의 합성 이벤트는 브라우저의 네이티브 이벤트를 감싸는 크로스 브라우저 래퍼로, 브라우저 간 일관된 속성과 동작을 보장합니다. 특징으로는 1) W3C 명세를 따르므로 모든 브라우저에서 동일하게 동작, 2) 네이티브 이벤트와 동일한 인터페이스(stopPropagation(), preventDefault() 등) 제공, 3) 이벤트 위임(Event Delegation)을 통한 성능 최적화(내부적으로 최상위 요소에 한 번만 이벤트 리스너 연결), 4) 이벤트 풀링(React 16까지)을 통한 가비지 컬렉션 최적화 등이 있습니다. React 17부터는 이벤트 위임 방식이 변경되어 루트 DOM 컨테이너에 이벤트를 연결하도록 바뀌었고, 이벤트 풀링이 제거되었습니다. 네이티브 이벤트가 필요한 경우 e.nativeEvent를 통해 접근할 수 있습니다.",
  },
  {
    question: "React Router의 주요 기능과 라우팅 방식에 대해 설명해주세요.",
    answer:
      "React Router는 React 애플리케이션에서 클라이언트 사이드 라우팅을 구현하기 위한 라이브러리입니다. 주요 기능으로는 1) 선언적 라우팅: <Route>, <Routes> 컴포넌트를 통한 라우트 정의, 2) 중첩 라우팅: 라우트 내에 하위 라우트 구성 가능, 3) 동적 라우팅: URL 파라미터(:id 등)와 쿼리 파라미터 지원, 4) 프로그래매틱 내비게이션: useNavigate Hook을 통한 코드 기반 경로 전환, 5) 히스토리 관리: 브라우저 히스토리 API 추상화, 6) 라우트 보호: <Navigate>, <Outlet> 등을 활용한 인증 관리, 7) 데이터 로딩: V6.4부터 도입된 loader, action을 통한 데이터 페칭 기능 등이 있습니다. 라우팅 방식으로는 BrowserRouter(HTML5 History API 사용), HashRouter(URL 해시 사용), MemoryRouter(메모리 내 라우팅, 테스트용) 등이 있습니다. React Router v6에서는 컴포넌트 기반 API 외에도 훅 기반 API(useRoutes)를 제공하여 프로그래매틱 라우트 구성도 가능합니다.",
  },
  {
    question: "React에서 상태 관리 패턴인 Flux와 Redux의 개념을 설명해주세요.",
    answer:
      "Flux는 Facebook이 단방향 데이터 흐름을 강조하기 위해 만든 애플리케이션 아키텍처 패턴입니다. 주요 구성 요소로는 1) Dispatcher: 모든 데이터 흐름을 관리하는 중앙 허브, 2) Store: 애플리케이션 상태와 로직 보유, 3) View: 상태 변화에 반응하여 렌더링하는 컴포넌트, 4) Action: 상태 변경을 위한 데이터 패키지가 있습니다. Redux는 Flux 패턴을 구현한 라이브러리로, 추가적인 개념과 차이점이 있습니다: 1) 단일 스토어: 모든 상태를 하나의 객체 트리로 관리, 2) 리듀서: 이전 상태와 액션을 받아 새 상태를 반환하는 순수 함수, 3) 미들웨어: 액션 디스패치와 리듀서 실행 사이에 기능 확장(비동기 처리 등), 4) 불변성: 상태는 직접 변경되지 않고 항상 새로운 상태 객체 반환, 5) 예측 가능성: 동일한 액션과 이전 상태에 대해 항상 동일한 결과 보장 등이 있습니다. Redux는 상태 관리 복잡성을 줄이고, 시간 여행 디버깅, 상태 지속성 등의 기능을 제공합니다.",
  },
  {
    question: "React 18에서 추가된 주요 기능은 무엇인가요?",
    answer:
      "React 18의 주요 기능으로는 1) 동시성 렌더링(Concurrent Rendering): 렌더링 작업을 여러 청크로 나누고 우선순위를 부여하여 UI 반응성 향상, 2) 자동 배치(Automatic Batching): 이벤트 핸들러 외부에서도 여러 상태 업데이트를 자동으로 배치 처리, 3) Transitions(useTransition, startTransition): 긴급하지 않은 상태 업데이트를 표시하고 우선순위 낮춤, 4) Suspense for Data Fetching: 데이터 로딩을 위한 Suspense 지원 확장, 5) 서버 컴포넌트(Server Components): 클라이언트 번들 크기에 영향을 주지 않는 서버 렌더링 컴포넌트(서버 전용 코드 실행 가능), 6) 새로운 클라이언트 및 서버 렌더링 API(createRoot, hydrateRoot), 7) 스트리밍 서버 사이드 렌더링과 선택적 하이드레이션(Streaming SSR with Selective Hydration): HTML 스트리밍 및 상호작용 우선순위에 따른 점진적 하이드레이션, 8) useId, useDeferredValue, useSyncExternalStore 등의 새로운 Hook 등이 있습니다. 이러한 기능들은 대규모 애플리케이션에서 사용자 경험을 개선하고, 서버 렌더링의 효율성을 높이는 데 기여합니다.",
  },
  {
    question:
      "React Testing Library를 사용한 컴포넌트 테스트 방법에 대해 설명해주세요.",
    answer:
      "React Testing Library는 사용자 관점에서 UI 컴포넌트를 테스트하는 데 중점을 둔 테스트 라이브러리입니다. 주요 특징으로는 1) 구현 세부사항이 아닌 사용자 행동에 초점을 맞춘 테스트, 2) 접근성(a11y) 속성을 활용한 요소 쿼리, 3) 실제 DOM 노드를 렌더링하여 테스트 등이 있습니다. 테스트 방법으로는 a) render() 함수로 컴포넌트 렌더링, b) screen 객체를 통해 요소 쿼리(getBy*, findBy*, queryBy* 등), c) fireEvent 또는 user-event로 사용자 상호작용 시뮬레이션, d) Jest의 expect를 사용한 assertion 작성, e) cleanup으로 테스트 격리 등이 있습니다. 주요 테스트 유형으로는 1) 렌더링 테스트: 컴포넌트가 올바르게 렌더링되는지 확인, 2) 이벤트 핸들링 테스트: 사용자 입력에 따른 동작 검증, 3) 비동기 작업 테스트: API 호출 등의 비동기 동작 검증, 4) 상태 변경 테스트: 상태 변경에 따른 UI 업데이트 확인, 5) 스냅샷 테스트: 컴포넌트 출력의 일관성 확인 등이 있습니다.",
  },
];

export default reactQuestions;
