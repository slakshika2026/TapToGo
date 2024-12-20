// import { Tabs } from 'expo-router';
// import React from 'react';
// import { Platform, SafeAreaView } from 'react-native';

// import { HapticTab } from '@/components/HapticTab';
// import { IconSymbol } from '@/components/ui/IconSymbol';
// import TabBarBackground from '@/components/ui/TabBarBackground';
// import { Colors } from '@/constants/Colors'; // Assuming Colors is predefined with a single theme color scheme

// export default function TabLayout() {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <Tabs
//         screenOptions={{
//           tabBarActiveTintColor: Colors.light.tint,
//           headerShown: false,
//           tabBarButton: HapticTab,
//           tabBarBackground: TabBarBackground,
//           tabBarStyle: Platform.select({

//             default: {},
//           }),
//         }}>
//         <Tabs.Screen
//           name="index"
//           options={{
//             title: 'Home',
//             tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
//           }}
//         />
//         <Tabs.Screen
//           name="explore"
//           options={{
//             title: 'Explore',
//             tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
//           }}
//         />
//       </Tabs>
//     </SafeAreaView>
//   );
// }
