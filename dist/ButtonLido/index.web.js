"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var ButtomWeb = function () {
    var handlePress = function () {
        alert("I am Web");
    };
    return (React.createElement(react_native_1.View, null,
        React.createElement(react_native_1.Button, { title: 'ButtonWeb', onPress: handlePress })));
};
exports.default = ButtomWeb;
//# sourceMappingURL=index.web.js.map