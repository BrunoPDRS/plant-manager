import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import wateringImg from '../assets/watering.png';
import Button from '../components/Button';

import colors from '../styles/colors';

export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
      </Text>

      <Image source={ wateringImg } style={styles.image}/>

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas {'\n'}
        plantas. Nós cuidamos de lembrar você {'\n'}
        sempre que precisar.
      </Text>

      <Button>{'>'}</Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    color: colors.heading,
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 38,
    textAlign: 'center',
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 25,
    color: colors.heading,
  },

  image: {
    width: 292,
    height: 284,
  }
});
