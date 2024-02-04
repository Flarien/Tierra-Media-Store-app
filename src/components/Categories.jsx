import { FlatList, StyleSheet, Text, View } from "react-native";
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <View>
      <Text style={styles.titleCategories}>Lista de Categorías</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem category={item}/>
        )}
        keyExtractor={(category) => category}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  titleCategories: {
    fontSize: 24,
    color: "brown",
    margin: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
