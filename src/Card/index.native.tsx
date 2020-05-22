import * as React from 'react';
import { View, Text } from 'react-native';

interface Cardprops {
  text: string;
}

const defaultProps = {
  text: 'I am Native Card'
};

const CardNative: React.FunctionComponent<Cardprops> = (props) => (
  <View>
    <Text>{props.text}</Text>
  </View>
);

CardNative.defaultProps = defaultProps;

export default CardNative;
