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

interface Iprops {
  text?: string
  imageUri?: string
};

const TextWeb : React.FunctionComponent<Iprops> = (props) => {
  const title = props.text || 'I am TextBox'
    return (
        <View>
            <Text>{title}</Text>
            { props.imageUri ? <Image
                style={styles.tinyLogo}
                source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />: null }
        </View>
    )
}

export default TextWeb;