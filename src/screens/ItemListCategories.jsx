import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors.js";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search.jsx";
import products from "../data/products.json";

const ItemListCategories = () => {
  return (
    <View>
      <Text style={styles.titleSection}>ItemListCategories</Text>
      <Search />
      <FlatList
        data={products}
        renderItem={({ item  }) => <ProductItem product={item} />} // Renderiza este componente por cada elemento en el array - Desestructura "item"
        keyExtractor={(item)=> item.id}
      />
    </View>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({
  
  titleSection: {
    fontSize: 30,
    backgroundColor: colors.secondary,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
});
