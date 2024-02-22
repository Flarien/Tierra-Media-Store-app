import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../global/colors";

const Counter = () => {
  const [inputToAdd, setInputToAdd] = useState(0);

  const count = 0;

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Pressable>
          <Text style={styles.button}>-</Text>
        </Pressable>
        <Text style={styles.countText}>{count}</Text>
        <Pressable>
          <Text style={styles.button}>+</Text>
        </Pressable>
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Cantidad a aumentar" style={styles.input} />
        <Pressable>
          <Text style={styles.buttonAdd}>Add</Text>
        </Pressable>
      </View>
      <Pressable>
        <Text style={styles.buttonReset}>Reset</Text>
      </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },

  countText: {
    fontFamily: "Cinzel",
    fontSize: 25,
    color: "black",
    paddingVertical: 4,
  },

  inputContainer: {
    width: "100%",
    minWidth: 200,
    margin: 20,
  },

  input: {
    fontFamily: "Cinzel",
    fontSize: 16,
    color: "gray",
    paddingVertical: 4,
    textAlign: "center",
  },

  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 20,
    borderRadius: 6,
    backgroundColor: colors.back_beige,
    shadowColor: "black",
    shadowOffset: {
      height: 3,
      width: 2,
    },
    elevation: 8,
    shadowOpacity: 1,
    shadowRadius: 1,
    fontFamily: "Cinzel",
  },

  buttonAdd: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
    width: 70,
    textAlign: "center",
    backgroundColor: colors.back_green,
    shadowColor: "black",
    color: "white",
    shadowOffset: {
      height: 3,
      width: 2,
    },
    elevation: 8,
    shadowOpacity: 1,
    shadowRadius: 1,
    fontFamily: "Cinzel",
    alignSelf: "center",
  },

  buttonReset: {
    paddingVertical: 8,
    marginBottom: 20,
    width: 70,
    textAlign: "center",
    borderRadius: 6,
    backgroundColor: "brown",
    shadowColor: "black",
    color: "white",
    shadowOffset: {
      height: 3,
      width: 2,
    },
    elevation: 8,
    shadowOpacity: 1,
    shadowRadius: 1,
    fontFamily: "Cinzel",
  },
});
