//import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../services/shopService";
import { FlatList, StyleSheet, View } from "react-native";
import Counter from "../components/Counter";
import CategoryItem from "./CategoryItem";

const Categories = ({ navigation }) => {
  //const categories = useSelector(state => state.shopReducer.value.categories)

  //////----------------> Buscar loader y configurar mensaje de error
  const { data, isLoading, error } = useGetCategoriesQuery();

  return (
    <View style={{ flex: 1 }}>
      {/* <Counter /> */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CategoryItem navigation={navigation} category={item} />
        )}
        keyExtractor={(category) => category}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  titleCategories: {
    fontSize: 30,
    color: "brown",
    marginTop: 20,
    fontFamily: "Cinzel",
    textAlign: "center",
  },
});
