import React from 'react'
import ReactDOM from 'react-dom'
import update from 'react-addons-update'
import { ButtonToolbar, ButtonGroup, Glyphicon, Button, Popover, OverlayTrigger } from 'react-bootstrap'
const GlyphInstance = React.createClass({
    getInitialState(){
        return {a:false,b:true}
    },
    handleStarA(){
        const new_a = !this.state.a;
        const new_state = update(this.state, {$merge: {a:new_a}});
        this.setState(new_state);
    },
    handleStarB(){
        const new_b = !this.state.b;
        const new_state = update(this.state, {$merge: {b:new_b}});
        this.setState(new_state);
    },
    render() {
        const popverRight = (<Popover id="popverRight" title="Popover Right">
            <strong>Holy guacamole!</strong> Check this info.
        </Popover>);
        const popverLeft = (<Popover id="popverLeft" title="Popover Left">
            <strong>Holy guacamole!</strong> Check this info.
        </Popover>);
        const glyph_a = this.state.a == true ? "star":"star-empty";
        const glyph_b = this.state.b == true ? "star":"star-empty";
        return (<div>
            <ButtonToolbar>
                <OverlayTrigger  trigger="focus" placement="left" overlay={popverLeft}>
                    <Button onClick={this.handleStarA}><Glyphicon glyph={glyph_a}/> {this.state.a == true ? "Star":"Unstar"}</Button>
                </OverlayTrigger>
                <OverlayTrigger trigger="focus" placement="right" overlay={popverRight}>
                    <Button onClick={this.handleStarB}><Glyphicon glyph={glyph_b}/> {this.state.b == true ? "Star":"Unstar"}</Button>
                </OverlayTrigger>
            </ButtonToolbar>
        </div>);
    }
})
const mountNode = document.getElementById("header");
// ReactDOM.render(<GlyphInstance/>, mountNode);
//注意错误示范ReactDOM.render(GlyphInstance, mountNode);

//以下为点击添加按钮，自动创建新的star按钮

const StarButtons = React.createClass({
    getInitialState(){
        return {star:[true,false,false],arr:['star 1','star 2','star 3']}
    },
    handleStar(index,e){
        const new_state = Object.assign({},this.state);
        new_state.star[index] = !new_state.star[index];
        this.setState(new_state);
    },
    addStar(){
        const new_state = Object.assign({},this.state);
        new_state.star.push(true);
        const length = new_state.arr.length;
        new_state.arr.push("star " + (length + 1));
        this.setState(new_state);
    },
    render(){
        const popverLeft = (<Popover id="popverLeft" title="Popover Left">
            <strong>Holy guacamole!</strong> Check this info.
        </Popover>);
        var starState = this.state.star;
        var _self = this;
        const starList = this.state.arr.map(function(item,index){
            const glyph_b = starState[index] == true ? "star":"star-empty";
            if(starState[index] == false){
                return (<Button key={index} onClick={_self.handleStar.bind(null,index,event)}><Glyphicon glyph={glyph_b}/> {item} </Button>)
            }else{
                return (<OverlayTrigger key={index} trigger="hover" placement="right" overlay={popverLeft}>
                    <Button onClick={_self.handleStar.bind(null,index,event)}><Glyphicon glyph={glyph_b}/> {item} </Button>
                </OverlayTrigger>);
            }
        });
        return (<div>
            <ButtonToolbar>
                {starList}
            </ButtonToolbar>
        </div>);
    }
});
const Header = React.createClass({
    addStarBtn(){
        this.refs.star.addStar();
    },
    render(){
        return(<div>
            <Button onClick={this.addStarBtn}><Glyphicon glyph="plus"/>ADD</Button>
            <hr  className="diverhr" />
            <StarButtons ref="star"/>
        </div>)
    }
});
ReactDOM.render(<Header/>, mountNode);