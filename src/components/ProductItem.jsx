import {
  Image,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import Card from "./Card";
import StyledView from "../styledComponents/StyledView";
import StyledText from "../styledComponents/StyledText";

const ProductItem = ({ product, navigation }) => {
  const { width } = useWindowDimensions();

  return (
    <StyledView>
      <Pressable
        onPress={() => navigation.navigate("ItemDetail", { id: product.id })}
      >
        <Card style={styles.card}>
          <StyledText style={width < 400 ? styles.textMin : styles.text}>
            {product.title}
          </StyledText>
          <Image style={styles.image} source={{ uri: product.images }} />
        </Card>
      </Pressable>
    </StyledView>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  text: {
    margin: 10,
    width: "55%",
    height: "20%",
    padding: 2,
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Cinzel",
    color: "white",
  },

  textMin: {
    margin: 10,
    width: "55%",
    height: "20%",
    padding: 2,
    fontSize: 12,
    textAlign: "center",
    fontFamily: "Cinzel",
  },

  image: {
    minHeight: 90,
    minWidth: 90,
    width: "50%",
    height: "60%",
    margin: 5,
  },
});
