import { TypeQuestionsList } from './../../types/index';
import { data } from './../../data';
import { TypeData } from '../types';

const initialState:TypeQuestionsList = {
    questions:data,
    questionIndex:0,
    currentAnswer:null,
    show:false,
    score:0
}

type TypeInitialState = typeof initialState

export const questions = (state:TypeInitialState = initialState, action:TypeData):TypeInitialState => {
    switch (action.type) {
        case 'SET_QUESTIONS': {
            return {
                ...state,
                questions:action.data
            }
        }

        case 'SET_NEXT_QUESTION': {
            const questionCurrentIndex = state.questionIndex === state.questions.length - 1
            const result = questionCurrentIndex ? state.questionIndex : state.questionIndex + 1
            const show = questionCurrentIndex ? !state.show : state.show

            return {
                ...state,
                questionIndex:result,
                show:show,
                currentAnswer:null
            }
        }

        case 'SET_ANSWER': {
            const correctAnswerCount = 
                action.answer === state.questions[state.questionIndex].correctAnswer 
                ? state.score + 1 : state.score 
            return {
                ...state,
                currentAnswer:action.answer,
                score:correctAnswerCount
            } 
        }

        case 'SET_BACK_QUESTION': {
            const backQuestionIndex = state.questionIndex === state.questions.length - 4 ? state.questionIndex : state.questionIndex - 1 
            return {
                ...state,
                questionIndex:backQuestionIndex
            }
        }

        case 'RESTART': {
            return initialState
        }

        default: {
            return state
        }
    }
}