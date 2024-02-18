import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { colors } from '../global/colors'
import Constants from "expo-constants";

const Header = ({ title }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleSection}>{title}</Text>
    </SafeAreaView>
  );
};

export default Header

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
}); 