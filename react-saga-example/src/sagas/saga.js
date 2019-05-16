import { takeEvery, put, takeLatest, delay } from 'redix-saga/effects'

function* addItemAsync() {
    yield delay(2000);
    yield put({ type: 'ADD_ITEM_ASYNC', value: 1 })
}

function* watchItem() {
    yield takeLatest({ type: 'ADD_ITEM', addItemAsync })
}