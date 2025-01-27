'use client'

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ChevronRight, CheckCircle } from 'lucide-react';

interface Lesson {
  id: string;
  title: string;
  content: string;
}

interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  quiz: {
    id: string;
    questions: Question[];
  };
}

interface CourseModuleProps {
  module: Module;
  onComplete: () => void;
}

export const CourseModule: React.FC<CourseModuleProps> = ({ module, onComplete }) => {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleNextLesson = () => {
    if (currentLessonIndex < module.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
      setProgress((currentLessonIndex + 1) * (100 / module.lessons.length));
    } else {
      setShowQuiz(true);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{module.title}</CardTitle>
        <Progress value={progress} className="w-full mt-2" />
      </CardHeader>
      <CardContent>
        {!showQuiz ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              {module.lessons[currentLessonIndex].title}
            </h2>
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: module.lessons[currentLessonIndex].content }}
            />
            <Button
              onClick={handleNextLesson}
              className="mt-4"
            >
              {currentLessonIndex < module.lessons.length - 1 ? (
                <>Next Lesson <ChevronRight className="ml-2 h-4 w-4" /></>
              ) : (
                <>Take Quiz <CheckCircle className="ml-2 h-4 w-4" /></>
              )}
            </Button>
          </div>
        ) : (
          <QuizComponent quiz={module.quiz} onComplete={onComplete} />
        )}
      </CardContent>
    </Card>
  );
};

const QuizComponent: React.FC<{ quiz: Module['quiz']; onComplete: () => void }> = ({ quiz, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, { selected: number; isCorrect: boolean }>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (answerIndex: number) => {
    const isCorrect = answerIndex === quiz.questions[currentQuestion].correctAnswer;
    setAnswers({
      ...answers,
      [currentQuestion]: { selected: answerIndex, isCorrect }
    });
    setShowExplanation(true);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      onComplete();
    }
  };

  const question = quiz.questions[currentQuestion];
  const answer = answers[currentQuestion];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">{question.text}</h3>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={showExplanation}
            variant={
              showExplanation
                ? index === question.correctAnswer
                  ? 'default'
                  : answer?.selected === index
                  ? 'destructive'
                  : 'outline'
                : 'outline'
            }
            className="w-full justify-start text-left"
          >
            {option}
          </Button>
        ))}
      </div>
      {showExplanation && (
        <div className="bg-muted p-4 rounded-lg">
          <p className="font-medium">Explanation:</p>
          <p>{question.explanation}</p>
          <Button onClick={handleNext} className="mt-4">
            {currentQuestion < quiz.questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
          </Button>
        </div>
      )}
    </div>
  );
};
