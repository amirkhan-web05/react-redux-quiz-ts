import React from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../hooks/useAppSelector'
import { setCurrentAnswer } from '../redux/actions/question'
import { TypeQuestionsList } from '../types'
import { Answer } from './Answer'

export const Question:React.FC<TypeQuestionsList> = () => {
  const dispatch = useDispatch()
  const questions = useAppSelector(state => state.questions.questions)
  const questionIndex = useAppSelector(state => state.questions.questionIndex)
  const score = useAppSelector(state => state.questions.score)

  const answerCheck = (answer:string) => {
    dispatch(setCurrentAnswer(answer))
  }

  return (
    <div>
        <h1>{questions[questionIndex].questionText}</h1>
        <h3>Score: {score} / {questions.length}</h3>
        <Answer 
            correctAnswer={''} 
            questionText={''} 
            onClickAnswer={answerCheck}
            answers={questions[questionIndex].answers}
        />
    </div>
  )
}
