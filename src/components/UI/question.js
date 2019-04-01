import React from 'react';

const Question = (props) => {

    return(
        <div>
            <h3>{props.chapter}</h3>
            <h4>{props.question}</h4>
        </div>
    );

}

export default Question;