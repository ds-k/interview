import { QnA } from "../../types";

const flutterQuestions: QnA[] = [
  {
    question: "Flutter란 무엇인가요?",
    answer:
      "Flutter는 Google에서 개발한 크로스 플랫폼 UI 프레임워크로, 단일 코드베이스로 iOS, Android, 웹, 데스크톱 애플리케이션을 구축할 수 있습니다. Dart 언어를 사용하며, 빠른 개발과 표현력 있는 UI를 위한 핫 리로드 기능과 풍부한 위젯 라이브러리를 제공합니다.",
  },
  {
    question: "Flutter의 위젯(Widget)이란 무엇인가요?",
    answer:
      "위젯은 Flutter에서 UI를 구성하는 기본 요소로, 모든 UI 요소는 위젯으로 이루어져 있습니다. 상태가 변하지 않는 StatelessWidget과 상태가 변할 수 있는 StatefulWidget으로 나뉩니다. Flutter의 위젯은 선언적이고 합성 가능하며, 위젯 트리를 통해 계층적으로 구성됩니다.",
  },
  {
    question: "Flutter의 Hot Reload와 Hot Restart의 차이점은 무엇인가요?",
    answer:
      "Hot Reload는 코드 변경사항을 앱의 현재 상태를 유지하면서 빠르게 적용해주는 기능으로, 위젯 트리를 다시 구축하지만 앱 상태는 유지됩니다. Hot Restart는 앱을 완전히 다시 시작하여 모든 상태가 초기화되며, 더 광범위한 변경사항이 있을 때 사용합니다. Hot Reload는 UI 변경 시 유용하고, Hot Restart는 상태 관련 변경이나 앱 초기화 로직 변경 시 필요합니다.",
  },
  {
    question: "Flutter에서 상태 관리 방법에는 어떤 것들이 있나요?",
    answer:
      "Flutter의 상태 관리 방법으로는 1) setState를 사용한 기본적인 방법, 2) InheritedWidget과 Provider 패턴, 3) BLoC(Business Logic Component) 패턴, 4) GetX, 5) Riverpod, 6) MobX, 7) Redux 등이 있습니다. 각 방법은 앱의 복잡성, 팀 선호도, 성능 요구사항에 따라 선택할 수 있으며, Provider와 Riverpod은 Flutter 팀이 권장하는 방식입니다.",
  },
  {
    question: "Flutter의 BuildContext란 무엇인가요?",
    answer:
      "BuildContext는 위젯 트리에서 현재 위젯의 위치에 대한 참조로, 위젯이 어디에 위치하는지에 대한 정보를 담고 있습니다. 이를 통해 상위 위젯에 접근하거나, 테마 데이터, 미디어 쿼리, 라우트 등 앱의 다양한 정보에 접근할 수 있습니다. BuildContext는 build 메서드의 매개변수로 전달되며, 상태 관리 솔루션에서 데이터를 찾을 때도 사용됩니다.",
  },
  {
    question: "Flutter에서 비동기 프로그래밍은 어떻게 처리하나요?",
    answer:
      "Flutter(Dart)에서 비동기 프로그래밍은 주로 Future와 async/await를 사용하여 처리합니다. Future는 미래에 완료될 연산의 결과를 나타내며, async 함수는 Future를 반환합니다. await 키워드를 사용하여 Future가 완료될 때까지 실행을 일시 중지할 수 있습니다. 또한 Stream을 사용하여 시간에 따라 여러 값을 비동기적으로 처리할 수 있으며, FutureBuilder와 StreamBuilder 위젯으로 비동기 데이터를 UI에 쉽게 통합할 수 있습니다.",
  },
  {
    question: "Flutter의 Navigator와 라우팅 시스템에 대해 설명해주세요.",
    answer:
      "Flutter의 Navigator는 스택 기반 라우팅 시스템으로, 화면 간 이동을 관리합니다. 기본적으로 Navigator.push()로 새 화면을 스택에 추가하고, Navigator.pop()으로 현재 화면을 제거합니다. Named Routes를 사용하면 경로 이름으로 화면을 참조할 수 있고, onGenerateRoute 콜백으로 동적 라우팅이 가능합니다. Flutter 2.0부터는 Navigator 2.0(Router 위젯)이 도입되어 더 선언적인 라우팅과 딥 링크 지원이 향상되었으며, GoRouter, Auto Route 같은 라이브러리도 있습니다.",
  },
  {
    question: "Flutter의 렌더링 과정에 대해 설명해주세요.",
    answer:
      "Flutter의 렌더링 과정은 다음 단계로 이루어집니다: 1) 위젯 레이어에서 build 메서드를 통해 위젯 트리 생성, 2) 위젯은 Element 트리로 변환되어 UI의 구조 정의, 3) Element는 RenderObject 트리를 생성하여 레이아웃 및 페인팅 처리, 4) 레이아웃 단계에서 각 요소의 크기와 위치 계산, 5) 페인팅 단계에서 픽셀로 화면에 그리기. Flutter는 Skia 그래픽 엔진을 사용하여 플랫폼에 관계없이 일관된 렌더링을 보장하며, 이 과정은 16ms 내에 완료되어 60fps의 부드러운 애니메이션을 구현합니다.",
  },
  {
    question: "Flutter의 Isolate란 무엇인가요?",
    answer:
      "Isolate는 Dart의 동시성 단위로, 자바의 스레드와 유사하지만 메모리를 공유하지 않습니다. 각 Isolate는 자체 메모리 힙과 이벤트 루프를 가지며, 메시지 패싱을 통해서만 통신이 가능합니다. Flutter에서 무거운 연산(JSON 파싱, 암호화 등)을 메인 UI 스레드에서 분리하여 처리할 때 Isolate를 사용하면 UI가 버벅거리지 않습니다. compute() 함수나 Isolate.spawn()을 사용하여 새 Isolate를 생성할 수 있으며, Flutter 3.0부터는 backgroundIsolate와 같은 더 편리한 API도 제공됩니다.",
  },
  {
    question: "Flutter의 테스트 종류와 방법에 대해 설명해주세요.",
    answer:
      "Flutter는 세 가지 유형의 테스트를 지원합니다: 1) 단위 테스트(Unit Test): 개별 함수, 메서드, 클래스의 기능 테스트로 flutter_test 패키지의 test() 함수 사용, 2) 위젯 테스트(Widget Test): UI 컴포넌트의 동작과 렌더링 테스트로 testWidgets() 함수와 WidgetTester 사용, 3) 통합 테스트(Integration Test): 실제 기기나 에뮬레이터에서 전체 앱 동작 테스트로 integration_test 패키지 사용. 테스트는 pubspec.yaml에 의존성을 추가하고 test 디렉토리에 작성하며, mocking에는 mockito 패키지가 주로 사용됩니다.",
  },
];

export default flutterQuestions;
