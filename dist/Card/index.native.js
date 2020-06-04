"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var defaultProps = {
    text: 'I am Native Card'
};
var CardNative = function (props) { return (React.createElement(react_native_1.View, null,
    React.createElement(react_native_1.Text, null, props.text))); };
CardNative.defaultProps = defaultProps;
exports.default = CardNative;
//# sourceMappingURL=index.native.js.map