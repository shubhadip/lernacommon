import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LidoAppText from '../LidoAppText/index.web';
import LidoButton from '../ButtonLido/index.web';
import LidoLinkText from '../LidoLinkText/index.web';
import LidoMathText from '../LidoMathText/index.web';

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: 'bold' }
});

class App extends React.Component {
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.text}>Hello, world!</Text>
        <LidoAppText style={{ color: 'red' }} children="Lido Text" />
        <LidoButton buttonColor={'blue'} text="This is India" />
        <LidoLinkText text="Follow the link" />
        <LidoMathText />
      </View>
    );
  }
}

export default App;
