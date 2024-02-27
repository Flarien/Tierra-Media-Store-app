import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FlatList, StyleSheet, View } from "react-native";
import { colors } from "../global/colors.js";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search.jsx";

const ItemListCategories = ({ navigation }) => {

  const productsFilteredByCategory = useSelector((state) => state.shopReducer.value.productsFilteredByCategory);

  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  //const {category} = route.params //recibe el parametro category desde CategoryItems (segundo parametro dentro de navigation.navigate )

  useEffect(() => {
    const productFiltered = productsFilteredByCategory.filter((product) => product.title.includes(keyword));
    setProducts(productFiltered);
  }, [productsFilteredByCategory, keyword]); 

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
});
