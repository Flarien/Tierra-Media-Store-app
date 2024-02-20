import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
import { Entypo } from "@expo/vector-icons";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tab.Screen
          name="ShopTab"
          component={ShopStack}
          options={{
            tabBarIcon: ({ focused }) => {
              //focused hace referencia a la pestaña activa
              return (
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <Entypo
                    name="shop"
                    size={30}
                    color={focused ? colors.back_green : colors.back_beige}
                  />
                  <Text
                    style={{ color: focused ? colors.back_green : colors.back_beige }}
                  >
                    Shop
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="CartTab"
          component={CartStack}
          options={{
            tabBarIcon: ({ focused }) => {
              //focused hace referencia a la pestaña activa
              return (
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <Entypo
                    name="shopping-cart"
                    size={30}
                    color={focused ? colors.back_green : colors.back_beige}
                  />
                  <Text
                    style={{ color: focused ? colors.back_green : colors.back_beige }}
                  >
                    Shop
                  </Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.secondary,
    height: 80,
  },
});
