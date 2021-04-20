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
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 20,
    width: 56,
    height: 56,
  },

  buttonText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
});