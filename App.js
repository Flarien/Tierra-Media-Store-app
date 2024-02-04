import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import Constants from "expo-constants";
import RemoveModal from "./src/components/RemoveModal";
import { colors } from "./src/global/colors.js";
import { del } from "./assets/delete.svg";

const DATA = [
  {
    name: "Producto 1",
    id: 1,
  },
  {
    name: "Producto 2",
    id: 2,
  },
  {
    name: "Producto 3",
    id: 3,
  },
];

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [cartItems, setCartItems] = useState([]); //Modifica el carrito
  const [modalVisible, setModalVisible] = useState(false); //Cambia entre mostrar o no el remove modal
  const [itemSelected, setItemSelected] = useState(null); //

  const handleInputChange = (value) => setInputValue(value); //Cambia el valor ingresado al TextInput: onChangeText

  const handleModal = (id) => {
    setModalVisible(true);
    setItemSelected(id);
  };

  const addItem = () => {
    const newItem = {
      name: inputValue,
      id: new Date().getTime(),
    };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      {/* Modal para eliminar el producto, con props con la data que necesita */}
      <RemoveModal
        modalVisible={modalVisible}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setModalVisible={setModalVisible}
        itemSelected={itemSelected}
      />

      {/* Título y imagen del carrito */}
      <View style={styles.containerRow}>
        <Image
          style={styles.image}
          source={{
            uri: "https://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532320cblq3.png",
          }}
        />
        <Text style={styles.titulo}>CARRITO</Text>
      </View>

      {/* Input para agregar productos y botón de agregar */}
      <View style={styles.containerRow}>
        <TextInput
          onChangeText={handleInputChange}
          value={inputValue}
          style={styles.input}
          placeholder="Ingrese un producto"
        />
        <Pressable onPress={addItem}>
          <Text style={styles.button}>+</Text>
        </Pressable>
      </View>

      {/* Lista optimizada */}
      <View style={styles.lista}>
        <Text style={styles.subTitulo}>Lista de Productos</Text>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View style={styles.containerRow}>
              <Text style={styles.itemList}>{item.name}</Text>

              <Pressable onPress={() => handleModal(item.id)}>
                <Image
                  style={styles.delete}
                  source={{
                    uri: "https://img.icons8.com/pulsar-line/48/delete-forever.png",
                  }}
                />
              </Pressable>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.back_beige,
    paddingTop: Constants.statusBarHeight,
  },

  containerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 45,
    height: 45,
  },

  input: {
    width: 300,
    margin: 20,
    padding: 10,
    borderColor: colors.back_green,
    backgroundColor: "#ebebeb",
    borderWidth: 2,
  },

  button: {
    backgroundColor: colors.back_green,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#ebebeb",
  },

  titulo: {
    fontSize: 34,
    fontWeight: "bold",
    margin: 20,
    padding: 20,
    textAlign: "center",
    color: colors.primary,
  },

  subTitulo: {
    fontSize: 26,
    fontWeight: "bold",
    margin: 20,
    textAlign: "center",
    color: colors.secondary,
  },

  itemList: {
    fontSize: 18,
    fontWeight: "400",
    margin: 15,
    textAlign: "center",
    backgroundColor: "#ebebeb",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 250,
  },

  lista: {
    flex: 1,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },

  delete: {
    width: 35,
    height: 35,
  },
});
