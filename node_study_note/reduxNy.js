import {createStore} from 'redux'
function reducer(state,action){
    switch(action.type){
        case 'addOne':
            return state.concat(action.text);
        case 'addToDo':
            return state.concat(action.text);
        default:
            return state;
    }
}
let store = createStore(reducer,['init state']);

console.log(store.getState());
store.dispatch({
    type: 'addToDo',
    text:'addToDoText'
})
console.log(store.getState());