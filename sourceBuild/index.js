'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsUpdate = require('react-addons-update');

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mountNode = document.getElementById("header");
var AddTag = _react2.default.createClass({
    displayName: 'AddTag',
    getInitialState: function getInitialState() {
        return { showModal: false, value: "" };
    },
    saveTag: function saveTag() {
        this.props.addTag(this.state.value);
        this.close();
    },
    close: function close() {
        this.setState({ showModal: false, value: "" });
    },
    open: function open() {
        this.setState({ showModal: true });
    },
    inputchange: function inputchange(e) {
        var newState = (0, _reactAddonsUpdate2.default)(this.state, { $merge: { value: e.target.value } });
        this.setState(newState);
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _reactBootstrap.Button,
                {
                    bsStyle: 'success',
                    onClick: this.open
                },
                'ADDTAG'
            ),
            _react2.default.createElement(
                _reactBootstrap.Modal,
                { show: this.state.showModal, onHide: this.close },
                _react2.default.createElement(
                    _reactBootstrap.Modal.Header,
                    { closeButton: true },
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Title,
                        null,
                        'Add Tag'
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Modal.Body,
                    null,
                    _react2.default.createElement(_reactBootstrap.FormControl, { value: this.state.value, type: 'text', placeholder: 'please input the tag', onChange: this.inputchange })
                ),
                _react2.default.createElement(
                    _reactBootstrap.Modal.Footer,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Button,
                        { onClick: this.close },
                        'Close'
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Button,
                        { bsStyle: 'primary', onClick: this.saveTag },
                        'Save changes'
                    )
                )
            )
        );
    }
});
var Example = _react2.default.createClass({
    displayName: 'Example',
    getInitialState: function getInitialState() {
        return { tags: ["tag1"] };
    },
    setTags: function setTags(arr) {
        var _state = this.state.tags;
        if (arr.length > 0) {
            _state = this.state.tags.concat(arr);
        }
        this.setState({ tags: _state });
    },
    render: function render() {
        var arrlist = [];
        if (this.state.tags.length > 0) {
            arrlist = this.state.tags.map(function (item, index) {
                return _react2.default.createElement(
                    _reactBootstrap.Button,
                    { key: index },
                    item
                );
            });
        }
        return _react2.default.createElement(
            'div',
            { id: 'tagContainer' },
            arrlist
        );
    }
});

var Header = _react2.default.createClass({
    displayName: 'Header',
    setTags: function setTags(arr) {
        this.refs.tagContainer.setTags(arr);
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(AddTag, { addTag: this.setTags }),
            _react2.default.createElement('hr', { className: 'diverhr' }),
            _react2.default.createElement(Example, { ref: 'tagContainer' })
        );
    }
});
_reactDom2.default.render(_react2.default.createElement(Header, null), mountNode);
