import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/login');
  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.header}>
        <Image
          source={require('../assets/images/header.webp')}
          style={styles.headerImage}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.welcomeText}>Never Miss a Train Again!</Text>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        <View>
          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>


        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: height * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: -width * 0.2,
  },
  headerImage: {
    width: '100%',
    height: '90%',
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  logo: {
    width: width * 0.5,
    height: width * 0.4,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3b8d99',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
