import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts.js";
import Navigator from "./src/navigation/Navigator.jsx";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return <Navigator />;
}
