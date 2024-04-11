import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
import Constants from "expo-constants";
import StyledText from "../styledComponents/StyledText";


const Header = ({ title }) => {
  //useSelector --> REDUX

  return (
    <View style={styles.container}>
      <StyledText textCategory>{title}</StyledText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0, //Si es iOS, el paddig es 0. Si es android, usa el Constants
  },

  titleSection: {
    fontSize: 30,
    backgroundColor: colors.secondary,
    color: "white",
    textAlign: "center",
    padding: 10,
    fontFamily: "Cinzel",
  },

  logoutIcon: {
    right: 15,
    marginTop: 55,
    position: "absolute",
  },
});
