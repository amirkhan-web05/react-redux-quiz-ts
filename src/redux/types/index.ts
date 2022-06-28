import { TypeQuestions } from './../../types/index';

export type TypeActionQuestions = {
    type:'SET_QUESTIONS',
    data:TypeQuestions[]
}

export type TypeActionNextQuestion = {
    type:'SET_NEXT_QUESTION'
}

export type TypeActionAnswer = {
    type:'SET_ANSWER'
    answer:string | null
}

export type TypeActionBackQuestion = {
    type:'SET_BACK_QUESTION'
}

export type TypeActionRestart = {
    type:'RESTART'
}

export type TypeData = TypeActionQuestions | TypeActionNextQuestion | TypeActionAnswer | TypeActionBackQuestion | TypeActionRestart