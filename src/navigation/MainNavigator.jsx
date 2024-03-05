// import { useState } from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";

const MainNavigator = () => {
  //const [user, setUser] = useState(null);
  const user = useSelector((state) => state.authReducer.value.user);
  return(
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
    )
};

export default MainNavigator;
