import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet, Text,
  TouchableOpacity,
  View } from 'react-native';

import wateringImg from '../assets/watering.png';

import colors from '../styles/colors';

export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
      </Text>

      <Image
        source={ wateringImg } 
        style={styles.image}
        resizeMode='contain'
      />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas {'\n'}
        plantas. Nós cuidamos de lembrar você {'\n'}
        sempre que precisar.
      </Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>
          {'>'}
        </Text>
    </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
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
    height: Dimensions.get('window').width * 0.7,
  },

  button: {
    alignItems: 'center',
    backgroundColor: colors.green,
    borderRadius: 16,
    height: 56,
    justifyContent: 'center',
    marginBottom: 10,
    width: 56,
  },

  buttonText: {
    color: colors.white,
    fontSize: 24,
  },
});
