import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";
import Card from "./Card";

const ProductItem = ({ product, navigation }) => {
  
  const { width, height } = useWindowDimensions();
  console.log(width, height);

  return (
    <Pressable onPress={() => navigation.navigate("ItemDetail", {id: product.id})}>
      <Card>
        <Text style={width < 400 ? styles.textMin : styles.text}>
          {product.title}
        </Text>
        <Image style={styles.image} source={{ uri: product.images }} />
      </Card>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  text: {
    margin: 10,
    width: "55%",
    padding: 5,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Cinzel",
    color: "white",
  },

  textMin: {
    margin: 10,
    width: "55%",
    padding: 5,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Cinzel",
  },

  image: {
    minHeight: 90,
    minWidth: 90,
    width: "35%",
    margin: 5,
  },
});
