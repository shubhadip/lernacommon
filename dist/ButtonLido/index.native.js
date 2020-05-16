"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    viewContainer: {
        backgroundColor: '#fff',
    }
});
;
var defaultProps = {
    customContainerClass: {},
    buttonColor: 'blue',
    disabled: false
};
var ButtonNative = function (props) {
    var handlePress = function () {
        props.onClick ? props.onClick() : null;
    };
    var title = props.text || 'Button';
    return (React.createElement(react_native_1.View, { style: [styles.viewContainer, props.customContainerClass] }, props.children ? props.children : React.createElement(react_native_1.Button, { title: title, onPress: handlePress, color: props.buttonColor })));
};
ButtonNative.defaultProps = defaultProps;
exports.default = ButtonNative;
//# sourceMappingURL=index.native.js.map