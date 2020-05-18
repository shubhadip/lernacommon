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
var index_native_1 = require("./../LidoAppText/index.native");
var index_style_1 = require("./index.style");
var LidoButton = function (props) {
    var _a = React.useState({}), clicked = _a[0], setClicked = _a[1];
    var onPress = props.onPress, _b = props.loading, loading = _b === void 0 ? false : _b, _c = props.loadingProps, _d = _c === void 0 ? {} : _c, _e = _d.size, size = _e === void 0 ? 'small' : _e, _f = _d.color, color = _f === void 0 ? '#fff' : _f, _g = props.disabled, disabled = _g === void 0 ? false : _g, _h = props.clickedStyle, clickedStyle = _h === void 0 ? {} : _h;
    function _onPress() {
        if (!disabled) {
            onPress();
        }
    }
    return (React.createElement(react_native_1.TouchableOpacity, { onPress: _onPress, style: [
            index_style_1.default.button,
            props.style,
            clicked
        ], activeOpacity: 1, onPressOut: function () { return setClicked({}); }, onPressIn: function () { return setClicked(clickedStyle); } },
        React.createElement(react_native_1.View, null, loading ? (React.createElement(react_native_1.ActivityIndicator, { size: size, color: color })) : (React.createElement(React.Fragment, null,
            React.createElement(react_native_1.View, { style: { flexDirection: "row" } },
                React.createElement(index_native_1.default, { style: __assign(__assign({}, index_style_1.default.buttonText), props.styleText) }, props.title),
                React.createElement(index_native_1.default, { style: props.superScriptStyle }, props.superScript)),
            props.subTitle ? (React.createElement(index_native_1.default, { style: props.subTitleStyle }, props.subTitle)) : React.createElement(React.Fragment, null))))));
};
exports.default = LidoButton;
//# sourceMappingURL=index.native.js.map