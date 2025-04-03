import { QnA } from "../../types";

const tsQuestions: QnA[] = [
  {
    question: "TypeScript란 무엇이며, JavaScript와 어떤 차이점이 있나요?",
    answer:
      "TypeScript는 Microsoft가 개발한 JavaScript의 슈퍼셋(Superset) 언어로, 정적 타입을 추가하여 코드의 안정성과 가독성을 향상시킵니다. JavaScript는 동적 타입 언어이지만, TypeScript는 컴파일 시점에 타입 검사를 수행하여 많은 오류를 사전에 발견할 수 있습니다. TypeScript 코드는 컴파일 과정을 거쳐 JavaScript로 변환되어 실행됩니다.",
  },
  {
    question:
      "TypeScript에서 인터페이스(Interface)와 타입(Type)의 차이점은 무엇인가요?",
    answer:
      "인터페이스는 객체의 구조를 정의하고 확장(extends)이 가능하며 선언 병합이 가능합니다. 타입은 인터페이스보다 더 넓은 범위의 타입 정의가 가능하고 유니온, 인터섹션 등의 타입 조작이 가능합니다. 대부분의 경우 둘 다 사용 가능하지만, 복잡한 타입을 정의할 때는 타입을, 객체 구조를 정의할 때는 인터페이스를 주로 사용합니다.",
  },
  {
    question: "TypeScript의 제네릭(Generic)이란 무엇인가요?",
    answer:
      "제네릭은 타입을 마치 함수의 파라미터처럼 사용할 수 있게 해주는 기능입니다. 코드의 재사용성을 높이고 타입 안정성을 유지하면서 다양한 타입에 대응할 수 있습니다. 함수, 인터페이스, 클래스 등에서 사용할 수 있으며, 'function identity<T>(arg: T): T { return arg; }'와 같이 <T>로 표현합니다.",
  },
  {
    question: "TypeScript에서 'any'와 'unknown' 타입의 차이점은 무엇인가요?",
    answer:
      "any 타입은 모든 타입의 값을 허용하고, 타입 검사를 완전히 우회하여 어떤 속성에도 접근할 수 있습니다. unknown 타입도 모든 타입의 값을 허용하지만, 타입을 확인하거나 타입 단언(assertion)을 통해 타입을 좁히지 않으면 해당 값의 속성에 접근할 수 없습니다. unknown은 any보다 더 안전한 타입입니다.",
  },
  {
    question: "TypeScript의 Enum이란 무엇이며, 어떤 상황에서 사용하나요?",
    answer:
      "Enum은 관련된 상수 값들의 집합을 정의하는 타입입니다. 명명된 상수 세트를 만들어 코드의 가독성과 유지보수성을 향상시킵니다. 예를 들어, 'enum Direction { Up, Down, Left, Right }'처럼 정의합니다. 주로 상태, 방향, 옵션 등과 같이 제한된 값의 집합을 표현할 때 사용합니다. JavaScript로 컴파일되면 객체로 변환됩니다.",
  },
  {
    question: "TypeScript에서 '타입 가드(Type Guard)'란 무엇인가요?",
    answer:
      "타입 가드는 특정 스코프 내에서 변수의 타입을 보장하는 런타임 검사입니다. 'typeof', 'instanceof', 'in' 연산자, 사용자 정의 타입 가드 함수(is 키워드 사용) 등을 통해 구현할 수 있습니다. 타입 가드를 사용하면 유니온 타입 등에서 특정 타입으로 타입을 좁혀(narrowing) 안전하게 해당 타입의 속성에 접근할 수 있습니다.",
  },
  {
    question:
      "TypeScript에서 유니온(Union) 타입과 인터섹션(Intersection) 타입의 차이점은 무엇인가요?",
    answer:
      "유니온 타입(|)은 여러 타입 중 하나일 수 있는 값을 표현하며, 'string | number'처럼 사용합니다. 인터섹션 타입(&)은 여러 타입을 모두 만족하는 값을 표현하며, 'A & B'처럼 사용합니다. 유니온은 '또는(OR)'의 개념이고, 인터섹션은 '그리고(AND)'의 개념입니다. 인터섹션은 주로 여러 인터페이스나 타입을 결합할 때 사용됩니다.",
  },
  {
    question: "TypeScript에서 'keyof' 연산자는 무엇인가요?",
    answer:
      "keyof 연산자는 객체 타입의 모든 키를 문자열 또는 숫자 리터럴 유니온으로 추출합니다. 예를 들어, 'interface Person { name: string; age: number; }' 타입이 있을 때, 'keyof Person'은 'name' | 'age' 타입이 됩니다. 이를 통해 객체의 키를 타입으로 사용할 수 있으며, 제네릭과 함께 사용하면 객체의 특정 키에 접근하는 함수 등을 타입 안전하게 만들 수 있습니다.",
  },
  {
    question: "TypeScript의 '타입 단언(Type Assertion)'이란 무엇인가요?",
    answer:
      "타입 단언은 개발자가 컴파일러에게 특정 값의 타입을 명시적으로 지정하는 것입니다. 'value as Type' 또는 '<Type>value' 형식으로 사용합니다(JSX에서는 as 문법만 사용 가능). 타입 단언은 타입 변환이 아니라 컴파일러에게 '나는 이 타입이 무엇인지 알고 있다'고 알려주는 것입니다. 런타임에는 영향을 주지 않으며, 주로 컴파일러가 추론하지 못하는 상황에서 사용합니다.",
  },
  {
    question:
      "TypeScript에서 선택적 프로퍼티(Optional Properties)와 선택적 체이닝(Optional Chaining)이란 무엇인가요?",
    answer:
      "선택적 프로퍼티는 객체 타입에서 필수가 아닌 속성을 표현하는 방법으로, 프로퍼티 이름 뒤에 물음표(?)를 붙여 'interface Person { name: string; age?: number; }'처럼 사용합니다. 선택적 체이닝은 객체의 중첩된 속성에 안전하게 접근하기 위한 연산자로, 'obj?.prop?.method?()'처럼 사용합니다. 앞의 참조가 null이나 undefined면 표현식의 평가를 중단하고 undefined를 반환합니다.",
  },
  {
    question: "TypeScript에서 '타입 추론(Type Inference)'이란 무엇인가요?",
    answer:
      "타입 추론은 TypeScript 컴파일러가 코드의 문맥에 따라 자동으로 타입을 결정하는 기능입니다. 변수 초기화, 함수 반환 값, 기본 매개변수 값 등을 통해 타입을 추론합니다. 예를 들어, 'let x = 3;'에서 x는 자동으로 number 타입으로 추론됩니다. 타입 추론을 통해 명시적 타입 annotation 없이도 타입 안전성을 유지하면서 간결한 코드를 작성할 수 있습니다.",
  },
  {
    question: "TypeScript에서 'typeof' 연산자는 어떻게 사용되나요?",
    answer:
      "TypeScript에서 typeof는 JavaScript의 런타임 연산자와 타입 연산자로 두 가지 용도로 사용됩니다. 런타임에서는 'typeof value'처럼 값의 타입을 문자열로 반환합니다. 타입 컨텍스트에서는 'typeof SomeValue'처럼 값의 타입을 추출합니다. 예를 들어, 'const person = { name: 'John' }; type PersonType = typeof person;'에서 PersonType은 { name: string } 타입이 됩니다.",
  },
  {
    question:
      "TypeScript에서 클래스의 접근 제한자(Access Modifiers)에 대해 설명해주세요.",
    answer:
      "TypeScript 클래스에서는 public, private, protected 세 가지 접근 제한자를 제공합니다. public은 기본값으로 어디서든 접근 가능합니다. private은 해당 클래스 내부에서만 접근할 수 있습니다. protected는 해당 클래스와 상속받은 자식 클래스에서 접근할 수 있습니다. 또한 ECMAScript 비공개 필드(#)도 지원하여 런타임에서도 캡슐화를 유지할 수 있습니다.",
  },
  {
    question: "TypeScript에서 'readonly' 프로퍼티란 무엇인가요?",
    answer:
      "readonly 키워드는 속성이 초기화 후에 변경될 수 없음을 나타냅니다. 인터페이스나 클래스에서 'readonly property: type' 형식으로 선언합니다. 읽기 전용 속성은 선언 시점이나 생성자에서 초기화될 수 있지만, 이후에는 수정할 수 없습니다. 배열의 경우 'ReadonlyArray<T>' 타입이나 'as const' 단언을 사용할 수 있습니다. readonly는 컴파일 시점에만 체크되며, JavaScript로 변환 시 제거됩니다.",
  },
  {
    question:
      "TypeScript에서 '인덱스 시그니처(Index Signatures)'란 무엇인가요?",
    answer:
      "인덱스 시그니처는 객체의 모든 가능한 키에 대한 타입을 정의하는 방법입니다. '[key: KeyType]: ValueType' 형식으로 사용하며, KeyType은 보통 string 또는 number입니다. 예를 들어, 'interface StringMap { [key: string]: string }'는 모든 문자열 키가 문자열 값을 가지는 객체를 정의합니다. 인덱스 시그니처를 사용하면 동적 속성을 가진 객체를 타입 안전하게 다룰 수 있습니다.",
  },
  {
    question: "TypeScript의 '튜플(Tuple)' 타입이란 무엇인가요?",
    answer:
      "튜플은 고정된 길이와 각 위치마다 특정 타입을 가지는 배열입니다. '[Type1, Type2, ...]' 형식으로 정의하며, 예를 들어 '[string, number]'는 첫 요소가 문자열, 두 번째 요소가 숫자인 배열을 의미합니다. 튜플은 '?'를 사용해 선택적 요소를 가질 수 있고, '...Type[]'으로 나머지 요소를 정의할 수 있습니다. 튜플은 함수에서 여러 값을 반환하거나 CSV 데이터처럼 특정 구조의 데이터를 표현할 때 유용합니다.",
  },
  {
    question:
      "TypeScript에서 '함수 오버로딩(Function Overloading)'이란 무엇인가요?",
    answer:
      "함수 오버로딩은 동일한 이름의 함수가 다양한 매개변수 조합으로 여러 다른 동작을 수행할 수 있게 하는 기능입니다. TypeScript에서는 여러 개의 함수 선언과 하나의 구현체로 정의합니다. 예를 들어, 'function add(a: number, b: number): number;' 와 'function add(a: string, b: string): string;'처럼 선언한 후, 'function add(a: any, b: any): any { ... }'로 구현합니다. 컴파일러는 호출 시 인자에 따라 적절한 타입을 선택합니다.",
  },
  {
    question: "TypeScript에서 '타입 별칭(Type Alias)'이란 무엇인가요?",
    answer:
      "타입 별칭은 'type' 키워드를 사용하여 타입에 새로운 이름을 부여하는 기능입니다. 'type Point = { x: number; y: number };'처럼 사용합니다. 기본 타입, 유니온, 튜플 등 모든 타입에 별칭을 지정할 수 있으며, 제네릭도 사용 가능합니다. 인터페이스와 달리 객체 타입 외에도 사용할 수 있고, 선언 병합이 되지 않습니다. 복잡한 타입을 간결하게 표현하거나 재사용할 때 유용합니다.",
  },
  {
    question:
      "TypeScript에서 '인덱스 접근 타입(Indexed Access Types)'이란 무엇인가요?",
    answer:
      "인덱스 접근 타입은 다른 타입의 특정 속성의 타입을 조회하는 방법입니다. 'Type[Key]' 형식으로 사용하며, 배열 요소 접근처럼 동작합니다. 예를 들어, 'interface Person { name: string; age: number; }; type Age = Person['age'];'에서 Age는 number 타입이 됩니다. 또한 'Person[keyof Person]'처럼 keyof와 함께 사용하여 모든 속성의 타입 유니온을 얻을 수도 있습니다. 이 기능은 타입의 일부를 재사용할 때 유용합니다.",
  },
  {
    question: "TypeScript의 '매핑된 타입(Mapped Types)'이란 무엇인가요?",
    answer:
      "매핑된 타입은 기존 타입의 속성을 기반으로 새로운 타입을 생성하는 방법입니다. '{ [P in K]: T }' 형식으로 사용하며, 기존 타입의 각 속성을 반복하여 변환합니다. 예를 들어, 'type Readonly<T> = { readonly [P in keyof T]: T[P] };'는 모든 속성을 읽기 전용으로 만들고, 'type Partial<T> = { [P in keyof T]?: T[P] };'는 모든 속성을 선택적으로 만듭니다. '+/-' 수식어로 readonly나 선택적 속성을 추가하거나 제거할 수 있습니다.",
  },
  {
    question: "TypeScript에서 '조건부 타입(Conditional Types)'이란 무엇인가요?",
    answer:
      "조건부 타입은 타입 수준에서 조건문처럼 동작하는 타입입니다. 'T extends U ? X : Y' 형식으로 사용하며, T가 U에 할당 가능하면 X, 아니면 Y 타입이 됩니다. 제네릭과 함께 사용하면 입력 타입에 따라 출력 타입이 달라지는 유연한 타입을 정의할 수 있습니다. 'infer' 키워드를 사용하면 조건부 타입 내에서 타입 추론이 가능하며, 내장 유틸리티 타입인 ReturnType, Parameters 등에서 활용됩니다.",
  },
  {
    question:
      "TypeScript의 '유틸리티 타입(Utility Types)'에 대해 설명해주세요.",
    answer:
      "유틸리티 타입은 타입 변환을 쉽게 하기 위해 TypeScript가 제공하는 내장 제네릭 타입입니다. 주요 유틸리티 타입으로는 Partial<T>(모든 속성을 선택적으로), Required<T>(모든 속성을 필수로), Readonly<T>(모든 속성을 읽기 전용으로), Record<K, T>(키 타입 K, 값 타입 T인 객체), Pick<T, K>(T에서 K 속성만 선택), Omit<T, K>(T에서 K 속성 제외), Exclude<T, U>(T에서 U 제외), Extract<T, U>(T와 U의 교집합), NonNullable<T>(null/undefined 제외), ReturnType<F>(함수 반환 타입), Parameters<F>(함수 매개변수 타입) 등이 있습니다.",
  },
  {
    question:
      "TypeScript에서 '네임스페이스(Namespace)'와 'ES 모듈'의 차이점은 무엇인가요?",
    answer:
      "네임스페이스는 TypeScript의 고유 기능으로, 'namespace Name { ... }' 형식으로 사용하며, 전역 스코프 오염을 방지하기 위해 관련 코드를 그룹화합니다. ES 모듈은 ECMAScript 표준으로, 'import/export' 구문을 사용하며 파일 단위로 모듈화합니다. ES 모듈은 트리 쉐이킹, 비동기 로딩 등의 최적화가 가능하고 브라우저와 Node.js에서 기본적으로 지원됩니다. 현대 TypeScript 개발에서는 네임스페이스보다 ES 모듈 사용이 권장되며, 레거시 코드나 특수한 상황에서만 네임스페이스를 사용합니다.",
  },
  {
    question:
      "TypeScript의 '타입 호환성(Type Compatibility)'과 '구조적 타이핑(Structural Typing)'이란 무엇인가요?",
    answer:
      "타입 호환성은 한 타입이 다른 타입에 할당 가능한지를 결정하는 규칙입니다. TypeScript는 명목적 타이핑(nominal typing)이 아닌 구조적 타이핑(structural typing)을 사용합니다. 구조적 타이핑에서는 타입의 이름이 아니라 구조(멤버와 그 타입)가 호환성을 결정합니다. 예를 들어, 두 클래스가 다른 이름을 가져도 같은 구조를 가지면 서로 호환됩니다. 이는 덕 타이핑(duck typing)과 유사하며, TypeScript의 유연성을 높이지만 때로는 의도하지 않은 호환성을 허용할 수 있습니다.",
  },
  {
    question: "TypeScript에서 '선언 병합(Declaration Merging)'이란 무엇인가요?",
    answer:
      "선언 병합은 동일한 이름으로 선언된 여러 개의 분리된 선언을 하나의 정의로 결합하는 TypeScript의 기능입니다. 인터페이스, 네임스페이스, 클래스, 열거형 등에서 발생할 수 있습니다. 특히 인터페이스는 동일한 이름으로 여러 번 선언하면 모든 속성이 병합됩니다. 예를 들어, 'interface Box { height: number; } interface Box { width: number; }'는 'interface Box { height: number; width: number; }'와 동일합니다. 이 기능은 라이브러리의 타입 정의를 확장할 때 유용하게 사용됩니다.",
  },
  {
    question:
      "TypeScript에서 'this 매개변수'와 'this 타입'에 대해 설명해주세요.",
    answer:
      "this 매개변수는 함수나 메서드의 첫 번째 매개변수로 선언되며, 'function fn(this: Type, ...)'처럼 사용합니다. 이는 함수 내에서 this의 타입을 명시하여 컴파일러가 잘못된 this 사용을 감지할 수 있게 합니다. this 타입은 F-bounded 다형성을 구현하기 위해 사용되며, 메서드가 포함된 클래스나 인터페이스를 가리킵니다. 메서드 체이닝을 구현할 때 유용하며, 'return this;'와 같이 사용할 수 있습니다. TypeScript 3.7부터는 this가 가리키는 객체의 타입을 정확히 추론할 수 있습니다.",
  },
  {
    question:
      "TypeScript에서 '엄격한 null 검사(Strict Null Checking)'란 무엇인가요?",
    answer:
      "엄격한 null 검사는 TypeScript의 '--strictNullChecks' 컴파일러 옵션으로 활성화되며, null과 undefined를 다른 타입과 명확히 구분합니다. 이 옵션이 활성화되면, null 또는 undefined 값을 다른 타입에 할당할 수 없으며, 유니온 타입을 통해 명시적으로 허용해야 합니다. 예를 들어, 'let s: string = null;'은 오류가 발생하지만, 'let s: string | null = null;'은 유효합니다. 또한 타입 가드나 선택적 체이닝 연산자(?.), null 병합 연산자(??)를 통해 null 값을 안전하게 처리할 수 있습니다. 이 기능은 많은 런타임 오류를 방지합니다.",
  },
  {
    question:
      "TypeScript의 'tsconfig.json' 파일의 주요 설정 옵션에 대해 설명해주세요.",
    answer:
      "tsconfig.json은 TypeScript 프로젝트의 컴파일 옵션을 설정하는 파일입니다. 주요 옵션으로는 'compilerOptions'(컴파일러 설정), 'include/exclude/files'(포함/제외할 파일 패턴), 'extends'(다른 설정 파일 상속) 등이 있습니다. 중요한 컴파일러 옵션으로는 'target'(출력 JavaScript 버전), 'module'(모듈 시스템), 'strict'(엄격한 타입 검사), 'esModuleInterop'(CommonJS와 ES Module 호환성), 'outDir'(출력 디렉토리), 'rootDir'(소스 디렉토리), 'baseUrl'과 'paths'(모듈 경로 매핑) 등이 있습니다. 프로젝트 요구사항에 맞게 이러한 옵션을 조정하여 타입 안전성과 개발 경험을 최적화할 수 있습니다.",
  },
  {
    question:
      "TypeScript에서 '타입 주석(Type Annotation)'과 '타입 단언(Type Assertion)'의 차이점은 무엇인가요?",
    answer:
      "타입 주석은 변수, 매개변수, 반환 값 등의 타입을 명시적으로 선언하는 방법으로, 'variable: Type' 형식으로 사용합니다. 이는 컴파일러에게 예상되는 타입을 알려주고 코드 문서화에 도움이 됩니다. 타입 단언은 개발자가 컴파일러보다 타입을 더 잘 알고 있을 때 사용하는 방법으로, 'value as Type' 또는 '<Type>value' 형식으로 사용합니다. 타입 단언은 타입 변환이 아니라 컴파일러에게 값의 타입을 알려주는 것이며, 런타임에는 영향을 주지 않습니다. 가능하면 타입 주석을 사용하고, 필요한 경우에만 타입 단언을 사용하는 것이 좋습니다.",
  },
  {
    question:
      "TypeScript에서 '명목적 타이핑(Nominal Typing)'을 구현하는 방법은 무엇인가요?",
    answer:
      "TypeScript는 기본적으로 구조적 타이핑을 사용하지만, 브랜드화(branding), 교차 타입, 클래스, 열거형 등을 활용해 명목적 타이핑을 흉내낼 수 있습니다. 브랜드화는 타입에 고유한 속성을 추가하는 방법으로, 'type UserId = string & { __brand: 'userId' };'처럼 사용합니다. 또한 클래스의 private/protected 멤버나 Symbol 속성을 사용하여 구조가 같더라도 타입이 다르게 처리되도록 할 수 있습니다. 열거형(enum)도 명목적 타이핑 특성을 가지므로, 서로 다른 열거형 간에는 값이 같더라도 호환되지 않습니다. 이러한 기법은 타입 안전성을 높이고 실수를 방지하는 데 도움이 됩니다.",
  },
  {
    question:
      "TypeScript에서 '타입 정의 파일(.d.ts)'은 무엇이며, 어떤 역할을 하나요?",
    answer:
      "타입 정의 파일(.d.ts)은 JavaScript 코드의 타입 정보를 제공하는 파일입니다. 이 파일은 코드의 구현 없이 타입 정보만 포함하며, 주로 JavaScript 라이브러리에 TypeScript 지원을 추가하거나, API의 타입을 정의할 때 사용됩니다. '@types' 네임스페이스 아래의 패키지로 제공되거나(예: @types/react), 라이브러리 자체에 포함될 수 있습니다. 타입 정의 파일은 'declare' 키워드를 사용하여 변수, 함수, 클래스, 네임스페이스 등의 타입을 선언합니다. 'tsc --declaration' 옵션으로 TypeScript 코드에서 자동 생성할 수도 있으며, 이를 통해 JavaScript 개발자도 TypeScript의 타입 검사 혜택을 받을 수 있습니다.",
  },
  {
    question:
      "TypeScript의 '템플릿 리터럴 타입(Template Literal Types)'이란 무엇인가요?",
    answer:
      "템플릿 리터럴 타입은 TypeScript 4.1에서 도입된 기능으로, JavaScript의 템플릿 리터럴 문법을 타입 수준에서 사용할 수 있게 해줍니다. 'type Direction = `${'up' | 'down' | 'left' | 'right'}_${'start' | 'end'}`;'처럼 문자열 리터럴 타입을 결합하여 새로운 문자열 리터럴 타입을 생성할 수 있습니다. 이는 'up_start', 'up_end', 'down_start' 등의 조합을 포함하는 유니온 타입이 됩니다. API 경로, CSS 속성, 이벤트 이름 등 문자열 패턴이 정해진 경우에 유용하며, 타입 안전성을 높이고 자동 완성을 지원합니다. 내장 유틸리티 타입인 Uppercase, Lowercase, Capitalize, Uncapitalize와 함께 사용하면 더 강력한 타입 변환이 가능합니다.",
  },
];

export default tsQuestions;
