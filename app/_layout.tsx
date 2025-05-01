import { ThemeProvider } from "@/context/theme.context";
import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  const { Screen } = Stack;

  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Screen name="index" />
        <Screen name="(routes)/onboarding/index.tsx" />
      </Stack>
    </ThemeProvider>
  );
}
