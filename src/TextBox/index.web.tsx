import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

const TextWeb = () => {
    return (
        <View>
            <Text>I am Web TextBox</Text>
            <Image
                style={styles.tinyLogo}
                source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
        </View>
    )
}

export default TextWeb;