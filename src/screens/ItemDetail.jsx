import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
import allProducts from "../data/products.json";

const ItemDetail = ({ productDetailId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productFinded = allProducts.find(
      (product) => product.id === productDetailId
    );
    setProduct(productFinded);
  }, [productDetailId]);

  return (
    <View>
      {product ? (
        <View>
          <Text>{product.title} </Text>
        </View>
      ) : (
        <View>
          <Text>Cargando... </Text>
        </View>
      )}
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  volver: {
    fontSize: 20,
    backgroundColor: colors.back_green,
    color: "white",
    fontFamily: "Cinzel",
    textAlign: "center",
    padding: 10,
  },
});
