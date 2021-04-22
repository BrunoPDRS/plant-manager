import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet, Text,
  TouchableOpacity,
  View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import wateringImg from '../assets/watering.png';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
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
          <Feather
            name="chevron-right"
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },

  title: {
    color: colors.heading,
    fontFamily: fonts.heading,
    fontSize: 28,
    lineHeight: 34,
    marginTop: 38,
    textAlign: 'center',
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 25,
    color: colors.heading,
    fontFamily: fonts.text,
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

  buttonIcon: {
    color: colors.white,
    fontSize: 32,
  },
});
