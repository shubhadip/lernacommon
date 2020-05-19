import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, object, color } from "@storybook/addon-knobs";
import LidoButton from '../../src/ButtonLido/index.web'
import { View, Text, StyleSheet} from 'react-native';

export default {
  title: 'Demo Button',
  component: LidoButton,
  decorators: [withKnobs]
};

export const Emoji = () => (
  <LidoButton onClick={action('clicked')}>
    <View >
      <Text>😀 😎 👍 💯</Text>
    </View>
  </LidoButton>
);


export const Default = () => <LidoButton onClick={action('clicked')}/>;

export const TextProps = () => <LidoButton onClick={action('clicked')} text={'I am Lido Button'}/>;

export const WithOnClick = () => <LidoButton onClick={()=>{console.log('called')}} text={'Click Me'}/>;

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#0f0',
    padding: 10
  },
});

export const WithStyleSheet = () => <LidoButton onClick={()=>{console.log('called')}} text={'Click Me'} customContainerClass={styles.viewContainer}/>;

export const WithBtnColor = () => {
  const name = text("Name", "James",'GROUP-ID1');
  const value = color('Color', 'red', 'GROUP-ID1');
  const defaultValue = { backgroundColor: 'red', padding: 10, margin: 10, borderWidth: 4, borderColor: 'black' };
  const tst = object('Styles', defaultValue, 'GROUP-ID1');

  return <LidoButton onClick={action('called')} text={name} buttonColor={value} customContainerClass={tst}/>
};

