import * as React from 'react';
import { Text } from 'react-native';
import styles from './index.style';

interface LidoLinkTextProps {
  style?: object;
  text: string;
}

const LinkText: React.FC<LidoLinkTextProps> = (props) => (
  <Text {...props} style={[styles.text, props.style]}>
    {props.text}
  </Text>
);

export default LinkText;
