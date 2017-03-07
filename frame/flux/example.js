import {Dispatcher} from "flux"
import React from "react"
import ReactDOM from "react-dom"
import Immutable from "immutable"
const Header = React.createClass({
    getInitialState(){
        return {}
    },
    saveData(){
        ToDoActions.create(text);
    },
    render(){
        return (<header id="header">
          <h1>todos</h1>
          <input />
          <button onClick={this.saveData}>Submit</button>
        </header>)
    }
})
const ToDoActions = {
    create:function(text){
        AppDispatcher.handleViewAction({//派发视图相关的数据
            actionType:TodoConstants.TODO_CREATE,
            text:text
        })
    },
    test:function(text){
        AppDispatcher.handleServerAction({//派发后台相关的数据
            actionType:TodoConstants.TODO_UPDATA,
            text:text
        })
    }
}
const AppDispatcher = function(){
    const dispatcher = Object.assign({},new Dispatcher(),{
        handleViewAction(action){
            this.dispatch({
                source:"VIEW_ACTION",
                action:action
            })
        }
    });

}();