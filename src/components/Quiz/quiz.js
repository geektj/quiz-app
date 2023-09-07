import React from "react";
import { Questions } from "../Questions/questions";
import {Timer} from "../Timer/timer";
import "../../App.scss";
import { QuestionStatus } from "../QuestionStatus/questionStatus";
import { QuestionList } from "../QuestionsList/questionList";

const Quiz = () => {
  return (
    <>
      <div className="container">
      <div className="title">Quiz Questions</div>
        <div className="overview-panel">
          <div className="questions-panel">
            <Questions />
          </div>
          <div className="selected-question-panel">
            <div className="timer-container">
                <Timer />
            </div>
            <div style={{columnGap: "20px", display: "flex", flexDirection: "column"}}>
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
