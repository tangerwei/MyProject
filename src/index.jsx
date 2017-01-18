import React from 'react'
import ReactDOM from 'react-dom'
import Redux from 'react-redux'
import Data from '../src/data.js'//测试import使用方法
const reData = require('../src/data_require.js');
console.log('import data :');
console.log(Data);
console.log('require data :');
console.log(reData);
function init() {
    //创建header组件
    var link = "#";
    var array = ["概论", "文档", "新闻", "VIEW ON GITHUB"];
    var Header = React.createClass({
        getInitialState(){
            return { linkstate: ["default", "current"] }
        },
        render() {
            var arrayData = [];
            var self = this;
            array.forEach(function(value,index){
                arrayData[index] = <li key={index} onClick={self.selectTag.bind(self,{index})} className={ index == self.props.obj.index ? self.state.linkstate[1]:self.state.linkstate[0]}>{array[index]}</li>
            })
            return (
                <header className={this.props.name}>
                    <div className="unit logo-blog">
                        <a href={link}><img src="../images/logo-2x.png" className="logo" /></a>
                    </div>
                    <nav className="unit main-nav">
                        <ul>{arrayData}</ul>
                    </nav>
                </header>
            );
        },
        selectTag(keys) {
            if (keys.i !== this.props.obj.index) {
                this.props.handle({//改变父组件state
                    index: keys.index
                });
            }
        }
    });
    var Body_content = React.createClass({
        comunicate(state){
            this.props.handle(state);
        },
        render(){
            return (<section>{"获取部分数据"+this.props.obj.index}</section>)
        }
    });
    var Body_nav = React.createClass({
        getInitialState(){
            return {list:["chapter01","chapter02","chapter03","chapter04","chapter05"]}
        },
        comunicate(state){
            this.props.handle(state);
        },
        render(){
            var _i = this.props.obj.index;
            var _idata = this.state.list[_i];
            return (<nav>{_idata}</nav>)
        }
    });
    var Body = React.createClass({
        getDefaultProps(){
            return {obj:{index:0}}
        },
        comunicate(state){
            this.props.handle(state);
        },
        render() {
            return (
                <section className={this.props.name}>
                    <Body_content ref = "content" handle ={this.comunicate} obj = {this.props.obj}/>
                    <Body_nav ref = "contentNav" handle ={this.comunicate} obj = {this.props.obj}/>
                </section>
            );
        }
    });
    var Article = React.createClass({
        getInitialState(){
            return{index:1}
        },
        comunicate(state){
            this.setState(state);
        },
        render() {
            return <article>
                <Header ref = "header" handle = {this.comunicate} name="grid" obj = {this.state}/>
                <Body ref = "body" handle = {this.comunicate} name="grid body" obj = {this.state}/>
            </article>
        }
    })
    ReactDOM.render(<Article />, document.getElementById("article"));
    <a href="https://github.com/substack/node-browserify">browserify</a>
}
window.onload = function () {
    init();
}
//子组件调用父组件的props
//当父组件触发state的重新渲染需求，如果传入新的props给子组件，那么子组件就会根据新的props重新渲染，
//componentWillReceiveProps
//组件接收到新的props时调用，并将其作为参数nextProps使用，此时可以更改组件props及state,但是需要注意一点，这里即使更改state也并不会造成2次渲染。
//所以render函数中渲染的时候是根据props渲染本组件，同时在componentWillReceiveProps中添加由于父组件传过来的props修改导致的state相应的变化