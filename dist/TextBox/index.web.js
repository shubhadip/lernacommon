"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
});
;
var TextWeb = function (props) {
    var title = props.text || 'I am TextBox';
    return (React.createElement(react_native_1.View, null,
        React.createElement(react_native_1.Text, null, title),
        props.imageUri ? React.createElement(react_native_1.Image, { style: styles.tinyLogo, source: {
                uri: 'https://reactnative.dev/img/tiny_logo.png',
            } }) : null));
};
exports.default = TextWeb;
//# sourceMappingURL=index.web.js.map