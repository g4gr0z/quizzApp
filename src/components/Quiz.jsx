import React from "react";

export default function Quiz(props, key) {
  return (
    <div className="Quiz">
      <h1 className="Question">{props.quiz.question.question}</h1>
      <div className="Options">
        {props.quiz.options.options.map((option, i) => (
          <button key={props.quiz.key.id}>{option}</button>
        ))}
      </div>
      <hr />
    </div>
  );
}
