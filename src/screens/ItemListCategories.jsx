import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors.js";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search.jsx";
import allProducts from "../data/products.json";

const ItemListCategories = ({ navigation, route }) => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  const {category} = route.params //recibe el parametro category desde CategoryItems (segundo parametro dentro de navigation.navigate )

  useEffect(() => {
    if (category) {
      const products = allProducts.filter(
        (product) => product.category === category
      ); //Compara la categoria y la devuelve (filtra) si coincide
      const filteredProducts = products.filter((product) =>
        product.title.includes(keyword)
      ); //Retornará todos los productos que incluyan/coincidan con la palabra clave guardada en el input/keyword
      setProducts(filteredProducts);
    } else {
      const filteredProducts = allProducts.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(filteredProducts);
    }
  }, [category, keyword]); // Se va a ejecutar una sola vez (al final) a menos que cambie algo de lo que yo haya puesto en el []

  return (
    <View>
      <Search onSearch={setKeyword} keyword={keyword} />
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem product={item} navigation={navigation} />
        )} // Renderiza este componente por cada elemento en el array - Desestructura "item"
        keyExtractor={(item) => item.id}
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
    fontFamily: "Cinzel",
    textAlign: "center",
    padding: 10,
  },

  volver: {
    fontSize: 20,
    backgroundColor: colors.back_green,
    color: "white",
    fontFamily: "Cinzel",
    textAlign: "center",
    padding: 10,
  },
});
