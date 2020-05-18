import * as React from 'react';
import {View, Text} from 'react-native'

interface Iprops {
  text: string
};

const defaultProps = {
  text: 'I am Card web'
}

const CardWeb : React.FunctionComponent<Iprops> = (props) => {
    return (
        <View>
            <Text>{props.text}</Text>
        </View>
    )
}

CardWeb.defaultProps = defaultProps
export default CardWeb;