export type TypeQuestions = {
    questionText:string
    answers:string[]
    correctAnswer:string
    onClickAnswer?: (answer:string) => void;
}

export type TypeQuestionsList = {
    questions:TypeQuestions[]
    currentAnswer:null | string
    questionIndex:number
    show:boolean
    score:number
}