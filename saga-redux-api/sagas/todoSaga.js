import { call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_TODOS_REQUEST,
  fetchTodosSuccess,
  fetchTodosFailure,
  ADD_TODO_REQUEST,
  DELETE_TODO_REQUEST
} from '../actions/todoActions';
import { fetchTodosApi, addTodoApi, deleteTodoApi } from '../api/todoApi';

function* fetchTodosSaga() {
  try {
    const response = yield call(fetchTodosApi);
    yield put(fetchTodosSuccess(response.data));
  } catch (error) {
    yield put(fetchTodosFailure(error.message));
  }
}

function* addTodoSaga(action) {
  try {
    yield call(addTodoApi, action.payload);
  } catch (error) {
    console.error(error);
  }
}

function* deleteTodoSaga(action) {
  try {
    yield call(deleteTodoApi, action.payload);
  } catch (error) {
    console.error(error);
  }
}

export default function* todoSaga() {
  yield takeEvery(FETCH_TODOS_REQUEST, fetchTodosSaga);
  yield takeEvery(ADD_TODO_REQUEST, addTodoSaga);
  yield takeEvery(DELETE_TODO_REQUEST, deleteTodoSaga);
}
