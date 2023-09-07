import React, { useContext } from "react";
import { Questions } from "../Questions/questions";
import { Timer } from "../Timer/timer";
import "../../App.scss";
import { QuestionStatus } from "../QuestionStatus/questionStatus";
import { QuestionList } from "../QuestionsList/questionList";
import { context } from "../../context/index";

const Quiz = () => {
  const { name, email } = useContext(context);

  const firstLetterName = name.charAt(0)
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="title">Quiz Questions</div>
          <div className="user-name">
            {name ? <div className="placeholder">{firstLetterName}</div> : " "}
            <div className="name">{name}</div>
            </div>
        </div>

        <div className="overview-panel">
          <div className="questions-panel">
            <Questions />
          </div>
          <div className="selected-question-panel">
            <div className="timer-container">
              <Timer />
            </div>
            <div
              style={{
                gap: "40px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <QuestionStatus />
              <QuestionList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Quiz;
