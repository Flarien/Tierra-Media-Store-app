import { Image, StyleSheet, Text } from "react-native";
import Card from "./Card";

const ProductItem = ({ product }) => {
  return (
    <Card>
      <Text style={styles.list}>{product.title}</Text>
      <Image style={styles.image} source={{ uri: product.images[0] }} />
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  list: {
    margin: 10,
    padding: 5,
    fontSize: 18,
    fontFamily: "Cinzel",
    marginHorizontal: 15,
    textAlign: "center",
  },

  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});
