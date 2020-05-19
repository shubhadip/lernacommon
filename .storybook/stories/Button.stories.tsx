import * as React from "react";
import { withKnobs, text, object, color, number, boolean} from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import LidoButton from './../../src/LidoButton/index.web';

export default {
  title: "Button",
  decorators: [withKnobs]
};

export const DefaultButton = () => {
  const groupId = 'GROUP-ID1';
    return <LidoButton onPress={action('Clicked')} 
              title={text('Button Title','Class 5 ', groupId)}
              subTitle={text('Button subTitle','', 'subTitle')}
              loading={boolean('Loading',false, groupId)}
              disabled={boolean('disabled',false, groupId)}
              subTitleStyle={object('subTitleStyle',{
                color: '#f00',
                padding: 10,
                margin: 10,
                borderColor: '#ff0',
                borderRadius: 5,
                position: 'relative',
                fontSize: 14,
              }, 'subTitle')}
              styleText={object('styleText',{
                color: '#fff',
              },groupId)}
              loadingProps={object('LoadingProps', {
                size: 100,
                color: '#ff0'
            },'LoadingProps')}
            clickedStyle={object('ClickedStyle',{},groupId)}
            superScript={text('SuperScript','','superScript')}
            superScriptStyle={object('superScriptStyle',{},'superScript')}
            style={
              object('Styles',{
                backgroundColor: '#f00',
                padding: 10,
                margin: 10,
                borderColor: '#ff0',
                borderRadius: 5,
                position: 'relative',
                fontSize: 14,
              },groupId)
            }
          />
}
