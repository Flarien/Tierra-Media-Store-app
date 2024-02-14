import { StyleSheet, Text } from "react-native";
import Card from "./Card";

const ProductItem = ({ product }) => {
  return (
    <Card>
      <Text style={styles.list}>{product.title}</Text>
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  list: {
    margin: 10,
    padding: 5,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Cinzel",
  },
});
