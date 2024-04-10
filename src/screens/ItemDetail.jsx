import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ActivityIndicator, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { addItem } from "../features/shop/cartSlice";
import { colors } from "../global/colors";
import allProducts from "../data/products.json";
import Counter from "../components/Counter";

const ItemDetail = ({ route }) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const {id} = route.params

  const dispatch = useDispatch()

  const onAddCart = () => {
    dispatch(addItem({ ...product, quantity: selectedQuantity }));
    console.log(onAddCart);
  }

  useEffect(() => {
    const productFinded = allProducts.find(
      (product) => product.id === id
    );
    setProduct(productFinded);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [id]);

  return (
    <View style={styles.main}>
      {isLoading ? (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Cargando... </Text>
        </View>
      ) : (
        <ScrollView style={{flex: 1}}>
          <View style={styles.container}>
            <Image
              source={{ uri: product.images }}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.textContainer}>
              <Text style={styles.descriptionTitle}>{product.title} </Text>
              <Text style={styles.descriptionText}>{product.description} </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.price}>{product.price} </Text>
                <Text style={styles.descriptionTextPrice}>Monedas de Oro</Text>
              </View>
              <Counter
                stock={product.stock}
                onChangeQuantity={setSelectedQuantity}
              />
              {/* Ejecutará la función desde cartSlice con dispatch */}
              <Pressable style={styles.buy} onPress={onAddCart}>
                <Text style={styles.buyText}>Agregar al Carrito</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
  },
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
  },
  image: {
    width: "100%",
    height: 400,
    marginVertical: 15,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 6,
  },
  descriptionTitle: {
    fontFamily: "Cinzel",
    fontSize: 24,
    color: "black",
    paddingVertical: 4,
  },
  descriptionText: {
    fontFamily: "Cinzel",
    fontSize: 16,
    color: "black",
    paddingVertical: 4,
  },
  price: {
    fontFamily: "Cinzel",
    fontSize: 25,
    color: "black",
    paddingVertical: 6,
  },
  descriptionTextPrice: {
    fontFamily: "Cinzel",
    fontSize: 15,
    color: "brown",
    paddingVertical: 6,
  },
  buy: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: colors.secondary,
  },
  buyText: {
    fontFamily: "Cinzel",
    fontSize: 22,
    color: "white",
  },
  volver: {
    height: "100%",
    fontSize: 20,
    backgroundColor: colors.back_green,
    color: "white",
    fontFamily: "Cinzel",
    textAlign: "center",
    padding: 10,
    marginTop: 40,
  },
});
