import * as React from 'react';
import MathText from 'react-native-math';

const MathTextApp = () => (
  <MathText
    value={
      'Dissolve this $x=\\frac{1+y}{1+2z^2}$ using lorem ipsum dolor sit amet'
    }
    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    textSize={25}
    textColor={'#f2f2f2'}
  />
);

export default MathTextApp;
