export const nextQuestionIndex = (currentQuestionIndex:number) => ({
    type:'SET_NEXT_QUESTION',
    currentQuestionIndex
})

export const backQuestionIndex = (currentQuestionIndex:number) => ({
    type:'SET_BACK_QUESTION',
    currentQuestionIndex
})

export const setCurrentAnswer = (answer:string) => ({
    type:'SET_ANSWER',
    answer
})