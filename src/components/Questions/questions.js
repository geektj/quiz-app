import React, { useContext } from 'react';
import { context } from '../../context';

export const Questions = (props) => {
    const { data, questionData } = useContext(context);
    console.log("results", questionData);
    console.log("data", data);
    return(
        <>
        {/* {data.results.map((question) => { */}
            {/* return( */}
                <>
                {/* <div className='questions'>{question.question}</div> */}
                {/* <div> */}
                    {/* <Option /> */}
                {/* </div> */}
                </>
            {/* ) */}
        {/* })} */}
         
        </>
    )
}