import { createStore, applyMiddleware } from "redux";
import sagaMiddleware from 'redux-saga';
import rootSaga from './sagas/saga'
import { createLogger } from 'redux-logger'

const logger = createLogger();
const initialState = {
    itemCount: 1
}

export const reducerName = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case 'ADD_ITEM_ASYNC':
            newState.itemCount += action.value;
            return newState;
        case 'SUB_ITEM_ASYNC':
            newState.itemCount -= action.value;
            return newState;

        default:
            return newState;
    }
}
const sagmiddle = sagaMiddleware();


const store = createStore(reducerName, applyMiddleware(sagmiddle, logger));


sagmiddle.run(rootSaga);

export default store;