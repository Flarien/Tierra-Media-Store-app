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
import logo from "./assets/favicon.png";
import Constants from "expo-constants";
import RemoveModal from "./src/components/RemoveModal";

const DATA = [
  {
    name: "Remeras",
    id: 1,
  },
  {
    name: "Pantalón",
    id: 2,
  },
  {
    name: "Gorra",
    id: 3,
  },
];

export default function App() {
  // useState y useEffect hooks para controlar el estado de la aplicación y el ciclo de vida de un componente
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [cartItems, setCartItems] = useState([]); //Modal: inicia siempre en ARRAY | Este estado modifica el carrito
  const [modalVisible, setModalVisible] = useState(false); //Su función es cambiar entre muotrar o no el modal
  const [itemSelected, setItemSelected] = useState(null);

  const handleAddCounter = () => setCounter(counter + 1);
  const handleInputChange = (value) => setInputValue(value); //Cambia el valor ingresado al TextInput: onChangeText

  const handleModal = (id) => {
    setModalVisible(true);
    setItemSelected(id);
  };

  const addItem = () => {
    const newItem = {
      name: inputValue,
      id: new Date().getTime(), //Genera un id casi imposible de que se repita, gracias al metodo Date, que incluye milisegundos
    };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      {/* Llamamos al modal para eliminar el producto y le pasamos por props toda la data que necesita */}
      <RemoveModal
        modalVisible={modalVisible}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setModalVisible={setModalVisible}
        itemSelected={itemSelected}
      />
      <View style={styles.containerRow}>
        <Image style={styles.image} source={logo} />
        <Text style={styles.titulo}>CARRITO</Text>
      </View>

      <Image
        style={styles.image}
        source={{
          uri: "https://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532320cblq3.png",
        }}
      />

      <View style={styles.containerRow}>
        <TextInput
          onChangeText={handleInputChange}
          value={inputValue}
          style={styles.input}
          placeholder="Ingrese un producto"
        />
        <Pressable onPress={addItem}>
          <Text style={{ fontSize: 40 }}>+</Text>
        </Pressable>
      </View>

      {/* <View style={styles.parrafo}> 
        {DATA.map((item) => (
          <View key={item.id}>
            <Text style={styles.parrafo}>{item.name}</Text>
          </View>
        ))}
        ------->Esto no es scrolleable
      </View> */}

      <View style={styles.lista}>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View style={styles.containerRow}>
              <Text style={styles.parrafo}>{item.name}</Text>
              <Pressable onPress={() => handleModal(item.id)}>
                <Text style={{ fontSize: 20 }}>🚮</Text>
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
    backgroundColor: "#EBE8E5",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight, //evita que se superponga el contenido de la App con la barra de estado del dispositivo
  },

  containerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 50,
    height: 50,
    margin: 20,
  },

  input: {
    width: 250,
    margin: 20,
    padding: 10,
    borderColor: "#3498db",
    backgroundColor: "#ebebeb",
    borderWidth: 2,
  },

  titulo: {
    fontSize: 34,
    fontWeight: "bold",
    margin: 20,
    padding: 20,
    textAlign: "center",
  },

  parrafo: {
    fontSize: 18,
    fontWeight: "400",
    margin: 15,
    textAlign: "center",
  },

  lista: {
    flex: 1, //importante para visualizar el scrolleable
    fontSize: 18,
    fontWeight: "400",
    margin: 15,
    textAlign: "center",
  },

  button: {
    backgroundColor: "#2ecc71",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
