import React from 'react';

import { connect } from 'react-redux'

const Greeter1 = (props) => {

    return (
        <div >
            {props.textMessage}
            <button onClick={props.birthday}>Birthday</button>
            <button onClick={props.weddingday}>WeddingDay</button>
        </div>
    );

}
const mapStateToProps = (state) => {
    return {
        textMessage: state.text
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        birthday: () => {
            dispatch({ type: 'BIRTHDAY', text: 'HappyBirthday' })
        },
        weddingday: () => {
            dispatch({ type: 'WEDDINGDAY', text: 'Happy Wedding' })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Greeter1);
