import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  const navigateToWebScreen = () => {
    navigation.navigate("Web", {
      uri: "http://www.swedavia.se/arlanda/avgangar/",
    });
  };

  const navigateToAnotherScreen = () => {
    navigation.navigate("AnotherScreen");
  };

  return (
    <ImageBackground
      source={require("../assets/freepik-gradient-airtravel-agency-logo-20240617170135pipR.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Välj en skärm:</Text>

        <TouchableOpacity style={styles.button} onPress={navigateToWebScreen}>
          <Text style={styles.buttonText}>Visa avgångar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={navigateToAnotherScreen}
        >
          <Text style={styles.buttonText}>Mer information</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    marginTop: 180,
  },
  button: {
    backgroundColor: "#0000FF",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    minWidth: 200,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
