"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var index_style_1 = require("./index.style");
var LinkText = function (props) { return (React.createElement(react_native_1.Text, __assign({}, props, { style: [index_style_1.default.text, props.style] }), props.text)); };
exports.default = LinkText;
//# sourceMappingURL=index.native.js.map