import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Keyboard } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [saudacao, setSaudacao] = useState('');

  const getPeriodo = () => {
    const hora = new Date().getHours();
    if (hora < 12) return 'Bom dia';
    else if (hora < 18) return 'Boa tarde';
    else return 'Boa noite';
  };

  const atualizarSaudacao = () => {
    if (nome.trim() === '') {
      setSaudacao('Por favor, insira seu nome!');
    } else {
      const periodo = getPeriodo();
      setSaudacao(`${periodo}, ${nome}!\nBem-vindo(a) ao nosso App!`);
      Keyboard.dismiss(); // fecha o teclado
    }
  };

  const limparCampos = () => {
    setNome('');
    setSaudacao('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Seja bem-vindo!</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        placeholderTextColor="#aaa"
        value={nome}
        onChangeText={setNome}
      />

      <View style={styles.botoes}>
        <Button title="Atualizar" onPress={atualizarSaudacao} color="#4CAF50" />
        <Button title="Limpar" onPress={limparCampos} color="#F44336" />
      </View>

      {saudacao !== '' && <Text style={styles.saudacao}>{saudacao}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#90CAF9',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 15,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  saudacao: {
    fontSize: 20,
    color: '#1E88E5',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
});
