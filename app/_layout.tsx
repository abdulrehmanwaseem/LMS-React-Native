import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  const { Screen } = Stack;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Screen name="index" />
    </Stack>
  );
}
