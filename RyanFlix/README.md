# 🎬 RYANFLIX

Um app de streaming estilo Netflix criado com **React Native** e **Expo**, apresentando conteúdos fictícios da Golden Boy Studios. O app possui telas de login, seleção de perfis, navegação e reprodução de vídeo via Mux.

## 📱 Demonstração

> Para testar o app rapidamente, basta escanear o QR Code com o app **Expo Go** no seu celular Android!

---

## 🚀 Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/ryanflix.git
cd ryanflix
```

### 2. Instale as dependências

Certifique-se de que você tenha o **Node.js** e o **Expo CLI** instalados.

```bash
npm install
```

> Se ainda não tiver o Expo CLI:
```bash
npm install -g expo-cli
```

### 3. Inicie o servidor

```bash
expo start
```

Isso abrirá o navegador com o painel do Expo. Você verá um **QR Code** na tela.

---

## 📲 Como Rodar no Celular (Android)

1. Baixe o app **Expo Go** na Play Store.
2. Abra o app Expo Go e escaneie o QR Code que aparece no terminal ou navegador.
3. O app será carregado automaticamente no seu celular.

> **Importante:** Os arquivos de imagem (`./assets/`) e a URL de vídeo (Mux) devem estar corretamente configurados no seu projeto para o app funcionar corretamente.

---

## 🔧 Dependências Principais

- **react-native**
- **expo**
- **expo-av** – para reprodução de vídeo
- **expo-linear-gradient** – para o fundo gradiente das telas
- **react-native-flatlist** – para listagem dos perfis

Instale as bibliotecas adicionais com:

```bash
npx expo install expo-av expo-linear-gradient
```

---

## 🖼️ Estrutura de Pastas

```
📁 ryanflix/
 ┣ 📁 assets/
 ┃ ┣ personagem1.jpg
 ┃ ┣ logo_rf.png
 ┃ ┣ vlog_ryan.png
 ┃ ┗ ...
 ┣ App.js
 ┗ README.md
```

---

## 🎥 Vídeo

O vídeo é transmitido via **Mux**, utilizando o link HLS (`.m3u8`) compatível com o `expo-av`. Ele funciona automaticamente em dispositivos Android.

---

## 💡 Sugestões Futuras

- Implementar autenticação real
- Integração com um backend
- Suporte offline para vídeos
- Mais personagens e conteúdos

---

## 🧑‍💻 Autor

Desenvolvido por [Seu Nome] – sinta-se livre para contribuir com sugestões e melhorias!

---

## 📜 Licença

Este projeto é licenciado sob a [MIT License](LICENSE).