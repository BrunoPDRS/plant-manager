import React, { ReactChild } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends RectButtonProps {
  active?: boolean;
  children: ReactChild;
}

export default function EnvironmentButton(
    {children, active = false, ...rest}: ButtonProps
  ) {
  return (
    <RectButton {...rest} style={[
      styles.container,
      active && styles.containerActive,
    ]}>
      <Text style={[
        styles.text,
        active && styles.textActive,
      ]}>
        {children}
      </Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 76,
    marginRight: 5,
  },

  containerActive: {
    backgroundColor: colors.green_light
  },

  text: {
    fontSize: 16,
    color: colors.heading,
    fontFamily: fonts.text,
  },

  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  }
});
