import React, { ReactChild } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
  children: ReactChild;
}

export default function Button({children, ...rest}: ButtonProps) {
  return (
    <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        {...rest}
      >
        <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.green,
    borderRadius: 16,
    height: 56,
    justifyContent: 'center',
    marginBottom: 20,
    minWidth: 56,
    paddingHorizontal: 22,
  },

  buttonText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
});