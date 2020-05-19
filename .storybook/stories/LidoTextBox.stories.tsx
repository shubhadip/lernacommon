import * as React from "react";
import { withKnobs, object } from "@storybook/addon-knobs";
import LidoTextBox from './../../src/LidoTextBox/index.web';
import { action } from '@storybook/addon-actions';

export default {
  title: "TextBox",
  decorators: [withKnobs]
};

export const TextBox = () => {
    const defaultValue = {
        "style": {
          "display":"flex",
          "alignItems": "center",
          "justifyContent":"space-between"
        },
        "label": "FirstName",
        "labelText": "Name",
        "maxLength": 10,
        "placeholder": "Enter Name",
        "inputStyle": {
          "borderWidth": 1,
        },
        "keyboardType": "small",
        "editable": true,
        "labelStyle": {
          "color": "darkgray",
          "marginTop": 0
        }
      }
    const tst = object('Styles', defaultValue, 'GROUP-ID1');
    return <LidoTextBox {...tst} keyboardType={'small'} onBlur={action('onBlurCalled')} onChangeText={action('onChangeCalled')} onFocus={action('onFocusCalled')} />
}