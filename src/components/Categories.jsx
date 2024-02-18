import { FlatList, StyleSheet, Text, View } from "react-native";
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem";

const Categories = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.titleCategories}>Lista de Categorías</Text>
      <FlatList
        data={categories}
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
