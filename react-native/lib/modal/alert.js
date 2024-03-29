'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = a;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _portal = require('../portal');

var _portal2 = _interopRequireDefault(_portal);

var _AlertContainer = require('./AlertContainer');

var _AlertContainer2 = _interopRequireDefault(_AlertContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function a(title, content) {
    var actions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [{ text: '确定' }];
    var onBackHandler = arguments[3];

    var key = _portal2['default'].add(_react2['default'].createElement(_AlertContainer2['default'], { title: title, content: content, actions: actions, onAnimationEnd: function onAnimationEnd(visible) {
            if (!visible) {
                _portal2['default'].remove(key);
            }
        }, onBackHandler: onBackHandler }));
}
module.exports = exports['default'];