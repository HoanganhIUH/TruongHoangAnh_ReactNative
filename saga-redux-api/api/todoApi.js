import axios from 'axios';

export const fetchTodosApi = () => axios.get('https://67218c5e98bbb4d93ca8b6f3.mockapi.io/hoanganh');
export const addTodoApi = (todo) => axios.post('https://67218c5e98bbb4d93ca8b6f3.mockapi.io/hoanganh', todo);
export const deleteTodoApi = (id) => axios.delete(`https://67218c5e98bbb4d93ca8b6f3.mockapi.io/hoanganh/${id}`);
