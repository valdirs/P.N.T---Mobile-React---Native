import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AddProfile() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AddProfile funcionando!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 20,
  },
});