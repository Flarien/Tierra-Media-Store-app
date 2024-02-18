import { StyleSheet, View } from 'react-native'
import Header from '../components/Header';
import Categories from '../components/Categories';

const Home = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <Header title={"Tierra Media Store"} />
      <Categories navigation={navigation} />
    </View>
  );
};

export default Home

const styles = StyleSheet.create({});