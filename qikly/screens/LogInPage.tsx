import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginPage: React.FC = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [generalError, setGeneralError] = useState<string | null>(null);
   const navigation = useNavigation();

   const handleSignIn = () => {
      setGeneralError(null);
      // Here you can add your own logic for authentication (e.g., API call)
      if (email && password) {

         // navigation.navigate('Dashboard');  
      } else {
         setGeneralError('Please enter valid email and password');
      }
   };

   return (
      <KeyboardAvoidingView
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Different behavior for iOS and Android
         style={styles.container}
      >
         <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subtitle}>Sign in to your account</Text>

            <View style={styles.inputContainer}>
               <Text style={styles.label}>Email</Text>
               <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
               />
            </View>

            <View style={styles.inputContainer}>
               <Text style={styles.label}>Password</Text>
               <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
               />
            </View>

            {generalError && <Text style={styles.error}>{generalError}</Text>}

            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
               <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <View style={styles.divider}>
               <View style={styles.dividerLine} />
               <Text style={styles.orText}>or</Text>
               <View style={styles.dividerLine} />
            </View>

            <TouchableOpacity
            // onPress={() => navigation.navigate('SignUp')}  // Make sure SignUp is registered in the navigator
            >
               <Text style={styles.signupLink}>
                  Don't have an account? Sign up
               </Text>
            </TouchableOpacity>
         </ScrollView>
      </KeyboardAvoidingView>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
   },
   logo: {
      width: 110,
      height: 90,
      marginBottom: 20,
   },
   button: {
      backgroundColor: '#3b8d99',  // Button background color
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
   title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
   },
   subtitle: {
      fontSize: 18,
      color: '#555',
      marginBottom: 20,
   },
   inputContainer: {
      width: '100%',
      marginBottom: 10,
   },
   label: {
      fontSize: 16,
      marginBottom: 5,
      color: '#333',
   },
   input: {
      width: '100%',
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      paddingLeft: 10,
   },
   error: {
      color: 'red',
      marginBottom: 10,
   },
   divider: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 20,
   },
   dividerLine: {
      height: 1,
      backgroundColor: '#ccc',
      flex: 1,
   },
   orText: {
      marginHorizontal: 10,
      color: '#555',
   },
   signupLink: {
      marginTop: 20,
      color: '#ff7f00',
   },
});

export default LoginPage;
