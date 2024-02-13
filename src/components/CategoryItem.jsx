import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";

const CategoryItem = ({ category, setCategorySelected }) => {
  return (
    <Card>
      <Pressable onPress={() => setCategorySelected(category)}>
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
