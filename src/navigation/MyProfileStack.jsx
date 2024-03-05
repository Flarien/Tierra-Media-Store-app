import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from "../components/Header";

import MyProfile from '../screens/MyProfile';

const Stack = createNativeStackNavigator()

const MyProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyProfileScreen"
      screenOptions={{
        header: () => <Header title="Perfil" />,
      }}
    >
      <Stack.Screen name="MyProfileScreen" component={MyProfile} />
    </Stack.Navigator>
  );
}

export default MyProfileStack
