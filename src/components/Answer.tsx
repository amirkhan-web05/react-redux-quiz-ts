import React from 'react'
import { useAppSelector } from '../hooks/useAppSelector'
import { TypeQuestions } from '../types'

export const Answer:React.FC<TypeQuestions> = ({answers, onClickAnswer}) => {
  const currentAnswer = useAppSelector(state => state.questions.currentAnswer)
  const questions = useAppSelector(state => state.questions.questions)
  const currentQuestionIndex = useAppSelector(state => state.questions.questionIndex)
    
  return (
    <div>
        {answers.map(answer => {
            const isCorrectAnswer = currentAnswer && answer === questions[currentQuestionIndex].correctAnswer
            const isWrongAnswer = currentAnswer === answer && answer !== questions[currentQuestionIndex].correctAnswer

            return (
                <button 
                    disabled={currentAnswer ? true : false}
                    style={{color:isCorrectAnswer ? 'green' : '' || isWrongAnswer ? 'red' : ''}}
                    onClick={() => onClickAnswer!(answer)} 
                    key={answer}
                    >
                    {answer}
                </button>
            )
        })}
    </div>
  )
}
