import React from 'react'
import ReactDOM from 'react-dom'
import update from 'react-addons-update'
import { ButtonToolbar, Button, ButtonGroup, Popover, Tooltip, Modal, OverlayTrigger, FormControl } from 'react-bootstrap'
const mountNode = document.getElementById("header");
const AddTag = React.createClass({
    getInitialState() {
        return { showModal: false,value:"" };
    },
    saveTag() {
        this.props.addTag(this.state.value);
        this.close();
    },
    close() {
        this.setState({ showModal: false,value:""});
    },
    open() {
        this.setState({ showModal: true });
    },
    inputchange(e) {
        const newState = update(this.state, {$merge: {value:e.target.value}});
        this.setState(newState);
    },
    render() {
        return (
            <div>
                <Button
                    bsStyle="success"
                    onClick={this.open}
                >
                    ADDTAG
        </Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Tag</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormControl value={this.state.value} type="text" placeholder="please input the tag" onChange={this.inputchange} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                        <Button bsStyle="primary" onClick={this.saveTag}>Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </div>)
    }
});
const Example = React.createClass({
    getInitialState() {
        return { tags: ["tag1"] }
    },
    setTags(arr) {
        var _state = [];
        if (arr.length > 0) {
            _state = this.state.tags.concat(arr);
        }
        this.setState({ tags: _state })
    },
    render() {
        var arrlist = [];
        if (this.state.tags.length > 0) {
            arrlist = this.state.tags.map(function (item, index) {
                return (<Button class="tags" key={index}>{item}</Button>)
            });
        }
        return (<div>{arrlist}</div>)
    }
})

const Header = React.createClass({
    setTags(arr) {
        this.refs.tagContainer.setTags(arr);
    },
    render() {
        return (<div>
            <AddTag addTag={this.setTags} />
            <hr  className="diverhr" />
            <Example ref="tagContainer" />
        </div>)
    }
})
ReactDOM.render(<Header />, mountNode)