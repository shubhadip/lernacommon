import * as React from 'react';
import {View, Button, Text} from 'react-native'

const ButtomWeb = () => {

    const handlePress = () => {
            alert("I am Web")
    }

    return (
        <View>
            <Button title={'ButtonWeb'} onPress={handlePress}/>
        </View>
    )
}

export default ButtomWeb;