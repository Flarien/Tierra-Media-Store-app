// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  useGetProfileImageQuery,
  useGetUserLocationQuery,
} from "../services/shopService";
import { NavigationContainer } from "@react-navigation/native";
import { setProfileImage, setUserLocation } from "../features/auth/authSlice";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";

const MainNavigator = () => {
  //const [user, setUser] = useState(null);
  const { user, localId } = useSelector((state) => state.authReducer.value);

  const { data, error, isLoading } = useGetProfileImageQuery(localId);
  const { data: location } = useGetUserLocationQuery(localId);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setProfileImage(data.image));
    }
    if (location) {
      dispatch(setUserLocation(location));
    }
  }, [data, location]);

  return (
    <NavigationContainer>
      {/* <TabNavigator /> */}
      {user ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;
