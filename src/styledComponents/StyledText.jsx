import { Text, StyleSheet } from "react-native";
import { colors } from "../global/colors";

const styles = StyleSheet.create({
  general: {
    margin: 10,
    padding: 5,
    fontSize: 22,
    textAlign: "center",
    fontFamily: "Cinzel",
    color: "white",
  },
  green: {
    color: colors.back_green,
  },
  red: {
    color: colors.error,
  },
  dark:{
    color: colors.primary
  },
  title: {
    fontSize: 35,
    marginBottom: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    textAlign: "left",
  },
  textCategory: {
    fontFamily: "Aniron",
    fontSize: 30,
  },
});

export default function StyledText({
  children,
  green,
  red,
  dark,
  title,
  text,
  textCategory,
  ...props
}) {
  const textStyles = [
    styles.general,
    green && styles.green,
    red && styles.red,
    dark && styles.dark,
    title && styles.title,
    text && styles.text,
    textCategory && styles.textCategory,
  ];
  return <Text style={[textStyles, { ...props }]}>{children}</Text>;
}
