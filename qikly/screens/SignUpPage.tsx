import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignupPage: React.FC = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [generalError, setGeneralError] = useState<string | null>(null);
   const navigation = useNavigation();

   const handleSignUp = () => {
      setGeneralError(null);

      if (email && password) {

         // navigation.navigate('Login'); 
      } else {
         setGeneralError('Please enter valid email and password');
      }
   };

   return (
      <View style={styles.container}>
         <Text style={styles.title}>Create a new account</Text>
         <Text style={styles.subtitle}>Sign up to get started</Text>

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

         <Button title="Sign up" onPress={handleSignUp} />

         <TouchableOpacity
         // onPress={() =>
         // // navigation.navigate('Login')
         // }

         >
            <Text style={styles.loginLink}>
               Already have an account? Log in
            </Text>
         </TouchableOpacity>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
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
   loginLink: {
      marginTop: 20,
      color: '#ff7f00',
   },
});

export default SignupPage;
