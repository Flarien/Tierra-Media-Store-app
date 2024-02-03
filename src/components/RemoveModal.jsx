import { StyleSheet, Text, View, Pressable, Modal } from "react-native";

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
        <Text style={styles.parrafo}>Quieres eliminar el producto?</Text>
        <Pressable onPress={() => setModalVisible(false)}>
          <Text style={{ fontSize: 40 }}>No</Text>
        </Pressable>
        <Pressable onPress={() => removeItem(itemSelected)}>
          <Text style={{ fontSize: 40 }}>Sí</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default RemoveModal;

const styles = StyleSheet.create({
  modalContainer: {
    height: 200,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
