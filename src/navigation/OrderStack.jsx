import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Orders from "../screens/Orders";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const  OrderStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        header: () => <Header title="Orders" />
      }}
    >
      <Stack.Screen name="Order" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrderStack;

const styles = StyleSheet.create({});
