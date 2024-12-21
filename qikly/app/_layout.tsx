import { Stack } from "expo-router";

import ClickCountProvider from "./CountContext";

export default function RootLayout() {
   return (
      <ClickCountProvider>
         <Stack screenOptions={{ headerShown: false }}></Stack>
      </ClickCountProvider>
   );
}
