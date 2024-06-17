import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function WebScreen({ route }) {
  const { uri } = route.params;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "http://www.swedavia.se/arlanda/avgangar/" }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
