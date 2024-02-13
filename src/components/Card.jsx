import { StyleSheet, View } from 'react-native'

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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      height: 3,
      width: 2,
    },
    elevation: 8,
    shadowOpacity: 1,
    shadowRadius: 1,
    margin: 8,
  },
});