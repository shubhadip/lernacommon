import * as React from 'react';
import { Text } from 'react-native';

import styles from './index.style';

interface IProps {
    style?: any
}

const AppText: React.FC<IProps> = (props) => {
  return (
    <Text
      {...props}
      style={[
        styles.text,
        props.style
      ]}
    >
      {props.children}
    </Text>
  );
}

export default AppText;