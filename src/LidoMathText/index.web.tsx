import * as React from 'react';
import { Text } from 'react-native';
import MathText from 'react-native-math';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const MathTextApp = () => (
  // <MathText
  //   value={
  //     'Dissolve this $x=\\frac{1+y}{1+2z^2}$ using lorem ipsum dolor sit amet'
  //   }
  //   style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
  //   textSize={25}
  //   textColor={'#f2f2f2'}
  // />
  <InlineMath>{"That's the inline math: \\infty"}</InlineMath>
  // <Text>Hello</Text>
);

export default MathTextApp;
