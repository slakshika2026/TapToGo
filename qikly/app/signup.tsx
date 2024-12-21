import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { ClickCountContext } from './CountContext';

const SignupPage: React.FC = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [name, setName] = useState('');
   const [generalError, setGeneralError] = useState<string | null>(null);
   const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});
   const { setUserEmail, setUserPassword, setYourName } = useContext(ClickCountContext);

   const switchToLogIn = () => {
      router.push('/login');
   }

   const handleSignUp = () => {
      setGeneralError(null);
      setErrors({}); // Reset errors

      let formValid = true;
      const newErrors: any = {};

      // Name validation
      if (!name) {
         newErrors.name = 'Name is required';
         formValid = false;
      }

      // Email validation
      if (!email) {
         newErrors.email = 'Email is required';
         formValid = false;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
         newErrors.email = 'Email address is invalid';
         formValid = false;
      }

      // Password validation
      if (!password) {
         newErrors.password = 'Password is required';
         formValid = false;
      } else if (password.length < 6) {
         newErrors.password = 'Password must be at least 6 characters';
         formValid = false;
      }

      setErrors(newErrors);

      if (formValid) {
         // Save email, password, and name in context
         setYourName(name);
         setUserEmail(email);
         setUserPassword(password);
         router.push('/login');
      } else {
         setGeneralError('Please fix the errors above');
      }
   };

   return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
         <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Welcome!</Text>
            <Text style={styles.subtitle}>Sign Up to your account</Text>

            <View style={styles.inputContainer}>
               <Text style={styles.label}>Name</Text>
               <TextInput
                  style={styles.input}
                  placeholder="Enter your name"
                  value={name}
                  onChangeText={setName}
               />
               {errors.name && <Text style={styles.error}>{errors.name}</Text>}
            </View>

            <View style={styles.inputContainer}>
               <Text style={styles.label}>Email</Text>
               <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
               />
               {errors.email && <Text style={styles.error}>{errors.email}</Text>}
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
               {errors.password && <Text style={styles.error}>{errors.password}</Text>}
            </View>

            {generalError && <Text style={styles.error}>{generalError}</Text>}

            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
               <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.divider}>
               <View style={styles.dividerLine} />
               <Text style={styles.orText}>or</Text>
               <View style={styles.dividerLine} />
            </View>

            <TouchableOpacity onPress={switchToLogIn}>
               <Text style={styles.signupLink}>Already have an account? Log in</Text>
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
      backgroundColor: '#3b8d99', // Button background color
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
      fontWeight: '900',
      color: '#333',
   },
   subtitle: {
      fontSize: 20,
      color: '#555',
      fontWeight: '500',
      marginBottom: 20,
   },
   inputContainer: {
      width: '100%',
      marginBottom: 10,
   },
   label: {
      fontSize: 18,
      marginBottom: 8,
      color: '#333',
      fontWeight: '600'
   },
   input: {
      width: '100%',
      height: 45,
      borderColor: '#333',
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
      color: '#3b8d99',
   },
});

export default SignupPage;
