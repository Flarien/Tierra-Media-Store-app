import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors.js";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search.jsx";
import allProducts from "../data/products.json";

const ItemListCategories = ({category}) => {

  const [ products, setProducts ] = useState([])
  
  const [keyword, setKeyword] = useState("");

  useEffect(()=>{
    
    if (category) {
      const products = allProducts.filter((product) => product.category === category) //Compara la categoria y la devuelve (filtra) si coincide
      const filteredProducts = products.filter((product)=> product.title.includes(keyword))//Retornará todos los productos que incluyan/coincidan con la palabra clave guardada en el input/keyword
      setProducts(filteredProducts);
    }

  },[]) // Se va a ejecutar una sola vez (al final) a menos que cambie algo de lo que yo haya puesto en el []


  return (
    <View>
      <Text style={styles.titleSection}>ItemListCategories</Text>
      <Search onSearch={setKeyword} keyword={keyword} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} />} // Renderiza este componente por cada elemento en el array - Desestructura "item"
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
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
});
