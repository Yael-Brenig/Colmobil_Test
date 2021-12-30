import { createStore, applyMiddleware } from 'redux'
import { produce } from 'immer';
import { middlewareFunctions } from './middleware.js'

const inisialState = {
    user: {
        username: '',
        workers: [{ name: "shmuel", age: "22", password: "3" }, { name: "yakov", age: "24", password: "4" }],
    }
}
const reducer = produce((state, action) => {
    switch (action.type) {
        case 'UPDATE_NAME':
            alert(action.payload)
            state.user.username = action.payload
            break;
        case 'SET_WORKERS':
            alert(action.payload)
            state.user.workers = action.payload
            break;
        default:
            break;
    }
}, inisialState);
const store = createStore(reducer, applyMiddleware(middlewareFunctions));
window.store = store;
export default store;