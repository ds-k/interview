import { QnA } from "../../types";

const jsQuestions: QnA[] = [
  {
    question: "호이스팅(Hoisting)이란 무엇인가요?",
    answer:
      "호이스팅은 JavaScript에서 변수 및 함수 선언이 스코프의 최상단으로 끌어올려지는 것처럼 동작하는 특성입니다. var로 선언된 변수는 undefined로 초기화되어 호이스팅되지만, let과 const로 선언된 변수는 호이스팅은 되지만 초기화되지 않은 상태(TDZ)로 남습니다.",
  },
  {
    question: "클로저(Closure)란 무엇인가요?",
    answer:
      "클로저는 함수와 그 함수가 선언된 렉시컬 환경의 조합입니다. 클로저를 이용하면 외부 함수의 실행이 끝난 후에도 내부 함수가 외부 함수의 변수에 접근할 수 있습니다. 이는 데이터 캡슐화, 상태 유지 등에 유용하게 사용됩니다.",
  },
  {
    question: "var, let, const의 차이점은 무엇인가요?",
    answer:
      "var는 함수 스코프를 가지며 재선언과 재할당이 가능합니다. let은 블록 스코프를 가지며 재할당은 가능하지만 재선언은 불가능합니다. const는 블록 스코프를 가지며 재선언과 재할당이 모두 불가능합니다. 단, const로 선언된 객체의 내부 속성은 변경 가능합니다.",
  },
  {
    question:
      "이벤트 버블링(Event Bubbling)과 이벤트 캡처링(Event Capturing)이란 무엇인가요?",
    answer:
      "이벤트 버블링은 특정 요소에서 이벤트가 발생했을 때, 그 이벤트가 상위 요소로 전파되는 현상입니다. 이벤트 캡처링은 그 반대로, 최상위 요소에서 시작하여 이벤트가 발생한 요소까지 내려가는 현상입니다. addEventListener의 세 번째 파라미터를 true로 설정하면 캡처링 단계에서 이벤트를 처리합니다.",
  },
  {
    question: "this 키워드란 무엇이며, 어떻게 동작하나요?",
    answer:
      "this는 현재 실행 컨텍스트를 가리키는 키워드입니다. 함수 호출 방식에 따라 다르게 바인딩됩니다. 일반 함수 호출에서는 전역 객체(window/global), 메서드 호출에서는 메서드를 소유한 객체, 생성자 함수에서는 새로 생성된 인스턴스, call/apply/bind 메서드를 사용하면 명시적으로 바인딩된 객체, 화살표 함수에서는 외부 스코프의 this를 가리킵니다.",
  },
  {
    question: "프로토타입(Prototype)이란 무엇인가요?",
    answer:
      "JavaScript는 프로토타입 기반 언어로, 모든 객체는 자신의 프로토타입 객체를 가리키는 내부 링크(prototype)를 가집니다. 객체의 프로퍼티에 접근할 때, 해당 객체에 프로퍼티가 없으면 프로토타입 체인을 따라 상위 프로토타입 객체에서 프로퍼티를 찾습니다. 이를 통해 코드 재사용과 상속을 구현할 수 있습니다.",
  },
  {
    question: "Promise란 무엇이며, 콜백과 비교했을 때 어떤 장점이 있나요?",
    answer:
      "Promise는 비동기 작업의 최종 완료(또는 실패)와 그 결과값을 나타내는 객체입니다. 콜백 대신 Promise를 사용하면 1) 콜백 지옥을 피하고 코드를 더 읽기 쉽게 작성할 수 있고, 2) then()과 catch()를 통해 성공과 실패를 명확히 처리할 수 있으며, 3) Promise.all(), Promise.race() 등을 통해 여러 비동기 작업을 쉽게 다룰 수 있습니다.",
  },
  {
    question: "async/await란 무엇이며, Promise와 어떻게 연관되어 있나요?",
    answer:
      "async/await는 ES2017에서 도입된 비동기 코드를 동기적으로 보이게 작성할 수 있는 문법입니다. async 함수는 항상 Promise를 반환하며, await는 Promise가 처리될 때까지 함수의 실행을 일시 중지합니다. 이를 통해 Promise 체인보다 더 직관적으로 비동기 코드를 작성할 수 있습니다.",
  },
  {
    question: "이벤트 루프(Event Loop)란 무엇인가요?",
    answer:
      "이벤트 루프는 JavaScript가 단일 스레드임에도 비동기 작업을 할 수 있게 해주는 메커니즘입니다. 콜 스택, 태스크 큐, 마이크로태스크 큐로 구성되며, 콜 스택이 비었을 때 태스크 큐의 태스크를 콜 스택으로 이동시켜 실행합니다. 마이크로태스크(Promise)는 태스크보다 우선순위가 높아 현재 태스크 종료 후 즉시 실행됩니다.",
  },
  {
    question: "실행 컨텍스트(Execution Context)란 무엇인가요?",
    answer:
      "실행 컨텍스트는 코드가 실행되기 위해 필요한 환경(변수, 함수 선언, this 바인딩 등)을 제공하는 객체입니다. 전역 실행 컨텍스트, 함수 실행 컨텍스트, eval 실행 컨텍스트가 있으며, 코드 실행 시 콜 스택에 쌓이고 실행이 끝나면 스택에서 제거됩니다. 각 실행 컨텍스트는 변수 환경(Variable Environment), 렉시컬 환경(Lexical Environment), this 바인딩 등을 포함합니다.",
  },
  {
    question: "스코프(Scope)와 스코프 체인(Scope Chain)이란 무엇인가요?",
    answer:
      "스코프는 변수와 함수의 접근성과 생존 기간을 제어하는 범위입니다. 전역 스코프와 지역 스코프(함수 스코프, 블록 스코프)가 있습니다. 스코프 체인은 현재 스코프에서 변수를 찾지 못했을 때 상위 스코프로 거슬러 올라가며 변수를 찾는 메커니즘입니다. 이는 렉시컬 스코프(Lexical Scope)라고도 하며, 함수가 선언된 위치에 따라 상위 스코프가 결정됩니다.",
  },
  {
    question:
      "깊은 복사(Deep Copy)와 얕은 복사(Shallow Copy)의 차이점은 무엇인가요?",
    answer:
      "얕은 복사는 객체의 최상위 속성만 새로운 객체에 복사하는 방식으로, 중첩된 객체는 참조를 공유합니다. 얕은 복사는 Object.assign(), 스프레드 연산자({...obj}) 등으로 수행할 수 있습니다. 깊은 복사는 객체의 모든 속성(중첩된 객체 포함)을 새로운 객체에 복사하므로 원본과 복사본이 완전히 독립적입니다. 깊은 복사는 JSON.parse(JSON.stringify(obj)) 또는 lodash의 _.cloneDeep() 등으로 구현할 수 있습니다.",
  },
  {
    question: "함수 선언식과 함수 표현식의 차이점은 무엇인가요?",
    answer:
      "함수 선언식(function declaration)은 'function 함수명() {}'의 형태로 작성되며, 호이스팅에 의해 코드 실행 전에 함수 전체가 메모리에 저장되어 선언 전에도 호출할 수 있습니다. 함수 표현식(function expression)은 'const 변수 = function() {}'의 형태로 작성되며, 변수 선언만 호이스팅되고 함수 할당은 런타임에 이루어져 선언 이전에 호출할 수 없습니다.",
  },
  {
    question:
      "JavaScript의 원시 타입(Primitive Types)과 참조 타입(Reference Types)에 대해 설명해주세요.",
    answer:
      "원시 타입은 불변성을 가진 단일 값으로, 변수에 직접 값이 저장됩니다. String, Number, Boolean, Null, Undefined, Symbol, BigInt가 원시 타입입니다. 참조 타입은 여러 값으로 구성된 객체로, 변수에는 메모리 주소(참조)가 저장됩니다. Object, Array, Function, Date, RegExp, Map, Set 등이 참조 타입입니다. 원시 타입은 값의 복사가, 참조 타입은 참조의 복사가 이루어집니다.",
  },
  {
    question:
      "JavaScript의 동등 연산자(==)와 일치 연산자(===)의 차이점은 무엇인가요?",
    answer:
      "동등 연산자(==)는 타입 변환(coercion)을 수행한 후 값을 비교합니다. 예를 들어, '1' == 1은 true입니다. 일치 연산자(===)는 타입 변환 없이 값과 타입이 모두 같은지 비교합니다. 예를 들어, '1' === 1은 false입니다. 일반적으로 버그를 방지하기 위해 일치 연산자(===)를 사용하는 것이 권장됩니다.",
  },
  {
    question:
      "JavaScript의 모듈 시스템(ES Modules와 CommonJS)에 대해 설명해주세요.",
    answer:
      "ES Modules(ESM)는 ECMAScript 표준으로, import/export 구문을 사용하며 정적 분석이 가능하고 트리 쉐이킹을 지원합니다. CommonJS는 Node.js의 기본 모듈 시스템으로, require/module.exports를 사용하며 동적 로딩을 지원합니다. ESM은 브라우저와 최신 Node.js에서 지원되며, CommonJS는 주로 Node.js에서 사용됩니다. ESM은 비동기적으로 로드되고, CommonJS는 동기적으로 로드됩니다.",
  },
  {
    question:
      "JavaScript의 이벤트 델리게이션(Event Delegation)이란 무엇인가요?",
    answer:
      "이벤트 델리게이션은 여러 요소에 개별적으로 이벤트 리스너를 추가하는 대신, 상위 요소에 하나의 이벤트 리스너를 추가하여 하위 요소의 이벤트를 처리하는 기법입니다. 이벤트 버블링을 활용하며, event.target으로 실제 이벤트가 발생한 요소를 식별합니다. 이는 메모리 사용량을 줄이고, 동적으로 추가되는 요소에 대해서도 이벤트 처리가 가능하게 합니다.",
  },
  {
    question: "JavaScript의 메모리 관리와 가비지 컬렉션은 어떻게 동작하나요?",
    answer:
      "JavaScript는 자동 메모리 관리를 제공하는 가비지 컬렉션 언어입니다. 객체가 생성되면 자동으로 메모리가 할당되고, 더 이상 참조되지 않는 객체는 가비지 컬렉터에 의해 자동으로 메모리가 해제됩니다. 주요 알고리즘으로는 참조 횟수(Reference Counting)와 표시하고 쓸기(Mark and Sweep)가 있습니다. 메모리 누수를 방지하기 위해 불필요한 참조를 제거하는 것이 중요합니다.",
  },
  {
    question: "JavaScript에서 'use strict'의 목적은 무엇인가요?",
    answer:
      "'use strict'는 JavaScript 코드를 더 엄격한 모드로 실행하게 하는 지시문입니다. 이는 1) 선언되지 않은 변수 사용 금지, 2) 삭제할 수 없는 속성 삭제 시도 금지, 3) 중복된 함수 매개변수 금지, 4) this가 전역 객체를 참조하지 않음(undefined로 설정) 등의 규칙을 적용합니다. 이를 통해 더 안전한 코드 작성을 유도하고 암묵적 오류를 줄일 수 있습니다.",
  },
  {
    question: "JavaScript의 고차 함수(Higher-order Functions)란 무엇인가요?",
    answer:
      "고차 함수는 다른 함수를 인자로 받거나 함수를 반환하는 함수입니다. map(), filter(), reduce() 등이 대표적인 고차 함수입니다. 이를 통해 코드를 더 선언적이고 추상화된 방식으로 작성할 수 있으며, 함수형 프로그래밍의 핵심 개념입니다. 고차 함수는 코드 재사용성을 높이고 복잡한 로직을 더 간결하게 표현할 수 있습니다.",
  },
  {
    question: "JavaScript에서 불변성(Immutability)을 어떻게 구현할 수 있나요?",
    answer:
      "불변성은 생성된 데이터가 변경되지 않는 특성입니다. 원시 타입은 기본적으로 불변이지만, 객체는 가변적입니다. 객체의 불변성을 구현하는 방법으로는 1) Object.freeze()를 사용하여 객체를 동결, 2) 스프레드 연산자나 Object.assign()을 사용하여 새 객체 생성, 3) Immer, Immutable.js 같은 라이브러리 사용, 4) 불변 데이터 패턴을 따르는 함수형 프로그래밍 등이 있습니다.",
  },
  {
    question: "JavaScript의 데코레이터(Decorator)란 무엇인가요?",
    answer:
      "데코레이터는 클래스, 메서드, 접근자, 프로퍼티 또는 매개변수에 대한 설계 시간 선언을 수정하거나 주석을 달기 위한 특별한 선언입니다. @decorator 형식으로 사용되며, 클래스나 메서드 등을 수정하지 않고 기능을 확장할 수 있게 해줍니다. TypeScript에서 널리 사용되며, JavaScript에서는 현재 Stage 3 제안 상태입니다. Angular, Ember, MobX 등의 프레임워크와 라이브러리에서 활용됩니다.",
  },
  {
    question: "JavaScript의 Proxy 객체란 무엇인가요?",
    answer:
      "Proxy는 객체의 기본 동작(속성 조회, 할당, 열거, 함수 호출 등)을 가로채고 수정할 수 있는 객체입니다. target 객체와 handler 객체를 매개변수로 받아 생성되며, handler에는 get, set, apply 등의 트랩(trap)을 정의할 수 있습니다. 이를 통해 유효성 검사, 로깅, 객체 가상화, 값 변환 등 다양한 기능을 구현할 수 있습니다. Vue 3의 반응성 시스템은 Proxy를 기반으로 구현되었습니다.",
  },
  {
    question: "JavaScript의 Symbol 타입이란 무엇인가요?",
    answer:
      "Symbol은 ES6에서 도입된 원시 타입으로, 유일하고 변경 불가능한 값을 생성합니다. 주로 객체의 속성 키로 사용되어 이름 충돌을 방지하고, 내부 속성이나 메서드를 정의하는 데 사용됩니다. Symbol() 함수로 생성하며, Symbol.for()를 사용하면 전역 심볼 레지스트리에서 공유 가능한 심볼을 생성할 수 있습니다. 또한 Symbol.iterator, Symbol.asyncIterator 등의 내장 심볼을 통해 객체의 기본 동작을 커스터마이즈할 수 있습니다.",
  },
  {
    question: "JavaScript의 Generator 함수란 무엇인가요?",
    answer:
      "Generator 함수는 함수 실행을 중간에 중지하고 재개할 수 있는 특별한 함수입니다. function* 키워드로 선언하며, yield 표현식을 사용하여 값을 반환하고 실행을 일시 중지합니다. Generator 함수를 호출하면 Iterator 객체가 반환되며, next() 메서드를 통해 실행을 재개하고 다음 yield까지 진행합니다. 비동기 프로그래밍, 무한 시퀀스 생성, 데이터 스트림 처리 등에 유용하게 사용됩니다.",
  },
  {
    question:
      "JavaScript에서 IIFE(즉시 실행 함수 표현식)란 무엇이며, 어떤 경우에 사용하나요?",
    answer:
      "IIFE(Immediately Invoked Function Expression)는 정의되자마자 즉시 실행되는 함수 표현식입니다. (function() { ... })() 또는 (function() { ... }()) 형태로 작성합니다. IIFE는 1) 전역 스코프 오염 방지, 2) 변수의 private 스코프 생성, 3) 클로저를 통한 상태 유지, 4) 모듈 패턴 구현 등에 사용됩니다. ES6 모듈이 도입되기 전에는 모듈화의 주요 방법이었으며, 현재도 특정 상황에서 유용하게 사용됩니다.",
  },
  {
    question: "JavaScript에서 Temporal Dead Zone(TDZ)이란 무엇인가요?",
    answer:
      "Temporal Dead Zone은 변수가 선언되었지만 초기화되지 않은 상태로 있는 스코프의 일부분을 의미합니다. let과 const로 선언된 변수는 선언 이전에 접근할 수 없으며, 이 기간 동안 변수에 접근하면 ReferenceError가 발생합니다. TDZ는 변수 선언 시작부터 초기화될 때까지 존재하며, 이를 통해 호이스팅의 혼란을 줄이고 더 예측 가능한 코드를 작성할 수 있습니다.",
  },
  {
    question:
      "JavaScript에서 메모이제이션(Memoization)이란 무엇이며, 어떻게 구현하나요?",
    answer:
      "메모이제이션은 함수 호출 결과를 캐싱하여 동일한 입력에 대해 재계산하지 않고 저장된 결과를 반환하는 최적화 기법입니다. 주로 피보나치 수열, 팩토리얼 등의 재귀 함수나 계산 비용이 큰 함수에 적용됩니다. 구현 방법으로는 클로저를 사용하여 캐시 객체를 생성하고, 함수 호출 시 캐시에 결과가 있는지 확인 후 있으면 반환하고 없으면 계산하여 캐시에 저장하는 방식이 일반적입니다.",
  },
  {
    question:
      "JavaScript의 웹 스토리지(Web Storage)와 쿠키(Cookie)의 차이점은 무엇인가요?",
    answer:
      "웹 스토리지(localStorage, sessionStorage)는 쿠키보다 큰 저장 용량(일반적으로 5MB)을 제공하고, 서버로 자동 전송되지 않아 네트워크 트래픽을 줄일 수 있습니다. localStorage는 브라우저를 닫아도 데이터가 유지되고, sessionStorage는 세션이 종료되면 데이터가 삭제됩니다. 쿠키는 용량이 작고(4KB), HTTP 요청 시 자동으로 서버에 전송되며, 만료 날짜와 도메인, 경로 등을 설정할 수 있습니다. 쿠키는 주로 세션 관리, 사용자 추적에 사용되고, 웹 스토리지는 클라이언트 측 데이터 저장에 적합합니다.",
  },
  {
    question:
      "JavaScript에서 동시성(Concurrency)과 병렬성(Parallelism)에 대해 설명해주세요.",
    answer:
      "동시성은 여러 작업이 겹치는 기간에 실행되는 것으로, 단일 스레드에서도 이벤트 루프를 통해 비동기적으로 구현할 수 있습니다. JavaScript는 기본적으로 동시성을 지원하며, Promise, async/await, setTimeout 등을 통해 구현합니다. 병렬성은 여러 작업이 정확히 같은 시점에 실행되는 것으로, 멀티 코어를 활용한 멀티 스레딩이 필요합니다. JavaScript는 Web Workers, SharedArrayBuffer, Atomics를 통해 제한적인 병렬 처리를 지원합니다.",
  },
  {
    question:
      "JavaScript에서 브라우저 렌더링 과정을 최적화하는 방법은 무엇인가요?",
    answer:
      "브라우저 렌더링 최적화 방법으로는 1) DOM 조작 최소화 및 일괄 처리, 2) 레이아웃 스레싱(thrashing) 방지를 위해 offsetHeight 등의 속성 읽기와 쓰기 분리, 3) requestAnimationFrame을 사용한 애니메이션 구현, 4) 복잡한 계산을 Web Worker로 이동, 5) 이미지 최적화 및 지연 로딩, 6) CSS 애니메이션 사용(transform, opacity), 7) 가상 DOM 활용, 8) 불필요한 리렌더링 방지, 9) 코드 스플리팅과 지연 로딩(lazy loading) 등이 있습니다.",
  },
];

export default jsQuestions;
