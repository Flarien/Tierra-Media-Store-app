
import { useDispatch, useSelector } from "react-redux";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
import {
  increment,
  decrement,
  reset,
} from "../features/counter/counterSlice";

const Counter = ({ stock, onChangeQuantity }) => {

  const count = useSelector((state) => state.counterReducer.value);
  const dispatch = useDispatch();
  
  const decrementCount = () => {
    if (count > 1) {
      dispatch(decrement());
      onChangeQuantity(count - 1);
    }
  };

  const incrementCount = () => {
    if (count < stock) {
      dispatch(increment());
      onChangeQuantity(count + 1);
    }
  };

  const resetCount = () => {
    dispatch(reset());
    onChangeQuantity(1);
  };


  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Pressable onPress={decrementCount}>
          <Text style={styles.button}>-</Text>
        </Pressable>
        <Text style={styles.counterText}>{count}</Text>
        <Pressable onPress={incrementCount}>
          <Text style={styles.button}>+</Text>
        </Pressable>
      </View>
      <Pressable onPress={resetCount}>
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

  counterText: {
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
