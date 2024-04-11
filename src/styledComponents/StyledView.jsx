import { StyleSheet, View } from "react-native";
import { colors } from "../global/colors";

const styles = StyleSheet.create({
  general: {
    padding: 10,
    backgroundColor: colors.back_beige,
    flexGrow: 1,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  bgGreen:{
    backgroundColor: colors.back_green
  },
  row: {
    flexDirection: "row",
  },
  flex: {
    flex: 1,
    padding: 20,
  },
});

export default function StyledView({ children, center, bgGreen, row, flex, ...props }) {
  const viewStyles = [
    styles.general,
    center && styles.center,
    bgGreen && styles.bgGreen,
    row && styles.row,
    flex && styles.flex,
  ];
  return <View style={[viewStyles, { ...props }]}>{children}</View>;
}
