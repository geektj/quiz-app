import React, { useContext } from 'react';
import "./questionList.scss";
import { context } from '../../context/index';
import { getStatus } from '../../utils';
export const QuestionList = (props) => {
    const {questionData, setSelectedQuestion} = useContext(context);

    const handleClick = (question) => {
        question.visited = true;
        setSelectedQuestion(question);
    }
    return(
        <div className='question-list-container'>
            <span className='list-header'>Choose a question</span>
            <div className='question-listing'>
                {questionData?.map((question) => <div className={`circle ${getStatus(question)}`} key={question?.id} onClick={() => handleClick(question)}>{question?.id}</div>)}
            </div>
            
        </div>
    )
}