import { QnA } from "../../types";

const flutterQuestions: QnA[] = [
  {
    question: "Flutter 3.0의 주요 특징은 무엇인가요?",
    answer:
      "Flutter 3.0의 주요 특징으로는 1) iOS, Android, 웹, 데스크톱(Windows, macOS, Linux)을 위한 안정적인 지원으로 6개 플랫폼에서 동시 개발 가능, 2) Material Design 3 지원, 3) 캐스케이드 콜백과 같은 생산성 개선, 4) Dart 2.17의 향상된 열거형 지원, 5) Firebase와의 통합 개선, 6) 성능 개선(메모리 사용량 감소, 컴파일 시간 단축), 7) 웹 플랫폼의 향상된 렌더링(CanvasKit 및 HTML 렌더러) 등이 있습니다.",
  },
  {
    question: "Flutter에서 상태 관리를 위한 Provider 패턴은 어떻게 구현하나요?",
    answer:
      "Provider 패턴 구현 단계: 1) pubspec.yaml에 provider 패키지 추가, 2) ChangeNotifier를 상속받는 데이터 모델 클래스 생성(상태 변경 시 notifyListeners() 호출), 3) 루트 위젯에서 ChangeNotifierProvider로 모델 인스턴스 제공(MaterialApp 등을 MultiProvider로 감싸기), 4) 위젯에서 Provider.of<모델>(context) 또는 Consumer 위젯을 사용해 데이터 접근 및 UI 업데이트. Provider는 InheritedWidget을 추상화하여 쉽게 상태를 전달하고, 변경 감지 시 관련 위젯만 효율적으로 리빌드합니다.",
  },
  {
    question: "Flutter의 'key' 매개변수는 무엇이며, 언제 사용해야 하나요?",
    answer:
      "Key는 Flutter가 위젯 트리에서 위젯의 ID로 사용하는 식별자입니다. Key는 1) 위젯 목록에서 항목이 추가, 제거, 재정렬될 때 위젯의 상태를 보존해야 할 경우(ListView의 항목 등), 2) 동일한 유형의 형제 위젯이 있으면서 해당 위젯의 상태를 개별적으로 관리해야 할 경우, 3) AnimatedSwitcher와 같은 위젯에서 위젯의 동일성을 판단해야 할 경우에 사용합니다. ValueKey, ObjectKey, UniqueKey, GlobalKey 등이 있으며, GlobalKey는 전체 앱에서 위젯에 접근하거나 특정 상태를 제어할 때 사용됩니다.",
  },
  {
    question: "Flutter의 'BuildContext'의 주요 용도는 무엇인가요?",
    answer:
      "BuildContext는 위젯 트리에서 위젯의 위치를 나타내는 객체로, 주요 용도는 1) Theme.of(context)와 같은 메서드로 상위 위젯의 데이터 접근, 2) MediaQuery.of(context)를 통한 화면 크기, 방향 등 정보 획득, 3) Navigator.of(context)를 사용한 화면 전환 기능, 4) Provider.of<T>(context)로 상태 관리 모델 접근, 5) FocusSope.of(context)로 키보드 제어, 6) Scaffold.of(context)를 통한 스낵바 표시 등이 있습니다. BuildContext는 주로 위젯이 위젯 트리의 다른 부분과 상호작용할 때 필요하며, 특히 InheritedWidget에서 제공하는 데이터에 접근하는 중요한 매개체입니다.",
  },
  {
    question: "Flutter에서 성능 최적화를 위한 주요 기법은 무엇인가요?",
    answer:
      "Flutter 성능 최적화 기법: 1) const 생성자 활용으로 위젯 재빌드 방지, 2) ListView.builder와 같은 지연 로딩 위젯 사용, 3) 복잡한 UI를 여러 위젯으로 분할하여 필요한 부분만 리빌드, 4) 이미지 캐싱 및 해상도 최적화, 5) compute() 함수나 Isolate 활용으로 무거운 작업 분리, 6) Flutter DevTools의 Performance 탭으로 병목 현상 식별, 7) shouldRepaint 오버라이드로 불필요한 페인팅 방지, 8) AnimationController 재사용으로 애니메이션 최적화, 9) 불변성(immutability) 패턴 적용, 10) InheritedWidget과 InheritedModel 적절히 활용, 11) NavigationRail이나 SliverAppBar와 같은 경량 위젯 활용, 12) 빌드 시 --release 플래그로 최적화된 앱 생성.",
  },
  {
    question: "Flutter의 Slivers란 무엇이며, 어떤 장점이 있나요?",
    answer:
      "Slivers는 Flutter의 스크롤 가능한 영역을 구성하는 저수준 컴포넌트로, 사용자의 스크롤에 따라 레이아웃이 동적으로 변하는 고급 스크롤 효과를 구현할 수 있습니다. CustomScrollView 내에서 사용되며, 주요 Sliver 위젯으로는 SliverAppBar(스크롤에 따라 확장/축소되는 앱바), SliverList(목록), SliverGrid(그리드), SliverToBoxAdapter(일반 위젯 포함), SliverFillRemaining(남은 공간 채우기) 등이 있습니다. 장점으로는 1) 스크롤 영역의 세밀한 제어, 2) 다양한 스크롤 동작(시차 효과, 고정 헤더 등) 구현, 3) 리스트와 그리드를 같은 스크롤 컨테이너에 혼합, 4) 최적화된 성능(보이는 영역만 렌더링), 5) 복잡한 UI 레이아웃의 유연한 구성이 있습니다.",
  },
  {
    question: "Flutter Widget의 생명주기는 어떻게 되나요?",
    answer:
      "StatefulWidget의 생명주기: 1) createState(): 위젯이 생성될 때 호출되어 State 객체 생성, 2) initState(): State 객체가 초기화될 때 호출(애니메이션, 스트림, 리스너 등 초기화에 사용), 3) didChangeDependencies(): initState() 후와 위젯의 의존성이 변경될 때 호출(InheritedWidget 변경 시), 4) build(): UI 렌더링을 위해 호출(상태 변경 시마다 다시 호출됨), 5) didUpdateWidget(): 부모 위젯이 업데이트되어 이 위젯을 재구성할 때 호출, 6) setState(): 상태 변경 시 호출하는 메서드로 build() 트리거, 7) deactivate(): 위젯이 위젯 트리에서 제거될 때 호출, 8) dispose(): 위젯이 영구적으로 제거될 때 호출(리소스 해제에 사용). StatelessWidget은 상태가 없으므로 build() 메서드만 가지며 속성이 변경될 때마다 새 인스턴스가 생성됩니다.",
  },
  {
    question: "Flutter에서 애니메이션을 구현하는 다양한 방법은 무엇인가요?",
    answer:
      "Flutter 애니메이션 구현 방법: 1) 암시적 애니메이션(AnimatedContainer, AnimatedOpacity 등): 속성 변경 시 자동으로 애니메이션 적용, 2) 명시적 애니메이션(AnimationController와 Tween): 애니메이션의 정확한 제어가 필요할 때 사용, 3) Hero 애니메이션: 화면 전환 시 요소가 자연스럽게 이동하는 효과, 4) 물리 기반 애니메이션(spring, fling): 실제 물리 법칙을 따르는 자연스러운 모션, 5) Lottie 애니메이션: Adobe After Effects로 만든 복잡한 애니메이션 통합, 6) 커스텀 페인터(CustomPainter): 복잡한 그래픽과 애니메이션 직접 구현, 7) Rive 애니메이션: 런타임에 제어 가능한 벡터 애니메이션, 8) 애니메이션 위젯 조합(SequenceAnimation, Staggered Animation): 여러 애니메이션을 시퀀스나 오프셋으로 실행. Flutter의 애니메이션 시스템은 60fps 성능을 유지하며 다양한 애니메이션 방식을 지원합니다.",
  },
  {
    question: "Flutter의 테마 시스템은 어떻게 작동하나요?",
    answer:
      "Flutter의 테마 시스템은 MaterialApp 또는 CupertinoApp의 theme 속성을 통해 구현됩니다. ThemeData 객체로 색상, 글꼴, 버튼 스타일 등 앱 전체의 시각적 요소를 정의하고, 개별 위젯은 Theme.of(context)를 통해 현재 테마에 접근합니다. 주요 특징: 1) 밝은/어두운 테마 지원(brightness 속성), 2) colorScheme을 통한 Material Design 3 색상 체계 정의, 3) textTheme으로 다양한 텍스트 스타일 지정, 4) ThemeExtension을 사용한 커스텀 테마 확장 가능, 5) Theme.of(context).copyWith()로 테마 부분 수정, 6) 동적 테마 변경 지원(상태 관리와 결합), 7) 위젯별 테마 정의(appBarTheme, cardTheme 등). 또한, 다양한 화면 크기에 적응하는 반응형 디자인을 위해 MediaQuery와 LayoutBuilder와 함께 사용됩니다.",
  },
  {
    question: "Flutter에서 국제화(i18n)를 구현하는 방법은 무엇인가요?",
    answer:
      "Flutter 국제화 구현 방법: 1) 기본 방식: flutter_localizations 패키지 추가, pubspec.yaml에 지원 언어 정의, MaterialApp에 localizationsDelegates와 supportedLocales 설정, 2) intl 패키지 사용: arb 파일에 번역 리소스 정의, flutter pub run intl_translation 명령으로 dart 파일 생성, 3) easy_localization 또는 flutter_i18n 같은 라이브러리 활용: JSON/YAML 파일에 번역 관리, 간편한 API 제공, 4) 플러리폼 통합: 플랫폼별 번역 시스템(iOS의 Localizable.strings, Android의 strings.xml)과 통합. 구현 시 고려사항: 언어 방향성(RTL/LTR) 지원, 날짜/시간/숫자 포맷, 복수형 규칙, 컨텍스트에 따른 번역, 동적 언어 전환, 폴백 메커니즘. 최근에는 Dart의 기본 제공 기능인 패키지:intl과 함께 gen-l10n 도구를 사용하는 방식이 권장됩니다.",
  },
  {
    question: "Flutter에서 네이티브 코드를 호출하는 방법은 무엇인가요?",
    answer:
      "Flutter에서 네이티브 코드 호출 방법: 1) 플랫폼 채널(Method Channel): 가장 일반적인 방법으로, 비동기적으로 메시지를 주고받음. Flutter 측에서 MethodChannel 인스턴스 생성 후 invokeMethod()로 호출, 네이티브 측(Android/Java, iOS/Swift)에서 구현체 등록 및 응답 처리, 2) 이벤트 채널(Event Channel): 연속적인 데이터 스트림(센서 데이터, 위치 업데이트 등)을 Flutter로 전송할 때 사용, 3) 피지먼트 채널(Pigeon): 코드 생성 도구로 타입 안전한 인터페이스 생성, 수동 직렬화 불필요, 4) FFI(Foreign Function Interface): C 언어로 작성된 네이티브 라이브러리를 직접 호출, 채널 오버헤드 없이 고성능 실행, 5) 플러그인 시스템: pub.dev에 게시된 네이티브 기능 플러그인 사용(camera, url_launcher 등). 최근에는 FFI와 Pigeon 같은 고급 기술이 단순한 Method Channel보다 선호되는 추세입니다.",
  },
  {
    question:
      "Flutter의 위젯 테스트(Widget Testing)와 통합 테스트(Integration Testing)의 차이점은 무엇인가요?",
    answer:
      "위젯 테스트와 통합 테스트 차이점: 1) 목적 - 위젯 테스트: 개별 위젯이나 위젯 그룹의 UI 동작 검증, 통합 테스트: 전체 앱이 실제 환경에서 의도대로 작동하는지 확인, 2) 실행 환경 - 위젯 테스트: Flutter 테스트 환경에서 실행(실제 디바이스/에뮬레이터 불필요), 통합 테스트: 실제 디바이스나 에뮬레이터에서 실행, 3) 속도 - 위젯 테스트: 빠름(수백 개 테스트 단시간 실행 가능), 통합 테스트: 느림(실제 UI 렌더링과 디바이스 상호작용 포함), 4) 범위 - 위젯 테스트: 단일 위젯이나 화면 단위 테스트, 통합 테스트: 여러 화면과 백엔드 상호작용 포함, 5) 프레임워크 - 위젯 테스트: flutter_test 패키지, testWidgets() 함수, WidgetTester 객체 사용, 통합 테스트: flutter_driver 또는 integration_test 패키지 사용, 6) 목킹 - 위젯 테스트: 종속성 목킹 일반적, 통합 테스트: 실제 서비스와 의존성 사용. 효율적인 테스트 전략은 둘 다 활용하는 것입니다.",
  },
  {
    question:
      "Flutter의 상태 관리 솔루션들의 차이점과 각각 언제 사용하면 좋을까요?",
    answer:
      "Flutter 상태 관리 솔루션 비교: 1) Provider: 간단한 앱에 적합, InheritedWidget 기반 DI 패턴, 낮은 학습 곡선, 코드 양 적음, 2) Riverpod: Provider의 개선판, 컴파일 타임 안전성, 코드 생성 불필요, 의존성 오버라이드 쉬움, 중간 규모 앱에 적합, 3) Bloc: 복잡한 상태 흐름 관리, 이벤트 기반 아키텍처, 테스트 용이성, 상태 변화 추적 명확, 중대형 앱에 적합, 4) MobX: 반응형 프로그래밍, 적은 보일러플레이트, 관찰 가능한 상태와 자동 반응, 5) GetX: 의존성 주입, 라우팅, 상태 관리 통합 솔루션, 빠른 개발 속도, 6) Redux: 예측 가능한 단방향 데이터 흐름, 중앙 집중식 스토어, 디버깅 용이, 7) Cubit: Bloc의 간소화 버전, 이벤트 없이 함수로 상태 변경. 선택 기준: 앱 규모와 복잡성, 팀 경험, 테스트 용이성, 성능 요구사항, 보일러플레이트 허용량 등을 고려해야 합니다.",
  },
  {
    question: "Flutter에서 Firebase를 통합하는 방법과 주요 기능은 무엇인가요?",
    answer:
      "Flutter-Firebase 통합 방법: 1) FlutterFire CLI 설치: 'dart pub global activate flutterfire_cli', 2) 프로젝트 구성: 'flutterfire configure' 명령으로 Firebase 프로젝트 연결, 3) 필요한 패키지 추가: firebase_core(기본), 기능별 패키지(auth, firestore 등) 설치, 4) 초기화: main() 함수에서 Firebase.initializeApp() 호출. 주요 Firebase 기능: 1) Authentication: 이메일/비밀번호, 소셜 로그인, 전화번호 인증 등 사용자 인증, 2) Cloud Firestore: 실시간 NoSQL 데이터베이스, 오프라인 지원, 3) Realtime Database: JSON 기반 실시간 데이터 동기화, 4) Cloud Storage: 이미지, 오디오, 비디오 등 사용자 생성 콘텐츠 저장, 5) Cloud Functions: 서버리스 백엔드 로직, 6) Analytics: 사용자 행동 추적 및 분석, 7) Crashlytics: 앱 충돌 보고 및 분석, 8) Cloud Messaging: 푸시 알림, 9) Remote Config: 원격 앱 설정 관리, 10) Performance Monitoring: 앱 성능 모니터링, 11) ML Kit: 머신러닝 기능 통합. FlutterFire UI 패키지는 인증 UI와 같은 미리 만들어진 위젯도 제공합니다.",
  },
  {
    question: "Flutter의 렌더링 파이프라인은 어떻게 작동하나요?",
    answer:
      "Flutter 렌더링 파이프라인: 1) 위젯 빌드 - 개발자가 작성한 위젯 트리를 Element 트리로 변환, 2) 레이아웃 - RenderObject 트리 생성 및 각 객체의 크기와 위치 계산, 3) 페인팅 - 레이어 트리 생성, 각 요소를 그리기 명령어로 변환, 4) 컴포지팅 - Skia 그래픽 엔진을 사용해 GPU에서 그리기 명령 실행, 화면에 픽셀로 표시. 핵심 클래스들: - Widget: 불변의 UI 설명, build() 메서드로 다른 위젯 생성, - Element: 위젯과 RenderObject 연결, dirty 위젯 관리, - RenderObject: 레이아웃과 페인팅 처리, - Layer: 렌더링 최적화를 위한 중간 표현. 특징: - 60fps 성능 유지를 위한 지터(jank) 방지 설계, - UI 스레드와 GPU 스레드 분리로 효율적 처리, - 증분 레이아웃으로 변경된 부분만 업데이트, - RenderBox 모델(BoxConstraints)을 통한 효율적 레이아웃 계산, - RepaintBoundary로 리페인팅 영역 최적화. 가상 DOM과 유사하지만 네이티브 렌더링으로 성능 향상.",
  },
  {
    question: "Flutter 2.0 이후의 Null Safety는 무엇이며, 어떤 이점이 있나요?",
    answer:
      "Flutter의 Null Safety: Dart 2.12부터 도입된 타입 시스템 향상으로, 변수가 null이 될 수 있는지 명시적으로 선언하도록 하는 기능입니다. 주요 특징: 1) 타입 선언: String(null 불가), String?(null 가능) 형태로 표기, 2) Non-nullable 타입: 초기화 없이 사용 시 컴파일 오류 발생, 3) late 키워드: 초기화를 나중에 하되 null이 아님을 보장, 4) required 키워드: 생성자 매개변수가 반드시 제공되어야 함 표시, 5) ??= 연산자: null일 때만 값 할당, 6) ?. 연산자: null일 수 있는 객체의 메서드/속성 안전하게 접근. 이점: 1) 런타임 오류 감소: null 참조 예외(NullReferenceException)를 컴파일 타임에 발견, 2) 코드 품질 향상: null 처리 의도를 명확하게 표현, 3) 성능 개선: 런타임 null 체크 감소, 4) 유지보수성 향상: 코드 이해 및 리팩토링 용이, 5) 문서화 효과: API 설계 의도 명확화. 마이그레이션: dart migrate 도구를 통해 기존 코드를 Null Safety로 변환 가능합니다.",
  },
  {
    question: "Flutter에서 Custom Painter를 사용하는 방법과 용도는 무엇인가요?",
    answer:
      "CustomPainter 사용 방법: 1) CustomPainter 클래스 상속: paint()와 shouldRepaint() 메서드 구현, 2) 캔버스 조작: paint() 메서드 내에서 Canvas와 Paint 객체로 그리기 작업 수행, 3) CustomPaint 위젯에 적용: painter 속성에 CustomPainter 인스턴스 전달, size 속성으로 그리기 영역 지정. 주요 그리기 기능: - 기본 도형: drawCircle(), drawRect(), drawPath() 등, - 선 그리기: drawLine(), drawLines(), - 텍스트: drawText(), TextPainter 클래스, - 이미지: drawImage(), - 그라데이션/효과: Paint 객체의 shader 속성, BlendMode 등. 용도: 1) 복잡한 사용자 정의 UI 구현(차트, 그래프, 커스텀 게이지), 2) 애니메이션과 결합한 동적 그래픽 효과, 3) 시그니처/그림 그리기 기능, 4) 사용자 정의 클리핑과 마스크, 5) 데이터 시각화(히트맵, 산점도 등), 6) 게임 그래픽, 7) 필터와 이미지 편집 효과. 최적화 팁: 캐싱, Path 객체 재사용, shouldRepaint() 정확히 구현, RepaintBoundary 활용 등을 통해 성능을 개선할 수 있습니다.",
  },
  {
    question:
      "Flutter에서 화면 적응형(반응형) 레이아웃을 구현하는 방법은 무엇인가요?",
    answer:
      "Flutter 반응형 레이아웃 구현 방법: 1) MediaQuery: MediaQuery.of(context).size로 화면 크기 가져와 조건부 레이아웃 적용, 2) LayoutBuilder: 부모 위젯이 제공하는 제약(constraints)에 기반한 반응형 UI 구현, 3) OrientationBuilder: 기기 방향(가로/세로)에 따른 다른 레이아웃 제공, 4) FittedBox: 자식 위젯을 사용 가능한 공간에 맞추어 자동 크기 조정, 5) Flexible/Expanded: Row/Column 내에서 공간 비율에 따른 크기 조정, 6) AspectRatio: 특정 비율(16:9, 4:3 등)로 위젯 크기 유지, 7) AutomaticKeepAlive: 화면 밖으로 나가도 상태 유지, 8) breakpoints 활용: 화면 너비에 따른 레이아웃 전환 기준점 정의(모바일, 태블릿, 데스크톱). 고급 기법: 1) 크기별 다른 위젯 트리 사용, 2) 디바이스 유형 감지(isTablet, isDesktop), 3) 뷰포트 비율에 따른 텍스트 크기 조정(em 단위 개념), 4) 적응형 내비게이션 패턴(BottomNavigationBar → NavigationRail → Drawer), 5) 그리드 시스템 구현. 플러그인 솔루션: responsive_framework, flutter_screenutil, sizer 등의 패키지도 활용 가능합니다.",
  },
  {
    question: "Flutter의 Isolate는 무엇이며, 어떻게 사용하나요?",
    answer:
      "Isolate: Dart의 동시성 모델로, 각 Isolate는 독립적인 메모리 힙과 이벤트 루프를 가진 별도의 실행 스레드입니다. 주요 특징: 1) 공유 메모리 없음: Isolate 간 직접 메모리 공유 불가, 오직 메시지 패싱으로 통신, 2) 병렬 처리: 멀티코어 활용 가능, 3) 안전성: 경쟁 조건 방지, 4) 메인 UI 차단 방지: 무거운 작업을 별도 Isolate에서 처리. 사용 방법: 1) compute() 함수: 가장 간단한 방법, 단일 함수 실행 및 결과 반환, 2) Isolate.spawn(): 더 세밀한 제어 필요 시 사용, 3) 통신: SendPort와 ReceivePort로 메시지 주고받음, 4) Flutter 3.7+ 부터는 BackgroundIsolateBinaryMessenger 지원. 적합한 사용 사례: 1) JSON 파싱/직렬화, 2) 암호화/복호화, 3) 이미지 처리, 4) 데이터베이스 작업, 5) 네트워크 요청 처리, 6) 계산 집약적 알고리즘. 한계: 1) 시작 오버헤드, 2) 메시지 전달 시 직렬화 필요, 3) UI 위젯은 메인 Isolate에서만 업데이트 가능. 최근에는 Isolate Groups와 같은 고급 기능으로 성능과 사용성이 개선되고 있습니다.",
  },
  {
    question: "Flutter의 BuildContext와 Navigator의 관계는 무엇인가요?",
    answer:
      "BuildContext와 Navigator 관계: BuildContext는 위젯 트리에서 위젯의 위치를 나타내는 객체로, Navigator는 BuildContext를 통해 위젯 트리에서 자신의 위치를 찾고 화면 전환을 관리합니다. 주요 연관성: 1) Navigator 접근법: Navigator.of(context)는 BuildContext를 사용해 위젯 트리에서 가장 가까운 Navigator 인스턴스를 찾습니다, 2) 화면 이동: context를 통해 계층 구조를 파악하고 적절한 라우팅 결정, 3) 중첩 Navigator: 각각 고유한 context 영역 가짐, 4) 화면 반환 값: Navigator.pop(context, result)에서 context로 반환할 Navigator 결정. 문제 상황: 1) 'of' 메서드 오류: 현재 context에서 상위 트리에 Navigator가 없을 때 발생, 2) 비동기 후 context 사용: 위젯이 이미 트리에서 제거된 후 context 참조 시 오류, 3) Builder 패턴 필요: 때로는 새로운 BuildContext를 생성해야 함. 해결책: 1) context 캡처: 지역 변수에 현재 유효한 context 저장, 2) Builder/FutureBuilder 활용: 최신 context 확보, 3) GlobalKey 사용: 특정 위젯에 직접 접근, 4) Navigator 2.0 API: Router, RouteInformationParser 등 사용. Flutter의 widget-element-renderObject 트리 이해는 context와 Navigator의 관계를 이해하는 핵심입니다.",
  },
  {
    question: "Flutter의 앱 시작 절차(App Bootstrap)는 어떻게 되나요?",
    answer:
      "Flutter 앱 시작 절차: 1) main() 함수 호출: Dart 앱의 진입점, WidgetsFlutterBinding.ensureInitialized()로 Flutter 엔진 초기화, 2) runApp() 호출: 루트 위젯을 받아 위젯 트리 구성 시작, 3) 플랫폼 채널 설정: Flutter와 네이티브 플랫폼 간 통신 채널 초기화, 4) 위젯 트리 첫 빌드: 루트 위젯에서 시작해 모든 자식 위젯 생성, 5) 레이아웃 및 렌더링: RenderObject 트리 생성 및 첫 프레임 렌더링, 6) 첫 프레임 알림: SchedulerBinding.instance.addPostFrameCallback로 등록된 콜백 실행. 성능 최적화 기법: 1) 지연 초기화: 무거운 리소스는 필요할 때 로드, 2) 이미지 프리캐싱: precacheImage()로 중요 이미지 미리 로드, 3) 코드 분할: deferred imports로 필요한 코드만 로드, 4) 시작 화면 최적화: 복잡한 위젯 대신 플레이스홀더 사용, 5) 컴파일 최적화: AOT(Ahead-of-Time) 컴파일로 시작 시간 단축. Flutter 3.0+ 부터는 flutter_native_splash, app_links 등의 패키지로 시작 경험을 향상시킬 수 있습니다.",
  },
  {
    question: "Flutter의 Hot Reload와 Hot Restart의 차이점은 무엇인가요?",
    answer:
      "Hot Reload와 Hot Restart 차이점: 1) 작동 방식 - Hot Reload: 변경된 소스 코드를 새로운 Dart 코드로 컴파일하고, 위젯 트리를 다시 빌드하되 앱 상태는 유지, Hot Restart: 앱을 완전히 다시 시작하고 모든 상태 초기화, 2) 속도 - Hot Reload: 매우 빠름(보통 1초 이내), Hot Restart: Hot Reload보다 느림(몇 초 소요), 3) 상태 유지 - Hot Reload: 앱 상태(변수값, 네비게이션 스택 등) 유지, Hot Restart: 모든 상태 초기화(메모리 초기화), 4) 적용 한계 - Hot Reload: 메서드 시그니처 변경, 클래스 구조 변경 등의 일부 변경사항은 적용되지 않음, Hot Restart: 거의 모든 코드 변경사항 적용 가능. 사용 시점: 1) Hot Reload: UI 변경, 위젯 속성 조정, 로직 버그 수정 등 대부분의 개발 작업, 2) Hot Restart: 상태 초기화가 필요한 경우, Hot Reload로 적용되지 않는 변경사항 적용 시, 앱이 비정상 상태일 때. Flutter 특유의 이 빠른 개발 사이클은 생산성 향상의 핵심 요소이며, 장치나 에뮬레이터에서 즉시 변경 사항을 확인할 수 있습니다.",
  },
  {
    question:
      "Flutter의 FutureBuilder와 StreamBuilder의 차이점과 사용 시나리오는 무엇인가요?",
    answer:
      "FutureBuilder와 StreamBuilder 비교: 1) 데이터 소스 - FutureBuilder: 단일 값을 비동기적으로 반환하는 Future 객체 사용, StreamBuilder: 시간에 따라 여러 값을 연속적으로 방출하는 Stream 객체 사용, 2) 업데이트 빈도 - FutureBuilder: Future가 완료되면 한 번만 UI 업데이트, StreamBuilder: Stream이 새 값을 방출할 때마다 UI 업데이트, 3) 생명주기 - FutureBuilder: Future 완료 후 작업 종료, StreamBuilder: Stream이 닫힐 때까지 지속적으로 작동. 사용 시나리오: 1) FutureBuilder: HTTP 요청의 응답 표시, 데이터베이스에서 한 번 데이터 로드, 파일 읽기, 시간이 걸리는 계산 작업, 2) StreamBuilder: 실시간 데이터 업데이트(채팅, 알림), 사용자 입력 처리(검색 필드), 센서 데이터 표시(위치, 가속도계), Firebase Firestore 실시간 업데이트, WebSocket 연결. 공통 속성: future/stream, initialData, builder 함수 등. 성능 고려사항: 1) builder 내부에서 무거운 계산 피하기, 2) 상태에 따른 적절한 위젯 반환(ConnectionState 활용), 3) 에러 처리, 4) StreamSubscription 관리 및 취소. Flutter에서 이 두 위젯은 선언적 방식으로 비동기 데이터를 UI에 반영하는 핵심 도구입니다.",
  },
  {
    question: "Flutter의 InheritedWidget은 무엇이며, 어떻게 작동하나요?",
    answer:
      "InheritedWidget: Flutter의 위젯 트리를 통해 자식 위젯에게 데이터를 효율적으로 전달하는 특수한 위젯 유형입니다. 작동 방식: 1) 데이터 공유: 위젯 트리의 상위에서 데이터를 정의하고 하위 위젯들이 접근 가능, 2) 컨텍스트 기반 검색: context.dependOnInheritedWidgetOfExactType<T>()를 통해 가장 가까운 상위 InheritedWidget 접근, 3) 의존성 추적: 자식 위젯이 InheritedWidget에 의존성을 등록하면 데이터 변경 시 자동으로 리빌드, 4) 효율적 업데이트: updateShouldNotify() 메서드로 변경 사항 발생 시에만 의존 위젯 업데이트. 사용 사례: 1) 테마 데이터 전달(Theme), 2) 미디어 쿼리 정보 제공(MediaQuery), 3) 지역화 설정 공유(Localizations), 4) 사용자 인증 정보 접근, 5) 앱 설정 공유, 6) Provider, Riverpod 등 상태 관리 라이브러리의 기반. InheritedWidget 직접 구현 단계: 1) InheritedWidget 클래스 확장, 2) 생성자와 공유할 데이터 정의, 3) updateShouldNotify() 메서드 구현, 4) 편의를 위한 static of() 메서드 제공. 향상된 패턴: 1) InheritedModel: 세분화된 의존성 추적, 2) InheritedNotifier: ChangeNotifier와 결합, 3) InheritedWidget + StatefulWidget: 데이터 변경 가능한 구조.",
  },
  {
    question:
      "Flutter에서 Go Router와 같은 선언적 라우팅 시스템의 장점은 무엇인가요?",
    answer:
      "Go Router와 같은 선언적 라우팅 시스템의 장점: 1) 선언적 API: 명령형 코드(push, pop) 대신 URI와 상태에 따라 라우팅 정의, 2) 딥 링크 지원: 웹 URL 구조와 유사한 경로 기반 내비게이션으로 딥 링크 구현 용이, 3) 웹 통합: 웹 브라우저 히스토리와 URL 바 동기화 지원, 4) 중첩 라우팅: 하위 경로와 중첩된 네비게이션 구조 쉽게 정의, 5) 리디렉션: 인증 상태 등에 따른 자동 리디렉션 로직 구현, 6) 상태 보존: 화면 이동 후에도 위젯 상태 유지 지원, 7) 타입 안전성: 코드 완성 및 컴파일 타임 검사 가능, 8) 테스트 용이성: 라우팅 로직 분리로 테스트 작성 쉬움. Navigator 2.0/Router API의 복잡성을 추상화하면서도 강력한 기능 제공. Go Router 특징: 1) 경로 매개변수(path parameters) 지원, 2) 쿼리 매개변수 파싱, 3) 상태 기반 라우팅(뒤로 가기 처리), 4) 에러 페이지 처리, 5) 페이지 전환 애니메이션 커스터마이징. URL 기반 라우팅은 화면 간 이동을 명확하게 하고 앱 상태를 공유하기 쉽게 만듭니다.",
  },
  {
    question:
      "Flutter에서 Mixin을 사용하는 방법과 주요 사용 사례는 무엇인가요?",
    answer:
      "Flutter에서 Mixin 사용 방법: 1) 선언: mixin 키워드로 Mixin 정의(class 대신), 2) 적용: with 키워드를 사용해 클래스에 Mixin 결합, 3) 제한: on 키워드로 특정 클래스에만 사용되도록 제한 가능(예: mixin MyMixin on MyClass). 주요 사용 사례: 1) 상태 관리 보조: AutomaticKeepAliveClientMixin으로 TabView에서 상태 유지, 2) 스크롤 처리: ScrollAwareMixin으로 스크롤 이벤트 감지, 3) 테마 접근: ThemeDataMixin으로 테마 속성 쉽게 접근, 4) 애니메이션: SingleTickerProviderStateMixin/TickerProviderStateMixin으로 애니메이션 컨트롤러 사용, 5) 위젯 수명 주기 확장: WidgetsBindingObserver 기능 추가, 6) 로깅/디버깅: 로깅 기능을 여러 클래스에 추가, 7) 유틸리티 함수: 공통 기능을 여러 클래스에서 재사용. Mixin은 다중 상속의 장점(코드 재사용)을 제공하면서 단점(다이아몬드 문제)을 피할 수 있게 해줍니다. Dart의 믹스인은 클래스 계층 구조를 오염시키지 않고 기능을 확장하는 강력한 방법입니다.",
  },
  {
    question:
      "Flutter의 싱글톤(Singleton) 패턴과 서비스 로케이터(Service Locator) 패턴의 구현 방법과 차이점은 무엇인가요?",
    answer:
      "싱글톤과 서비스 로케이터 구현 방법과 차이점: 1) 싱글톤 패턴 구현 - 정적 인스턴스: private 생성자와 static 인스턴스로 구현, factory 생성자: 인스턴스 존재 여부 확인 후 반환, late static final: Dart 2.12+ 에서 지연 초기화 지원. 코드 예시: ```class ApiService { static final ApiService _instance = ApiService._internal(); factory ApiService() => _instance; ApiService._internal(); }``` 2) 서비스 로케이터 패턴 구현 - get_it 패키지 활용: 타입 기반 의존성 관리 시스템, 등록: GetIt.instance.registerSingleton<T> 또는 registerLazySingleton<T>, 접근: GetIt.instance<T>() 호출. 차이점: 1) 결합도 - 싱글톤: 직접 참조로 강한 결합, 서비스 로케이터: 인터페이스 기반으로 느슨한 결합, 2) 테스트 용이성 - 싱글톤: 의존성 주입 어려움, 서비스 로케이터: 모의 객체(mock) 교체 용이, 3) 유연성 - 싱글톤: 구현 변경 어려움, 서비스 로케이터: 구현체 쉽게 교체 가능, 4) 생명주기 - 싱글톤: 앱 전체 수명, 서비스 로케이터: 필요에 따라 재설정 가능. 최근 Flutter 앱에서는 의존성 주입(DI) 패턴과 함께 get_it, injectable 같은 패키지를 활용한 서비스 로케이터 방식이 더 선호됩니다.",
  },
  {
    question: "Flutter에서 Clean Architecture를 구현하는 방법은 무엇인가요?",
    answer:
      "Flutter Clean Architecture 구현 방법: 1) 계층 분리 - 프레젠테이션 계층: UI 위젯, 상태 관리, 사용자 상호작용 처리, 도메인 계층: 비즈니스 로직, 엔티티, 유스케이스, 리포지토리 인터페이스, 데이터 계층: 리포지토리 구현, 원격/로컬 데이터 소스, DTO 모델. 2) 폴더 구조 - lib/presentation/: 화면, 위젯, 컨트롤러, 뷰모델, lib/domain/: 엔티티, 유스케이스, 리포지토리 인터페이스, lib/data/: 데이터 소스, 리포지토리 구현, 모델. 3) 의존성 방향 - 안쪽(domain)으로만 의존: 외부 계층은 내부 계층에 의존, 내부 계층은 외부 계층 모름, 의존성 역전: 인터페이스를 통한 추상화. 4) 구현 도구 - 상태 관리: Bloc/Cubit, Riverpod, Provider 등, 의존성 주입: get_it, injectable, 자동 생성: freezed, json_serializable. 5) 테스트 용이성 - 유스케이스 단위 테스트: 비즈니스 로직 검증, 위젯 테스트: UI 동작 검증, 통합 테스트: 전체 흐름 검증. 주요 장점: 높은 테스트 가능성, 유지보수 용이성, 코드 분리와 재사용성, 기술 스택 변경 용이성. 소규모 앱에서는 오버엔지니어링처럼 보일 수 있지만, 복잡하고 장기적인 앱 개발에서 큰 가치를 발휘합니다.",
  },
];

export default flutterQuestions;
