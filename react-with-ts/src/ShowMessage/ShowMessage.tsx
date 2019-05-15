import React from 'react'

export interface Greet {
    greeter: string;
    greeting: string;
}

const ShowMessage = (props: Greet) => {
    return (
        < div >
            <h4>{props.greeting}</h4>
            <p>{props.greeter}</p>
        </div>);

}
export default ShowMessage

