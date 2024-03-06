import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Header from "../components/Header";
import Signup from "../screens/Signup";
import Login from "../screens/Login";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        header: () => <Header title="Bienvenido" />,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />

      
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
