import { View } from 'react-native';
import { colors } from '../global/colors';
import Categories from '../components/Categories';

const Home = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.back_beige }}>
      <Categories navigation={navigation} />
    </View>
  );
};

export default Home
