import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts.js";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./src/store";
import MainNavigator from "./src/navigation/MainNavigator.jsx";
import {init} from "./src/db"

//ejecuto la función que inicia la db
init()
  .then(() => console.log("DB Inicializada"))
  .catch(err => {
    console.log("Inicializacion de DB fallida");
    console.log(err.message);
  })

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="light" />
        <MainNavigator />
      </SafeAreaView>
    </Provider>
  );
}
