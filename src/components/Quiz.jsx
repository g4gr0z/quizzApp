import React from "react";

export default function Quiz({quiz}) {
  return (
    <div className="Quiz">
      <h1 className="Question">{quiz.question}</h1>
      <div className="Options">
        {quiz.options.map((option, i) => (
          <button key={i}>{option}</button>
        ))}
      </div>
      <hr />
    </div>
  );
}
