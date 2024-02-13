import { StyleSheet, View } from 'react-native'
import Header from '../components/Header';
import Categories from '../components/Categories';

const Home = ({ setCategorySelected }) => {
  return (
    <View>
      <Header title={"Categorías"} />
      <Categories setCategorySelected={setCategorySelected} />
    </View>
  );
};

export default Home

const styles = StyleSheet.create({})