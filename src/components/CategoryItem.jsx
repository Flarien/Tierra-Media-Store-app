import { useDispatch } from "react-redux";
import { Pressable, StyleSheet, View } from "react-native";
import { setCategorySelected} from "../features/shop/shopSlice"
import StyledText from "../styledComponents/StyledText";
import { colors } from "../global/colors";

const CategoryItem = ({ category, navigation }) => {

  const dispatch = useDispatch()

  return (
    <View style={styles.items}>
      <Pressable
        onPress={() => {
          dispatch(setCategorySelected(category));
          navigation.navigate("ItemListCategories", { category })
        }}
      >
        <StyledText text>{category}</StyledText>
      </Pressable>
    </View>
  );
};

export default CategoryItem;
const styles = StyleSheet.create({
  items: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.back_green,
    width: "95%",
    height: 80,
    shadowColor: "black",
    shadowOffset: {
      height: 3,
      width: 2,
    },
    elevation: 8,
    shadowOpacity: 1,
    shadowRadius: 1,
    margin: 10,
    marginBottom: 15
  },
});