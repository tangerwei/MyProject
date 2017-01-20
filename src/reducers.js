//action只是描述了有事情发生了，并没有指明应用如何更新state，而这正是reducer要做的事情
//以todo应用来说，需要保存两种不同的数据
//当前选中的任务过滤条件
//完整的任务列表
// const data = {
//     visibilityFilter:'SHWO_ALL',
//     todos:[
//         {
//             text:'Constider usiong Redux',
//             completed:true
//         },
//         {
//             text:'Keep all state in single tree',
//             completed:false
//         }
//     ]
// }
// const reducerFunc = (previousState,action) => newState

import {VisibilityFilters} from '../src/actions.js'
const initialState = {
    visibilityFilter :VisibilityFilters.SHOW_ALL,
    todos:[]
}
function todosApp(state,action){
    if(typeof state === 'undefined'){
        return initialState
    }
    return state
}
function todoes6App(state = initialState,action){
    switch(action.type){
        case SET_VISIBILITY_FILTER:
        return Object.assign({},state,{
            visibilityFilter:action.filter
        })
    }
    return state;
}
console.log(VisibilityFilters);