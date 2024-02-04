import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { colors } from "../global/colors";

const RemoveModal = ({
  modalVisible,
  cartItems,
  setCartItems,
  setModalVisible,
  itemSelected,
}) => {
  const removeItem = (itemId) => {
    const filteredArray = cartItems.filter((item) => item.id !== itemId);
    setCartItems(filteredArray);
    setModalVisible(false);
  };

  return (
    <Modal animationType="slide" transparent visible={modalVisible}>
      <View style={styles.modalContainer}>
        <Text style={styles.subTitulo}>
          ¿Seguro que quieres eliminar este producto?
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Pressable onPress={() => removeItem(itemSelected)}>
            <Text style={styles.buttonSi}>Sí</Text>
          </Pressable>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text style={styles.buttonNo}>No</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default RemoveModal;

const styles = StyleSheet.create({
  modalContainer: {
    height: 200,
    backgroundColor: "#FFF7F1",
    borderRadius: 20,
    padding: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },

  subTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 20,
    textAlign: "center",
    color: colors.secondary,
  },

  buttonNo: {
    fontSize: 25,
    color: "red",
    marginVertical: 15,
    marginHorizontal: 25,
  },

  buttonSi: {
    fontSize: 25,
    color: "green",
    marginVertical: 15,
    marginHorizontal: 25,
  },
});
