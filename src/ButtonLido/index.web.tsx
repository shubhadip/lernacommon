import * as React from 'react';
import { View, Button } from 'react-native'

interface Iprops {
    text?: string
    onClick?: () => void
    customContainerClass?: object
    custonButtonClass?: object
};

const ButtomWeb : React.FunctionComponent<Iprops> = (props) => {

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

export default ButtomWeb;