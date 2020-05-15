import * as React from 'react';
import {View, Button, Alert} from 'react-native'

interface Iprops {
    text?: string
    onClick?: () => void
};

const ButtomNative : React.FunctionComponent<Iprops> = (props) => {

    const handlePress = () => {
        props.onClick ? props.onClick() : null
    }

    const buttonText = props.text || 'Button'

    return (
        <View>
            <Button title={buttonText} onPress={handlePress}/>
        </View>
    )
}

export default ButtomNative;