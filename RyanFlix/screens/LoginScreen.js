import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RYANFLIX</Text>
      <Text style={styles.subtitle}>
        Todas as produções da Golden Boy Studios em um só lugar!
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SelectProfile')}
      >
        <Text style={styles.buttonText}>Acesse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#FF0000',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  subtitle: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#FF0000',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});