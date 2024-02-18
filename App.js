import { useState } from "react";
import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";
import { colors } from "./src/global/colors.js";
import { fonts } from "./src/global/fonts.js";
import Constants from "expo-constants";
import Home from "./src/screens/Home.jsx";
import ItemListCategories from "./src/screens/ItemListCategories.jsx";
import ItemDetail from "./src/screens/ItemDetail.jsx";

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");
  const [productDetailId, setProductDetailId] = useState(0);

  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {productDetailId ? ( // Si productDetailId es true, devuelve ItemDetail
        <ItemDetail productDetailId={productDetailId} />
      ) : categorySelected ? ( //Si no es true, vuelve a preguntar: Hay una categoría seleccionada?
        <ItemListCategories // Si, entonces devuelve el contenido de esa categoría (osea ProductItem, que esta dentro de ItemListC...)
          setCategorySelected={setCategorySelected}
          setProductDetailId={setProductDetailId}
          category={categorySelected}
        />
      ) : (
        <Home setCategorySelected={setCategorySelected} /> //Y si no, devuelve el Home, que tiene la lista de las categorías
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
