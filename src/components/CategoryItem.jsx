import { useDispatch } from "react-redux";
import { Pressable, StyleSheet, Text } from "react-native";
import { setCategorySelected} from "../features/shop/shopSlice"
import Card from "./Card";

const CategoryItem = ({ category, navigation }) => {

  const dispatch = useDispatch()

  return (
    <Card>
      <Pressable
        onPress={() => {
          dispatch(setCategorySelected(category));
          navigation.navigate("ItemListCategories", { category })
        }}
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
