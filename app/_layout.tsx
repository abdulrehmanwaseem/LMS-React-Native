import { ThemeProvider } from "@/context/theme.context";
import { SplashScreen, Stack } from "expo-router";
import React from "react";
import {
  Poppins_600SemiBold,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium,
  useFonts,
} from "@expo-google-fonts/poppins";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { Screen } = Stack;

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Poppins_600SemiBold,
    Poppins_300Light,
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
  });

  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Screen name="index" />
        <Screen name="(routes)/onboarding" />
      </Stack>
    </ThemeProvider>
  );
}
