"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
;
var ButtomNative = function (props) {
    var handlePress = function () {
        props.onClick ? props.onClick() : null;
    };
    var buttonText = props.text || 'ButtonNative';
    return (React.createElement(react_native_1.View, null,
        React.createElement(react_native_1.Button, { title: buttonText, onPress: handlePress })));
};
exports.default = ButtomNative;
//# sourceMappingURL=index.native.js.map