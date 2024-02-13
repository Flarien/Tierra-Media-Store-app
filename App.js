import { StyleSheet, View } from "react-native";
import { colors } from "./src/global/colors.js";
import Constants from "expo-constants";
import Home from "./src/screens/Home.jsx";
import ItemListCategories from "./src/screens/ItemListCategories.jsx";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <ItemListCategories />
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
