import { StyleSheet, Text } from 'react-native'
import Card from './Card';

const CategoryItem = ({ category }) => {
  return (
    <Card>
      <Text style={styles.list}>{category}</Text>
    </Card>
  );
};

export default CategoryItem

const styles = StyleSheet.create({
  list: {
    margin: 10,
    padding: 5,
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 15,
    textAlign: "center",
  },
});
