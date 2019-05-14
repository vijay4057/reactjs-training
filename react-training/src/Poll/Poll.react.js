import React from 'react';

let fullName = "Kumar";
let alert1 = (_self) => { _self.fullName = "Vijay" };
const Poll = (props) => {

    return (
        <div >
            <button onClick={props.action}>{props.text}</button>
            <p>{fullName}</p>
        </div>
    );

}

export default Poll;