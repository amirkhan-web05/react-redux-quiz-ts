import { useDispatch } from "react-redux";
import { Question } from "./components/Question";
import { useAppSelector } from "./hooks/useAppSelector";
import { backQuestionIndex, nextQuestionIndex } from "./redux/actions/question";

function App() {
  const dispatch = useDispatch()
  const questions = useAppSelector(state => state.questions.questions)
  const questionIndex = useAppSelector(state => state.questions.questionIndex)
  const show = useAppSelector(state => state.questions.show)

  const nextQuestion = () => {
    dispatch(nextQuestionIndex(questionIndex))
  }

  const backQuestion = () => {
    dispatch(backQuestionIndex(questionIndex))
  }

  return (
    <div className="App">
      <h1>Quiz</h1>
      {!show && <div>
        <Question 
          questions={questions} 
          questionIndex={questionIndex}
          currentAnswer={null}
          show={false}
          score={1}
        />
        <button onClick={backQuestion}>Back</button>
        <button onClick={nextQuestion}>Next</button>
      </div>}
      {show && <div>
          <h1>Result</h1>
          <button onClick={() => dispatch({type:'RESTART'})}>Restart</button>
        </div>}
    </div>
  );
}

export default App;
