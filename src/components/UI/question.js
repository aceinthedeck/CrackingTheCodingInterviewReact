import React from 'react';

const Question = (props) => {

    return(
        <div>
            <h3>{props.chapter}</h3>
            <hr/>
            <h5>{props.question}</h5>
        </div>
    );

}

export default Question;