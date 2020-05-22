import * as React from 'react';
import { View, Text } from 'react-native';

interface Cardprops {
  text: string;
}

const defaultProps = {
  text: 'I am Card web'
};

const CardWeb: React.FunctionComponent<Cardprops> = (props) => (
  <View>
    <Text>{props.text}</Text>
  </View>
);

CardWeb.defaultProps = defaultProps;
export default CardWeb;
