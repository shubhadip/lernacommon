import * as React from 'react';
import {View, Text} from 'react-native'

interface Iprops {
  text: string
};

const defaultProps = {
  text: 'I am Native Card'
}

const CardNative : React.FunctionComponent<Iprops> = (props) => {
    return (
        <View>
            <Text>{props.text}</Text>
        </View>
    )
}

CardNative.defaultProps = defaultProps

export default CardNative;