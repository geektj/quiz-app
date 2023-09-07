import React, { useContext, useEffect, useState } from "react";
import { context } from "../../context";
// import { Option } from "../Option/option"
import { Button } from "../Button/button";
import "./questions.scss"
import { useNavigate } from 'react-router-dom';

export const Questions = (props) => {
  const { questionData, setQuestionData, selectedQuestion, setSelectedQuestion } = useContext(context);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('')

  useEffect(() => {
    setSelectedOption(selectedQuestion?.selectedAnswer);
  }, [questionData]);

  const onOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  const onSubmit = () => {
    if (selectedQuestion?.id === 15) {
        navigate("/reports");
    } else {
        const currentIndex = questionData?.findIndex(q => q.id === selectedQuestion?.id);
        const nextIndex = questionData?.findIndex((q) => q.id === selectedQuestion?.id + 1);
        if (nextIndex > -1) {
            const data = questionData[nextIndex];
            data.visited = true;
            setSelectedQuestion(data);
        }
        if (currentIndex > -1) {
            const updatedData = questionData
            updatedData[currentIndex].selectedAnswer = selectedOption;
            updatedData[currentIndex].visited = true;
            setQuestionData(updatedData)
        }
    }
  };

  const onPreviousQuestion = () => {
    console.log("previous question");
  };
  return (
    <>
      <div className="question">
        <div className="question-no">Question {selectedQuestion?.id}</div>
        <div className="question-text">{selectedQuestion?.question}</div>
        <div className="options">
          {selectedQuestion?.options?.map((option,index) => (
            <div key={index} className="form-check">
                <input type="radio" name="option" value={option} checked={selectedOption === option} onChange={onOptionChange} className="form-check-input"/>
                <label className="form-check-label">{option}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="button-container">
        <Button label="Previous" onClick={onPreviousQuestion} />
        <Button label={selectedQuestion?.id === 15 ? "Submit": "Save & Next"} onClick={onSubmit} />
      </div>
    </>
  );
};
