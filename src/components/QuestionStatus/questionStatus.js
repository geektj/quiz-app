import React from 'react';
import "./questionStatus.scss";

export const QuestionStatus = () => {
    return(
        <div className='question-status-container'>
            <div className='question-status-index'>
                <div className='status-box'>
                    <div className='circle visited'>0</div>
                    <div className='status-text'>Answered</div>
                </div>
                <div className='status-box'>
                    <div className='circle not-answered'>0</div>
                    <div className='status-text'>Not Answered</div>
                </div>
                <div className='status-box'>
                    <div className='circle not-visited'>0</div>
                    <div className='status-text'>Not Visited</div>
                </div>
            </div>
        </div>
    )
}