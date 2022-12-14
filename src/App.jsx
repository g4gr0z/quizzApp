import React from "react";
import "./App.css";
import Quiz from "./components/Quiz";

export default function App() {
  const [quizMode, setQuizMode] = React.useState(true);
  const [quiz, setQuiz] = React.useState([]);

  // const [question, setQuestion] = React.useState([]);
  console.log(quiz);

  //API FETCH _________________________________________________________________________________________
  React.useEffect(() => {
    fetch(
      "https://the-trivia-api.com/api/questions?categories=general_knowledge&limit=5&difficulty=easy"
    )
      .then((res) => res.json())

      .then((data) => data.map(
        ({ correctAnswer, incorrectAnswers, question, id }) => {
          const options = [...incorrectAnswers];
          const myRandomIndex = Math.floor(Math.random() * 3);
          options.splice(myRandomIndex, 0, correctAnswer);
          const format = { 
            key: id , question, options
          };
          setQuiz(format);
        }
      ));

  }, []);

  function quizSwitch() {
    setQuizMode((oldMode) => !oldMode);
  }

  return (
    <div className="App">
      {quizMode ? (
        //Startscreen...
        <div className="StartScreen">
          <h1>Quizzical</h1>
          <p>Some description Needed</p>
          <button className="StartQuiz" onClick={quizSwitch}>
            Start Quiz
          </button>
        </div>
      ) : (
        <Quiz
          quiz={quiz}
          // key={quiz.quiz.id}
        />
      )}
    </div>
  );
}
