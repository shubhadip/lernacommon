import * as React from "react";
import { withKnobs, text, object } from "@storybook/addon-knobs";
import AppText from './../../src/LidoAppText/index.web';

export default {
  title: "AppText",
  decorators: [withKnobs]
};
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.

// Knobs for React props
export const Text = () => (
  <AppText>
    {text("Label", "Hello Storybook")}
  </AppText>
);

// Knobs as dynamic variables.
export const asDynamicVariables = () => {
    const defaultValue = { backgroundColor: 'red', padding: 10, borderWidth: 4, borderColor: 'black', position: 'relative', top: 20 };
    const tst = object('Styles', defaultValue, 'GROUP-ID1');
    const textLabel = text('Label', 'Dynamic','GROUP-ID1');

  return <AppText style={tst}>{textLabel}</AppText>;
};