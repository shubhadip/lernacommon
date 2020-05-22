import * as React from 'react';
import { Text } from 'react-native';

import styles from './index.style';

interface LidoAppTextProps {
  style?: object;
}

const AppText: React.FC<LidoAppTextProps> = (props) => (
  <Text {...props} style={[styles.text, props.style]}>
    {props.children}
  </Text>
);

export default AppText;
