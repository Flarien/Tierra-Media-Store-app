import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { colors } from "./src/global/colors.js";
import Home from "./src/screens/Home.jsx";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.back_beige,
    paddingTop: Constants.statusBarHeight,
  },
});
