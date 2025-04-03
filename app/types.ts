// 질문과 답변 인터페이스
export interface QnA {
  question: string;
  answer: string;
}

// 하위 카테고리 인터페이스
export interface SubCategory {
  [key: string]: QnA[];
}

// 메인 데이터 타입
export interface MainDataType {
  CS: QnA[];
  Frontend: SubCategory;
  Mobile: SubCategory;
}
