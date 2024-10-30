export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';
export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';

export const fetchTodosRequest = () => ({ type: FETCH_TODOS_REQUEST });
export const fetchTodosSuccess = (todos) => ({ type: FETCH_TODOS_SUCCESS, payload: todos });
export const fetchTodosFailure = (error) => ({ type: FETCH_TODOS_FAILURE, payload: error });
export const addTodoRequest = (todo) => ({ type: ADD_TODO_REQUEST, payload: todo });
export const deleteTodoRequest = (id) => ({ type: DELETE_TODO_REQUEST, payload: id });
