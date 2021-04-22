import React, { useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Button from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <Text style={styles.emoji}>
              {isFocused ? "😄" : "😀"} 
              VID5540
            </Text>

            <Text style={styles.title}>
              Como podemos {'\n'}
              chamar você?
            </Text>

            <TextInput
              placeholder="Digite um nome"
              style={
                isFocused
                ? { ...styles.input, ...styles.inputFocus }
                : styles.input
              }
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              />

            <Button>Confirmar</Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  content: {
    flex: 1,
    width: '100%',
  },

  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center',
  },

  emoji: {
    fontSize: 44,
  },

  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center', 
  },

  inputFocus: {
    borderBottomWidth: 2,
    borderColor: colors.green,
  },

  title: {
    fontSize: 24,
    textAlign: 'center',
    color: colors.heading,
    lineHeight: 32,
    fontFamily: fonts.heading,
    marginTop: 20,
  }
});

// 😁
