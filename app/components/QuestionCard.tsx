"use client";

import React, { useState, useEffect } from "react";

type QuestionCardProps = {
  question: string;
  answer: string;
  questionId?: number | string;
  onNext?: () => void;
  onPrev?: () => void;
  showNavigation?: boolean;
};

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  answer,
  questionId,
  onNext,
  onPrev,
  showNavigation = false,
}) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  useEffect(() => {
    setIsAnswerVisible(false);
  }, [question, questionId]);

  const toggleAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 md:p-6 mb-6 transition-all w-full max-w-3xl mx-auto">
      <h3 className="text-base md:text-lg font-medium mb-4">{question}</h3>

      <div className="cursor-pointer" onClick={toggleAnswer}>
        <div
          className={`
          p-3 md:p-4 bg-gray-50 rounded-md
          transition-all duration-300
          ${isAnswerVisible ? "blur-none" : "blur-md"}
        `}
        >
          <p className="text-sm md:text-base">{answer}</p>
        </div>
        <p className="text-xs md:text-sm text-gray-500 mt-2 text-center">
          {isAnswerVisible ? "답안 숨기기" : "클릭하여 답안 보기"}
        </p>
      </div>

      {showNavigation && (
        <div className="flex justify-between mt-6">
          <button
            onClick={onPrev}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg flex items-center transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="mr-1"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            이전
          </button>
          <button
            onClick={onNext}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center transition-colors"
          >
            다음
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="ml-1"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
