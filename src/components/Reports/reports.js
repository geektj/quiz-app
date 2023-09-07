import React, { useContext, useState } from "react";
import { context } from "../../context/index";
import "./reports.scss";
const Reports = (props) => {
  const { questionData } = useContext(context);

  const totalQuestions = questionData.length;
  const correct = questionData.filter(
    (question) => question?.correct_answer === question?.selectedAnswer
  );
  const correctAnswer = correct.length;
  const wrongAnswer = totalQuestions - correctAnswer;
  return (
    <div className="reports-container">
        <div className="title">Reports</div>
      <div className="answer-detail">
        Total No. of question {totalQuestions}, Total Correct Answer{" "}
        {correctAnswer}, Total Wrong Answer {wrongAnswer}
      </div>

      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Question</th>
            <th>Correct Answer</th>
            <th>User Answer</th>
          </tr>
        </thead>
        <tbody>
          {questionData.map((el, index) => (
            <tr key={index}>
              <td>{el?.id}</td>
              <td>{el?.question}</td>
              <td>{el?.correct_answer}</td>
              <td>{el?.selectedAnswer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Reports;
