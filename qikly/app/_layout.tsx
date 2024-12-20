// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
// import React, { useEffect } from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native'; // Import SafeAreaView
// import 'react-native-reanimated';

// export default function RootLayout() {
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <SafeAreaView style={styles.safeAreaContainer}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeAreaContainer: {
//     flex: 1, // Make sure the safe area covers the full screen
//   },
// });
