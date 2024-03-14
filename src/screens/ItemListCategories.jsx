import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../services/shopService.js";
import { FlatList, StyleSheet, View } from "react-native";
import { colors } from "../global/colors.js";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search.jsx";

const ItemListCategories = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  const category = useSelector(
    (state) => state.shopReducer.value.categorySelected
  );
  const {
    data: productsFilteredByCategory,
    isLoading,
    error,
  } = useGetProductsByCategoryQuery(category);
  console.log(isLoading,error);

  useEffect(() => {
    if (productsFilteredByCategory) {
      const productsRaw = Object.values(productsFilteredByCategory); 
      const productsFiltered = productsRaw.filter((product) => 
      product.title.includes(keyword) 
      );
      setProducts(productsFiltered);
    }
  }, [productsFilteredByCategory, keyword]);

  return (
    <View>
      <Search onSearch={setKeyword} keyword={keyword} />
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem product={item} navigation={navigation} />
        )} 
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
