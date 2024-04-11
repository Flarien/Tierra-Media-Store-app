import { StyleSheet, View } from 'react-native'
import { colors } from '../global/colors';

const Card = ({children}) => {
  return (
    <View style={styles.cardContainer}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.back_green,
    width: "95%",
    height: 300,
    shadowColor: "black",
    shadowOffset: {
      height: 3,
      width: 2,
    },
    elevation: 8,
    shadowOpacity: 1,
    shadowRadius: 1,
    margin: 10
  },
});