import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  useGetProfileImageQuery,
  useGetUserLocationQuery,
} from "../services/shopService";
import { NavigationContainer } from "@react-navigation/native";
import {
  setProfileImage,
  setUser,
  setUserLocation,
} from "../features/auth/authSlice";
import { ActivityIndicator, View } from "react-native";
import { fetchSession } from "../db";
import Toast from "react-native-toast-message";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";

const MainNavigator = () => {
  const { user, localId } = useSelector((state) => state.authReducer.value);
  const { data, error, isLoading } = useGetProfileImageQuery(localId);
  const { data: location } = useGetUserLocationQuery(localId);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const session = await fetchSession();
        if (session?.rows.length) {
          const user = session.rows._array[0];
          dispatch(setUser(user));
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(setProfileImage(data.image));
    }
    if (location) {
      dispatch(setUserLocation(location));
    }
  }, [data, location]);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error al cargar</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthStack />}
      <Toast />
    </NavigationContainer>
  );
};

export default MainNavigator;
