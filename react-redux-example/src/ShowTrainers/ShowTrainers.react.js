import React from 'react';
import { connect } from 'react-redux'
import { fetchAllTrainers } from '../reststore';


const ShowTrainers = (props) => {
    if (!props.loaded) {
        return <div>
            <button onClick={props.showAll}>Show</button>
        </div>
    } else {
        return (
            <div >

                <table>
                    <thead>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>SKILLS</th>
                        <th>RATING</th>
                    </thead>
                    <tbody>
                        {props.datalist.map((values, index) => {
                            return <tr>
                                <td>{values.id} - {index}</td>
                                <td>{values.trainerName}</td>
                                <td>{values.skillSet}</td>
                                <td>{values.rating}</td>
                            </tr>
                        })
                        }
                    </tbody>
                </table>
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        loaded: state.trainer.loaded,
        datalist: state.trainer.listFrmThunk
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showAll: () => {
            dispatch(fetchAllTrainers())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowTrainers);
