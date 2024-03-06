// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useGetProfileImageQuery } from "../services/shopService";
import { NavigationContainer } from "@react-navigation/native";
import { setProfileImage } from "../features/auth/authSlice";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";

const MainNavigator = () => {
  //const [user, setUser] = useState(null);
  const {user, localId} = useSelector((state) => state.authReducer.value);
  const dispatch = useDispatch()
  const {data, error, isLoading} = useGetProfileImageQuery(localId)

  useEffect(()=> {
    if (data){
      dispatch(setProfileImage(data.image))
    }
  }, [data])

  return(
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
    )
};

export default MainNavigator;
