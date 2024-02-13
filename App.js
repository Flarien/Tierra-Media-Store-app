import { useState } from "react";
import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";
import { colors } from "./src/global/colors.js";
import { fonts } from "./src/global/fonts.js";
import Constants from "expo-constants";
import Home from "./src/screens/Home.jsx";
import ItemListCategories from "./src/screens/ItemListCategories.jsx";

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");

  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      {categorySelected ? (
        <ItemListCategories />
      ) : (
        <Home setCategorySelected={setCategorySelected} />
      )}
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
