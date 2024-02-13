import { Image, StyleSheet, Text, View } from "react-native";
import Card from "./Card";

const ProductItem = ({ product }) => {
  return (
    <Card>
      <Text style={styles.list}>{product.title}</Text>
      <View>
        <Image style={styles.image} uri={product.images[0]} />
      </View>
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  list: {
    margin: 10,
    padding: 5,
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 15,
    textAlign: "center",
  },

  image: {
    width: 40,
    height:40,
  },
});
