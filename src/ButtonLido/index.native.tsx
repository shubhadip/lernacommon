import * as React from 'react';
import {View, Button, Alert} from 'react-native'

const ButtomNative = () => {

    const handlePress = () => {
        Alert.alert('I am Native')
    }

    return (
        <View>
            <Button title={'ButtonNative'} onPress={handlePress}/>
        </View>
    )
}

export default ButtomNative;