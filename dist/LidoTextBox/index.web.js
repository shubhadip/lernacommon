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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var index_native_1 = require("../LidoAppText/index.native");
var index_style_1 = require("./index.style");
var TextBox = React.forwardRef(function (props, ref) {
    var style = props.style, label = props.label, labelText = props.labelText, maxLength = props.maxLength, placeholder = props.placeholder, inputStyle = props.inputStyle, keyboardType = props.keyboardType, onChangeText = props.onChangeText, onFocus = props.onFocus, onBlur = props.onBlur, _a = props.editable, editable = _a === void 0 ? true : _a, _b = props.labelStyle, labelStyle = _b === void 0 ? {} : _b, restProps = __rest(props, ["style", "label", "labelText", "maxLength", "placeholder", "inputStyle", "keyboardType", "onChangeText", "onFocus", "onBlur", "editable", "labelStyle"]);
    return (React.createElement(react_native_1.View, { style: [index_style_1.default.textBox, style] },
        label ? React.createElement(index_native_1.default, { style: labelStyle }, labelText) : null,
        React.createElement(react_native_1.TextInput, __assign({ maxLength: maxLength, placeholder: placeholder, style: [index_style_1.default.input, inputStyle], keyboardType: keyboardType, onChangeText: onChangeText, onFocus: onFocus, onBlur: onBlur, ref: ref, editable: editable }, restProps))));
});
exports.default = TextBox;
//# sourceMappingURL=index.web.js.map