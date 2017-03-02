'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsUpdate = require('react-addons-update');

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GlyphInstance = _react2.default.createClass({
    displayName: 'GlyphInstance',
    getInitialState: function getInitialState() {
        return { a: false, b: true };
    },
    handleStarA: function handleStarA() {
        var new_a = !this.state.a;
        var new_state = (0, _reactAddonsUpdate2.default)(this.state, { $merge: { a: new_a } });
        this.setState(new_state);
    },
    handleStarB: function handleStarB() {
        var new_b = !this.state.b;
        var new_state = (0, _reactAddonsUpdate2.default)(this.state, { $merge: { b: new_b } });
        this.setState(new_state);
    },
    render: function render() {
        var popverRight = _react2.default.createElement(
            _reactBootstrap.Popover,
            { id: 'popverRight', title: 'Popover Right' },
            _react2.default.createElement(
                'strong',
                null,
                'Holy guacamole!'
            ),
            ' Check this info.'
        );
        var popverLeft = _react2.default.createElement(
            _reactBootstrap.Popover,
            { id: 'popverLeft', title: 'Popover Left' },
            _react2.default.createElement(
                'strong',
                null,
                'Holy guacamole!'
            ),
            ' Check this info.'
        );
        var glyph_a = this.state.a == true ? "star" : "star-empty";
        var glyph_b = this.state.b == true ? "star" : "star-empty";
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _reactBootstrap.ButtonToolbar,
                null,
                _react2.default.createElement(
                    _reactBootstrap.OverlayTrigger,
                    { trigger: 'focus', placement: 'left', overlay: popverLeft },
                    _react2.default.createElement(
                        _reactBootstrap.Button,
                        { onClick: this.handleStarA },
                        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: glyph_a }),
                        ' ',
                        this.state.a == true ? "Star" : "Unstar"
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.OverlayTrigger,
                    { trigger: 'focus', placement: 'right', overlay: popverRight },
                    _react2.default.createElement(
                        _reactBootstrap.Button,
                        { onClick: this.handleStarB },
                        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: glyph_b }),
                        ' ',
                        this.state.b == true ? "Star" : "Unstar"
                    )
                )
            )
        );
    }
});
var mountNode = document.getElementById("header");
// ReactDOM.render(<GlyphInstance/>, mountNode);
//注意错误示范ReactDOM.render(GlyphInstance, mountNode);

//以下为点击添加按钮，自动创建新的star按钮

var StarButtons = _react2.default.createClass({
    displayName: 'StarButtons',
    getInitialState: function getInitialState() {
        return { star: [true, false, false], arr: ['star 1', 'star 2', 'star 3'] };
    },
    handleStar: function handleStar(index, e) {
        var new_state = Object.assign({}, this.state);
        new_state.star[index] = !new_state.star[index];
        this.setState(new_state);
    },
    addStar: function addStar() {
        var new_state = Object.assign({}, this.state);
        new_state.star.push(true);
        var length = new_state.arr.length;
        new_state.arr.push("star " + (length + 1));
        this.setState(new_state);
    },
    render: function render() {
        var popverLeft = _react2.default.createElement(
            _reactBootstrap.Popover,
            { id: 'popverLeft', title: 'Popover Left' },
            _react2.default.createElement(
                'strong',
                null,
                'Holy guacamole!'
            ),
            ' Check this info.'
        );
        var starState = this.state.star;
        var _self = this;
        var starList = this.state.arr.map(function (item, index) {
            var glyph_b = starState[index] == true ? "star" : "star-empty";
            if (starState[index] == false) {
                return _react2.default.createElement(
                    _reactBootstrap.Button,
                    { onClick: _self.handleStar.bind(null, index, event) },
                    _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: glyph_b }),
                    ' ',
                    item,
                    ' '
                );
            } else {
                return _react2.default.createElement(
                    _reactBootstrap.OverlayTrigger,
                    { key: index, trigger: 'hover', placement: 'right', overlay: popverLeft },
                    _react2.default.createElement(
                        _reactBootstrap.Button,
                        { onClick: _self.handleStar.bind(null, index, event) },
                        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: glyph_b }),
                        ' ',
                        item,
                        ' '
                    )
                );
            }
        });
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _reactBootstrap.ButtonToolbar,
                null,
                starList
            )
        );
    }
});
var Header = _react2.default.createClass({
    displayName: 'Header',
    addStarBtn: function addStarBtn() {
        this.refs.star.addStar();
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _reactBootstrap.Button,
                { onClick: this.addStarBtn },
                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'plus' }),
                'ADD'
            ),
            _react2.default.createElement('hr', { className: 'diverhr' }),
            _react2.default.createElement(StarButtons, { ref: 'star' })
        );
    }
});
_reactDom2.default.render(_react2.default.createElement(Header, null), mountNode);
