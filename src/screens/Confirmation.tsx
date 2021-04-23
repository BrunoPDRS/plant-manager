import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import Button from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function Confirmation() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
          😁
        </Text>

        <Text style={styles.title}>
          Prontinho
        </Text>

        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas
          plantinhas com muito cuidado.
        </Text>

        <View style={styles.footer}>
          <Button
            onPress={() => navigation.navigate('PlantSelect')}
          >Começar</Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  emoji: {
    fontSize: 78,
  },

  title: {
    fontSize: 22,
    textAlign: 'center',
    color: colors.heading,
    lineHeight: 38,
    fontFamily: fonts.heading,
    marginTop: 15,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.text,
    paddingVertical: 10,
  },

  footer: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 50,
  },
});
