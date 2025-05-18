import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Video } from 'expo-av'; // player oficial do Expo

const { width } = Dimensions.get('window');

const profiles = [
  { id: '1', name: 'Personagem 1', avatar: require('./assets/personagem1.jpg') },
  { id: '2', name: 'Personagem 2', avatar: require('./assets/personagem2.jpg') },
  { id: '3', name: 'Personagem 3', avatar: require('./assets/personagem3.jpg') },
  { id: '4', name: 'Personagem 4', avatar: require('./assets/personagem4.jpg') },
  { id: '5', name: 'Personagem 5', avatar: require('./assets/personagem5.jpg') },
];

export default function App() {
  const [screen, setScreen] = useState('welcome');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(null);

  const logoRF = require('./assets/logo_rf.png');
  const userIcon = require('./assets/user_icon.png');
  const vlogRyan = require('./assets/vlog_ryan.png');

  // URL do vídeo Mux (HLS .m3u8)
  const muxVideoUrl = 'https://stream.mux.com/zhHyqy2VNOScojVUF01pbW6sDFfh6DYM4BUDJEyUwPSM.m3u8';

  // --- Telas ---

  if (screen === 'welcome') {
    return (
      <LinearGradient colors={['#000000', '#A00']} style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.logo}>RYANFLIX</Text>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => setScreen('login')}
            activeOpacity={0.7}
          >
            <Text style={styles.signInText}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.centerContent}>
          <Text style={styles.subtitle}>
            Todas as produções da{'\n'}
            Golden Boy Studios{'\n'}Em Um Só Lugar
          </Text>
        </View>
        <View style={styles.bottomBar}>
          <TouchableOpacity
            style={styles.subscribeButton}
            onPress={() => setScreen('login')}
            activeOpacity={0.7}
          >
            <Text style={styles.subscribeText}>Assine</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }

  if (screen === 'login') {
    return (
      <LinearGradient colors={['#000', '#A00']} style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.logo}>RYANFLIX</Text>
        </View>
        <View style={styles.loginContent}>
          <Text style={styles.title}>Entrar</Text>
          <TextInput
            style={styles.input}
            placeholder="Email ou telefone"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
          <TouchableOpacity
            style={styles.subscribeButton}
            onPress={() => setScreen('profileSelect')}
            activeOpacity={0.7}
          >
            <Text style={styles.subscribeText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }

  if (screen === 'profileSelect') {
    return (
      <LinearGradient colors={['#000', '#A00']} style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.logo}>RYANFLIX</Text>
        </View>
        <Text style={[styles.title, { alignSelf: 'center', marginTop: 20 }]}>
          Escolha seu personagem
        </Text>
        <FlatList
          data={profiles}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.profileList}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.profile}
              onPress={() => {
                setSelectedProfile(item);
                setScreen('home');
              }}
              activeOpacity={0.8}
            >
              <Image source={item.avatar} style={styles.avatar} />
              <Text style={styles.profileName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity style={styles.addProfile}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }

  if (screen === 'home' && selectedProfile) {
    return (
      <LinearGradient colors={['#000', '#A00']} style={styles.homeContainer}>
        <View style={styles.header}>
          <Image source={logoRF} style={styles.logoRF} />
          <View style={styles.menu}>
            <Text style={styles.menuItem}>Programas</Text>
            <Text style={styles.menuItem}>Produtos</Text>
            <Text style={styles.menuItem}>Ajuda</Text>
          </View>
          <TouchableOpacity>
            <Image source={userIcon} style={styles.userIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setScreen('video')}
          >
            <Image
              source={vlogRyan}
              style={styles.poster}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <Text style={styles.titleHome}>Vlog do Ryan:{"\n"}Sem Censura</Text>
          <Text style={styles.desc}>
            No Vlog do Ryan Sem Censura, veja tudo sem cortes: episódios completos, bastidores e conteúdos exclusivos só no site.
          </Text>
        </View>
      </LinearGradient>
    );
  }

  if (screen === 'video') {
    return (
      <LinearGradient colors={['#000', '#A00']} style={styles.homeContainer}>
        <View style={styles.header}>
          <Image source={logoRF} style={styles.logoRF} />
          <View style={styles.menu}>
            <Text style={styles.menuItem}>Programas</Text>
            <Text style={styles.menuItem}>Produtos</Text>
            <Text style={styles.menuItem}>Ajuda</Text>
          </View>
          <TouchableOpacity onPress={() => setScreen('home')}>
            <Image source={userIcon} style={styles.userIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.videoBox}>
            <Video
              source={{ uri: muxVideoUrl }}
              style={{ width: '100%', height: '100%', borderRadius: 12, backgroundColor: '#000' }}
              useNativeControls
              resizeMode="contain"
              shouldPlay
            />
          </View>
          <Text style={styles.titleHome}>Vlog do Ryan:{"\n"}Sem Censura</Text>
          <Text style={styles.desc}>
            No Vlog do Ryan Sem Censura, veja tudo sem cortes: episódios completos, bastidores e conteúdos exclusivos só no site.
          </Text>
        </View>
      </LinearGradient>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  topBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  logo: {
    color: '#E50914',
    fontSize: 28,
    fontWeight: 'bold',
  },
  signInButton: {
    backgroundColor: '#333',
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 4,
  },
  signInText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 24,
  },
  bottomBar: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
  },
  subscribeButton: {
    backgroundColor: '#B0060F',
    paddingVertical: 12,
    paddingHorizontal: width * 0.3,
    borderRadius: 4,
  },
  subscribeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  loginContent: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    width: '100%',
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
    fontSize: 16,
  },
  profileList: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profile: {
    alignItems: 'center',
    margin: 16,
    width: 120,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileName: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  addProfile: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#333',
    margin: 16,
    alignSelf: 'center',
  },
  plus: {
    color: '#fff',
    fontSize: 36,
  },
  homeContainer: {
    flex: 1,
  },
  header: {
    paddingTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  logoRF: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  menu: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    marginLeft: 12,
    marginRight: 12,
  },
  menuItem: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  userIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  content: {
    alignItems: 'center',
    marginTop: 36,
    paddingHorizontal: 24,
  },
  poster: {
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: 8,
    marginBottom: 28,
    backgroundColor: '#222',
  },
  titleHome: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 34,
  },
  desc: {
    color: '#ccc',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 20,
  },
  videoBox: {
    width: width * 0.8,
    height: 210,
    backgroundColor: '#111',
    borderWidth: 2,
    borderColor: '#E50914',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
});
