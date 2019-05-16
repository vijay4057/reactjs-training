import { createStore, applyMiddleware } from "redux";
import sagaMiddleware from 'redux-saga';
import { watchItem } from './sagas/saga'

const initialState = {
    itemCount: 1
}

export const reducerName = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case 'ADD_ITEM_ASYNC':
            return newState = newState.itemCount += action.value;
        case 'SUB_ITEM_ASYNC':
            return newState = newState.itemCount -= action.value;
        default:
            return newState
    }
}
const sagmiddle = sagaMiddleware;

const store = createStore(reducerName, applyMiddleware(sagaMiddleware));

sagmiddle.run(watchItem);

export default store;