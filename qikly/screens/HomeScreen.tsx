// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../types';

// const { width, height } = Dimensions.get('window');

// // Type the navigation prop
// type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LogIn'>;

// export default function HomeScreen() {
//    const navigation = useNavigation<HomeScreenNavigationProp>();

//    const handleGetStarted = () => {
//       navigation.navigate('LogIn'); // Ensure 'LogIn' is registered in the navigator
//    };

//    return (
//       <SafeAreaView style={styles.container}>
//          {/* Set the status bar style */}
//          <StatusBar barStyle="dark-content" backgroundColor="#fff" />

//          <View style={styles.header}>
//             <Image
//                source={require('../assets/images/header3.jpeg')}
//                style={styles.headerImage}
//             />
//          </View>

//          <View style={styles.content}>
//             <Text style={styles.welcomeText}>Your Ride, Just a Tap Away</Text>
//             <Image
//                source={require('../assets/images/logo.png')}
//                style={styles.logo}
//             />

//             <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
//                <Text style={styles.buttonText}>Get Started</Text>
//             </TouchableOpacity>
//          </View>
//       </SafeAreaView>
//    );
// }

// const styles = StyleSheet.create({
//    container: {
//       flex: 1,
//       backgroundColor: '#fff',
//    },
//    header: {
//       width: '100%',
//       height: height * 0.4,
//       justifyContent: 'center',
//       alignItems: 'center',
//       overflow: 'hidden',
//       marginBottom: -width * 0.2,
//    },
//    headerImage: {
//       width: '100%',
//       height: '100%',
//       resizeMode: 'cover',
//    },
//    content: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       paddingHorizontal: 20,
//       paddingTop: 20,
//    },
//    logo: {
//       width: width * 0.5,
//       height: width * 0.4,
//       marginBottom: 20,
//    },
//    welcomeText: {
//       fontSize: width * 0.06,
//       fontWeight: 'bold',
//       marginBottom: 20,
//       textAlign: 'center',
//    },
//    button: {
//       backgroundColor: '#3b8d99',  // Button background color
//       paddingVertical: 12,
//       paddingHorizontal: 40,
//       borderRadius: 8,
//       marginTop: 20,
//    },
//    buttonText: {
//       color: '#fff',
//       fontSize: 18,
//       fontWeight: 'bold',
//       textAlign: 'center',
//    },
// });
