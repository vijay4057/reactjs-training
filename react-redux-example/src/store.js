import { createStore, applyMiddleware, combineReducers } from 'redux'
import trainers from './reststore'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

const initialState = { text: "Hello World" }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BIRTHDAY':
            return { ...action }
        case 'WEDDINGDAY':
            return { ...action }
        default:
            return state
    }
}
let obj = { reducer: reducer, trainer: trainers, form: formReducer };
const combine = combineReducers(obj)
const store = createStore(combine, composeWithDevTools(applyMiddleware(thunk)));
export default store;
