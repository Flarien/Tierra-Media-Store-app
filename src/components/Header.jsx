import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'

const Header = ({ title }) => {
  return (
    <View>
      <Text style={styles.titleSection}>{title}</Text>
    </View>
  );
};

export default Header

const styles = StyleSheet.create({
  titleSection: {
    fontSize: 30,
    backgroundColor: colors.secondary,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    fontFamily: "Cinzel",
  },
}); 