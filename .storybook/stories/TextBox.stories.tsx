import * as React from 'react';
import { storiesOf } from '@storybook/react';
import TextBox from '../../src/TextBox/index.web';

storiesOf('TextBox', module)
  .add('Default', () => (
    <TextBox />
  ));