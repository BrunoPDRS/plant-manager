import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
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
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<String>();

  const navigation = useNavigation();

  const handleInputChange = (value: String) => {
    setIsFilled(!!value);
    setName(value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.header}>
              <Text style={styles.emoji}>
                {(isFocused || isFilled) ? "😄" : "😀"} 
              </Text>

              <Text style={styles.title}>
                Como podemos{'\n'}
                chamar você?
              </Text>
            </View>

            <TextInput
              placeholder="Digite um nome"
              style={[
                styles.input,
                (isFocused || isFilled) && styles.inputFocus,
              ]}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChangeText={handleInputChange}
            />

            <View style={styles.footer}>
              <Button
                disabled={!isFilled}
                onPress={
                  () => navigation.navigate('Confirmation')
                }
              >Confirmar</Button> 
            </View>
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
  
  header: {
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
  },

  footer: {
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 20,
  }
});

