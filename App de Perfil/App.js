import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
export default function App() {
return (
<View style={styles.container}>
<StatusBar barStyle="light-content" backgroundColor="#1f1f1f" />
<View style={styles.card}>
<Image
source={{ uri: 'https://imgs.search.brave.com/sKBnnY7qFVVfLH0s5TOsyEG_a26OfHi-hfwXoYJ1SYs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vNzQvMjE5Nzc0/LTA1MC1FMDg1OEY4/Ni9NaWNoYWVsLUIt/Sm9yZGFuLTIwMTku/anBnP3c9NDAwJmg9/MzAwJmM9Y3JvcA' }}
style={styles.profileImage}
/>
<Text style={styles.name}>Valdir Jr.</Text>
<Text style={styles.phrase}>“Formado em Nutrição e em Educação Física”</Text>
</View>
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#121212',
alignItems: 'center',
justifyContent: 'center',
padding: 16,
},
card: {
backgroundColor: '#1f1f1f',
borderRadius: 20,
padding: 24,
alignItems: 'center',
shadowColor: '#000',
shadowOpacity: 0.3,
shadowRadius: 10,
elevation: 10,
width: '100%',
maxWidth: 320,
},
profileImage: {
width: 120,
height: 120,

borderRadius: 60,
marginBottom: 16,
borderWidth: 2,
borderColor: '#00d1ff',
},
name: {
fontSize: 24,
fontWeight: 'bold',
color: '#ffffff',
marginBottom: 8,
},
phrase: {
fontSize: 16,
fontStyle: 'italic',
color: '#cccccc',
textAlign: 'center',
},
});