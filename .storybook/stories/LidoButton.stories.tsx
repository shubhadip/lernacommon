import * as React from 'react';
import { action } from '@storybook/addon-actions';
import LidoButton from './../../src/ButtonLido/index.web'
import { View, Text, StyleSheet} from 'react-native';

export default {
  title: 'Button',
  component: LidoButton,
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

export const WithBtnColor = () => <LidoButton onClick={()=>{console.log('called')}} text={'Click Me'} buttonColor='red' />;