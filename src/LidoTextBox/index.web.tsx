import * as React from 'react';
import { View, TextInput } from 'react-native';
import AppText from './../LidoAppText/index.native';
import styles from './index.style';

interface IProps {
  style?: object
  label?: string
  labelText?: string
  maxLength?: number
  placeholder?: string
  inputStyle?: object
  keyboardType: any
  onChangeText: () => void
  onFocus: () => void
  onBlur: () => void
  editable?: boolean
  labelStyle?: object
}

export type Ref = TextInput;

const TextBox = React.forwardRef<Ref, IProps>((props, ref) => {
  const {
    style,
    label,
    labelText,
    maxLength,
    placeholder,
    inputStyle,
    keyboardType,
    onChangeText,
    onFocus,
    onBlur,
    editable = true,
    labelStyle = {},
    ...restProps
  } = props;

  return (
    <View
      style={[styles.textBox, style]}
    >
      {
        label ? (
          <AppText style={labelStyle}>{labelText}</AppText>
        ) : null
      }
      <TextInput
        maxLength={maxLength}
        placeholder={placeholder}
        style={[styles.input, inputStyle]}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={ref}
        editable={editable}
        {...restProps}
      />
    </View>
  );
});

export default TextBox;
