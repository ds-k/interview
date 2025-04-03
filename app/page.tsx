"use client";

import { useState, useEffect } from "react";
import Tabs from "./components/Tabs";
import SubTabs from "./components/SubTabs";
import QuestionCard from "./components/QuestionCard";
import { QnA, SubCategory, MainDataType } from "./types";

// CS 질문 가져오기
import csQuestions from "./data/cs/csQuestions";
// Frontend 질문 가져오기
import jsQuestions from "./data/frontend/jsQuestion";
import tsQuestions from "./data/frontend/tsQuestions";
import reactQuestions from "./data/frontend/reactQuestions";
// Mobile 질문 가져오기
import flutterQuestions from "./data/mobile/flutterQuestions";

// 실제 데이터 구성
const REAL_DATA: MainDataType = {
  CS: csQuestions,
  Frontend: {
    JavaScript: jsQuestions,
    TypeScript: tsQuestions,
    React: reactQuestions,
  },
  Mobile: {
    Flutter: flutterQuestions,
  },
};

export default function Home() {
  const mainTabs = Object.keys(REAL_DATA);
  const [activeMainTab, setActiveMainTab] = useState(mainTabs[0]);

  // 하위 탭 관련 상태
  const [subTabs, setSubTabs] = useState<string[]>([]);
  const [activeSubTab, setActiveSubTab] = useState<string>("");

  // 퀴즈 모드 관련 상태
  const [viewMode, setViewMode] = useState<"list" | "quiz">("list");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [randomizedQuestions, setRandomizedQuestions] = useState<QnA[]>([]);

  // 메인 탭이 변경될 때 하위 탭 설정
  useEffect(() => {
    if (activeMainTab === "CS") {
      setSubTabs([]);
      setActiveSubTab("");
    } else {
      try {
        const category = REAL_DATA[activeMainTab as keyof MainDataType];
        if (category && typeof category === "object") {
          const newSubTabs = Object.keys(category as SubCategory);
          setSubTabs(newSubTabs);
          if (newSubTabs.length > 0) {
            setActiveSubTab(newSubTabs[0]);
          } else {
            setActiveSubTab("");
          }
        } else {
          setSubTabs([]);
          setActiveSubTab("");
        }
      } catch (error) {
        console.error("서브탭 설정 중 오류:", error);
        setSubTabs([]);
        setActiveSubTab("");
      }
    }
  }, [activeMainTab]);

  // 현재 활성화된 탭/서브탭에 맞는 질문 데이터 가져오기
  const getCurrentQuestions = (): QnA[] => {
    if (activeMainTab === "CS") {
      return REAL_DATA.CS;
    } else {
      const subCategory = REAL_DATA[
        activeMainTab as keyof MainDataType
      ] as SubCategory;

      // 서브탭이 있고, 해당 서브탭의 질문 배열이 존재하는지 확인
      if (activeSubTab && subCategory && subCategory[activeSubTab]) {
        return subCategory[activeSubTab];
      }

      // 서브탭이 없거나 질문 배열이 없으면 빈 배열 반환
      return [];
    }
  };

  // 탭이나 서브탭이 변경될 때 퀴즈 모드 질문 리셋
  useEffect(() => {
    const questions = getCurrentQuestions();
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setRandomizedQuestions(shuffled);
    setCurrentQuestionIndex(0);
  }, [activeMainTab, activeSubTab]);

  const goToNextQuestion = () => {
    if (currentQuestionIndex < randomizedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // 마지막 문제면 처음으로 돌아감
      setCurrentQuestionIndex(0);
    }
  };

  const goToPrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      // 첫 문제면 마지막으로 이동
      setCurrentQuestionIndex(randomizedQuestions.length - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <header className="max-w-4xl mx-auto mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
          개발자 인터뷰 질문
        </h1>
        <p className="text-sm md:text-base text-gray-600 text-center">
          CS, Frontend, Mobile 관련 질문과 답변 모음
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        {/* 메인 탭 */}
        <Tabs
          tabs={mainTabs}
          activeTab={activeMainTab}
          onTabChange={setActiveMainTab}
        />

        {/* 서브 탭 (필요한 경우에만 표시) */}
        {subTabs.length > 0 && (
          <SubTabs
            tabs={subTabs}
            activeTab={activeSubTab}
            onTabChange={setActiveSubTab}
          />
        )}

        {/* 모드 전환 버튼 */}
        <div className="flex justify-center mt-4 mb-6">
          <button
            className={`px-4 py-2 mx-1 rounded-md ${
              viewMode === "list"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setViewMode("list")}
          >
            목록 모드
          </button>
          <button
            className={`px-4 py-2 mx-1 rounded-md ${
              viewMode === "quiz"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setViewMode("quiz")}
          >
            퀴즈 모드
          </button>
        </div>

        {/* 질문 목록 또는 퀴즈 표시 */}
        {viewMode === "list" ? (
          <div className="space-y-4">
            {Array.isArray(getCurrentQuestions()) ? (
              getCurrentQuestions().map((qna, idx) => (
                <QuestionCard
                  key={idx}
                  question={qna.question}
                  answer={qna.answer}
                />
              ))
            ) : (
              <div className="p-4 bg-yellow-100 text-yellow-800 rounded-md">
                질문을 불러오는 중 문제가 발생했습니다. 다른 탭을 선택해보세요.
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center">
            {randomizedQuestions.length > 0 ? (
              <>
                <div className="w-full max-w-2xl">
                  <QuestionCard
                    question={
                      randomizedQuestions[currentQuestionIndex].question
                    }
                    answer={randomizedQuestions[currentQuestionIndex].answer}
                  />
                </div>
                <div className="flex mt-4">
                  <button
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md mx-1"
                    onClick={goToPrevQuestion}
                  >
                    이전 문제
                  </button>
                  <div className="px-4 py-2 bg-gray-100 rounded-md mx-1">
                    {currentQuestionIndex + 1} / {randomizedQuestions.length}
                  </div>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md mx-1"
                    onClick={goToNextQuestion}
                  >
                    다음 문제
                  </button>
                </div>
              </>
            ) : (
              <p>질문이 없습니다.</p>
            )}
          </div>
        )}
      </main>

      <footer className="max-w-4xl mx-auto mt-12 text-center text-gray-500 text-sm">
        © 2025 개발자 인터뷰 질문 모음
        <div className="flex justify-center mt-2">
          <a
            href="https://github.com/ds-k"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-flex items-center px-3 py-1 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            ds-k
          </a>
        </div>
      </footer>
    </div>
  );
}
