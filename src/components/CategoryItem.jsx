import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";

const CategoryItem = ({ category, navigation }) => {
  return (
    <Card>
      <Pressable
        onPress={() => navigation.navigate("ItemListCategories", { category })}
      >
        <Text style={styles.list}>{category}</Text>
      </Pressable>
    </Card>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  list: {
    margin: 10,
    padding: 5,
    fontSize: 18,
    marginHorizontal: 15,
    textAlign: "center",
    fontFamily: "Cinzel",
  },
});
