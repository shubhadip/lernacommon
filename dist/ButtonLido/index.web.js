"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
;
var ButtomWeb = function (props) {
    var handlePress = function () {
        props.onClick ? props.onClick() : null;
    };
    var buttonText = props.text || 'Button';
    return (React.createElement(react_native_1.View, null,
        React.createElement(react_native_1.Button, { title: buttonText, onPress: handlePress })));
};
exports.default = ButtomWeb;
//# sourceMappingURL=index.web.js.map