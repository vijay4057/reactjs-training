import React from 'react';
import { connect } from 'react-redux'


const ShowProduct = (props) => {

    return (
        <div >
            <p>Quantity</p>:<p>{props.count}</p>
            <button onClick={props.addItem}>Add</button>
            <button onClick={props.subItem}>Sub</button>
        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        count: state.itemCount
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addItem: () => {
            dispatch({ type: 'ADD_ITEM', value: 1 });
        },
        subItem: () => {
            dispatch({ type: 'SUB_ITEM', value: 1 });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowProduct);