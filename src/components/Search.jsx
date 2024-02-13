import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { colors } from "../global/colors";
import {AntDesign} from "@expo/vector-icons";

const Search = ({keyword, onSearch}) => {

  return (
    <View style={styles.containerRow}>
      <TextInput
        onChangeText={onSearch}
        value={keyword}
        style={styles.input}
        placeholder="Buscar producto"
      />
      <Pressable>
        <AntDesign name="search1" style={styles.icon} size={35} />
      </Pressable>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({

  containerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
    padding: 10,
    fontSize: 20,
  },

  icon: {
    color:colors.back_green,
    margin: 15,
  }
});
