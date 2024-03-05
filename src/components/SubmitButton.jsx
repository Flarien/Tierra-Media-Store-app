import { Pressable, StyleSheet, Text } from "react-native";

const SubmitButton = ({onPress, title}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 8,
    width: "60%",
  },
  text: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});
