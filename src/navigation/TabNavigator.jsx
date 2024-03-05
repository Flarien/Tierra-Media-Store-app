import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
import { Entypo } from "@expo/vector-icons";
import CartStack from "./CartStack";
import OrderStack from "./OrderStack";
import ShopStack from "./ShopStack";
import MyProfileStack from "./MyProfileStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
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
                  style={{
                    color: focused ? colors.back_green : colors.back_beige,
                  }}
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
                  style={{
                    color: focused ? colors.back_green : colors.back_beige,
                  }}
                >
                  Shop
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderStack}
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
                  name="list"
                  size={30}
                  color={focused ? colors.back_green : colors.back_beige}
                />
                <Text
                  style={{
                    color: focused ? colors.back_green : colors.back_beige,
                  }}
                >
                  Orders
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="My Profile"
        component={MyProfileStack}
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
                  name="user"
                  size={30}
                  color={focused ? colors.back_green : colors.back_beige}
                />
                <Text
                  style={{
                    color: focused ? colors.back_green : colors.back_beige,
                  }}
                >
                  Perfil
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.secondary,
    height: 80,
  },
});
