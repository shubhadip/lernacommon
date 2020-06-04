import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#fff'
  }
});

interface ButtonLidoprops {
  text?: string;
  onClick?: () => void;
  customContainerClass?: object;
  buttonColor?: string;
  disabled?: boolean;
}

const defaultProps: ButtonLidoprops = {
  customContainerClass: {},
  buttonColor: 'black',
  disabled: false
};

const ButtonNative: React.FunctionComponent<ButtonLidoprops> = (props) => {
  const handlePress = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  const title = props.text || 'Button';

  return (
    <View style={[styles.viewContainer, props.customContainerClass]}>
      {props.children ? (
        props.children
      ) : (
        <Button title={title} onPress={handlePress} color={props.buttonColor} />
      )}
    </View>
  );
};

ButtonNative.defaultProps = defaultProps;

export default ButtonNative;
