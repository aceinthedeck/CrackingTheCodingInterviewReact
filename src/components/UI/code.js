import React from 'react';

const Code = (props) => {

    return(
        <div>
            <h3>Code:</h3>
                <div className="p-3 mb-2 bg-dark">
                   <pre className="text-white">{props.code}</pre>
                </div>
        </div>
    );
}

export default Code;