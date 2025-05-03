import { fontSizes, IsIOS } from "@/themes/app.constant";
import { BlurView } from "expo-blur";
import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { HEIGHT, WIDTH } from "@/configs/constants";

export default function AuthModal({
  setModalVisible,
}: {
  setModalVisible: (modal: boolean) => void;
}) {
  const configuredGoogleSignIn = () => {
    if (IsIOS) {
      GoogleSignin.configure({
        iosClientId: process.env.EXPO_PUBLIC_IOS_GOOGLE_API_KEY,
      });
    } else {
      GoogleSignin.configure({
        webClientId: process.env.EXPO_PUBLIC_ANDROID_GOOGLE_API_KEY,
      });
    }
  };
  const googleSignIn = () => {};
  const githubSignIn = () => {};
  const appleSignIn = () => {};

  return (
    <View style={styles.fullscreenWrapper}>
      <BlurView intensity={100} tint="light" style={StyleSheet.absoluteFill} />
      <View style={styles.modalContainer}>
        <Text style={[styles.title]}>Join to Becodemy {""}</Text>
        <Text style={styles.subtitle}>It's easier than your imagination!</Text>
        <View style={styles.buttonGroup}>
          <Pressable style={styles.authButton}>
            <Image
              source={require("@/assets/images/onboarding/google.png")}
              style={styles.authIcon}
            />
            <Text style={styles.authText}>Continue with Google {""}</Text>
          </Pressable>

          <Pressable style={styles.authButton}>
            <Image
              source={require("@/assets/images/onboarding/github.png")}
              style={styles.authIcon}
            />
            <Text style={styles.authText}>Continue with GitHub {""}</Text>
          </Pressable>

          <Pressable style={styles.authButton}>
            <Image
              source={require("@/assets/images/onboarding/apple.png")}
              style={styles.authIcon}
            />
            <Text style={styles.authText}>Continue with Apple {""}</Text>
          </Pressable>
        </View>
      </View>
      <Pressable
        style={StyleSheet.absoluteFill}
        onPress={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fullscreenWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: WIDTH,
    height: HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "82.5%",
    backgroundColor: "#fff",
    borderRadius: 24,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: "center",
    zIndex: 2,
  },
  buttonGroup: {
    width: "97.5%",
    marginTop: 20,
    gap: 12,
  },

  authButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  authIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: 12,
  },
  authText: {
    fontSize: 16,
    marginTop: 5,
    fontFamily: "Poppins_500Medium",
    color: "#05030D",
  },
  title: {
    fontSize: fontSizes.FONT35,
    fontFamily: "Poppins_700Bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: fontSizes.FONT17,
    fontFamily: "Poppins_300Light",
    textAlign: "center",
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    width: "100%",
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
});
