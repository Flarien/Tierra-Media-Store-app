// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  useGetProfileImageQuery,
  useGetUserLocationQuery,
} from "../services/shopService";
import { NavigationContainer } from "@react-navigation/native";
import { setProfileImage, setUser, setUserLocation } from "../features/auth/authSlice";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";
import { fetchSession } from "../db";

const MainNavigator = () => {
  //const [user, setUser] = useState(null);
  const { user, localId } = useSelector((state) => state.authReducer.value);
  const { data, error, isLoading } = useGetProfileImageQuery(localId);
  const { data: location } = useGetUserLocationQuery(localId);

  const dispatch = useDispatch();

  useEffect(()=> {
    //Esta funcion se autoejecuta
    (async () => {
      try {
        const session = await fetchSession()
        if (session?.rows.lenght){
          const user = session.rows._array[0]
          dispatch(setUser(user))
        }
      } catch (error){
        console.log(error.message);
      }
    })()
  },[])

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
