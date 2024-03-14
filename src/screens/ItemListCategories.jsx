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

  //const productsFilteredByCategory = useSelector((state) => state.shopReducer.value.productsFilteredByCategory);
  const category = useSelector(
    (state) => state.shopReducer.value.categorySelected
  );
  const {
    data: productsFilteredByCategory,
    isLoading,
    error,
  } = useGetProductsByCategoryQuery(category);
  console.log(isLoading,error);
  //const {category} = route.params //recibe el parametro category desde CategoryItems (segundo parametro dentro de navigation.navigate )

  useEffect(() => {
    if (productsFilteredByCategory) {
      const productsRaw = Object.values(productsFilteredByCategory); // productsRaw devuelve un array con los valores de las propiedades de un objeto (los productos contenidos en productsFilteredByCategory)
      const productsFiltered = productsRaw.filter((product) => 
      product.title.includes(keyword) // Filtra los productos por el keyword ingresado
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
