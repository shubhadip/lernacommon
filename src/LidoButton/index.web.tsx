import * as React from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';

import AppText from '../LidoAppText/index.native';

import styles from './index.style';

interface LidoButtonProps {
  onPress: () => void;
  loading?: boolean;
  loadingProps?: {
    size?: number | 'small' | 'large' | undefined;
    color?: string;
  };
  disabled?: boolean;
  clickedStyle?: object;
  style?: object;
  styleText?: object;
  title?: string;
  subTitle?: string;
  subTitleStyle?: object;
  superScriptStyle?: object;
  superScript?: React.ReactNode;
}

const LidoButton: React.FC<LidoButtonProps> = (props) => {
  const [clicked, setClicked] = React.useState({});
  const {
    onPress,
    loading = false,
    loadingProps: { size = 'small', color = '#fff' } = {},
    disabled = false,
    clickedStyle = {}
  } = props;

  function handlePress() {
    if (!disabled) {
      onPress();
    }
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, props.style, clicked]}
      activeOpacity={1}
      onPressOut={() => setClicked({})}
      onPressIn={() => setClicked(clickedStyle)}
    >
      <View>
        {loading ? (
          <ActivityIndicator size={size} color={color} />
        ) : (
          <>
            <View style={{ flexDirection: 'row' }}>
              <AppText
                style={{
                  ...styles.buttonText,
                  ...props.styleText
                }}
              >
                {props.title}
              </AppText>
              <AppText style={props.superScriptStyle}>
                {props.superScript}
              </AppText>
            </View>
            {props.subTitle ? (
              <AppText style={props.subTitleStyle}>{props.subTitle}</AppText>
            ) : (
              <></>
            )}
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default LidoButton;
