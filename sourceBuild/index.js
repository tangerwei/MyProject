'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsUpdate = require('react-addons-update');

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function thumbails() {
    getData(createThumbnail);
}
function createThumbnail(data) {
    var arrayList = data.map(function (item, index) {
        return _react2.default.createElement(
            _reactBootstrap.Col,
            { key: index, xs: 6, md: 4 },
            _react2.default.createElement(
                _reactBootstrap.Thumbnail,
                { src: item.pictureUrl, alt: '372x221' },
                _react2.default.createElement(
                    'h3',
                    null,
                    item.title
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    item.description
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Button,
                        { bsStyle: 'primary' },
                        'Button'
                    ),
                    ';',
                    _react2.default.createElement(
                        _reactBootstrap.Button,
                        { bsStyle: 'default' },
                        'Button'
                    )
                )
            )
        );
    });
    var ThumbnailInstance = _react2.default.createClass({
        displayName: 'ThumbnailInstance',
        render: function render() {
            return _react2.default.createElement(
                _reactBootstrap.Grid,
                null,
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    null,
                    arrayList
                )
            );
        }
    });
    _reactDom2.default.render(_react2.default.createElement(ThumbnailInstance, null), document.getElementById("header"));
}
function getData(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../source/data/article.json", true);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (typeof callback == "function") {
                callback(JSON.parse(this.responseText).list);
            }
        }
    };
    xhr.send();
}
thumbails();
