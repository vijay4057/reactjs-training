import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


const initialState = {
    loaded: false,
    list: [{}]
}





//Create a function called Thunk
const url = "http://localhost:4000/trainers"
export const fetchAllTrainers = () => {
    return function (dispatch) {
        axios.get(url).then(resp => dispatch({ type: 'FETCH_TRAINERS', listFrmThunk: resp.data, loaded: true }))
    }
}

const trainers = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TRAINERS':
            return { ...action };
        case 'ACTION_TYPE_2':
            return state;
        default:
            return state;
    }
}
const reststore = createStore(trainers, composeWithDevTools(applyMiddleware(thunk)));
export default reststore;