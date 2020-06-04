"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    viewContainer: {
        backgroundColor: '#fff'
    }
});
var defaultProps = {
    customContainerClass: {},
    buttonColor: 'blue',
    disabled: false
};
var ButtonWeb = function (props) {
    var handlePress = function () {
        if (props.onClick) {
            props.onClick();
        }
    };
    var title = props.text || 'Button';
    return (React.createElement(react_native_1.View, { style: [styles.viewContainer, props.customContainerClass] }, props.children ? (props.children) : (React.createElement(react_native_1.Button, { title: title, onPress: handlePress, color: props.buttonColor, disabled: props.disabled }))));
};
ButtonWeb.defaultProps = defaultProps;
exports.default = ButtonWeb;
//# sourceMappingURL=index.web.js.map