import { takeEvery, put, takeLatest, delay, all } from 'redux-saga/effects'

function* addItemAsync() {
    // yield delay(2000);
    yield put({ type: 'ADD_ITEM_ASYNC', value: 1 })
}
function* subItemAsync() {
    // yield delay(2000);
    yield put({ type: 'SUB_ITEM_ASYNC', value: 1 })
}

export function* watchItem() {
    yield takeLatest('ADD_ITEM', addItemAsync)
    // yield delay(4000);
}
export function* watchSubItem() {
    yield takeLatest('SUB_ITEM', subItemAsync)
    // yield delay(4000);
}

export default function* rootSaga() {
    yield all([
        watchSubItem(),
        watchItem()
    ])
}