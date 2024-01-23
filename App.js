import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hola, Coder!</Text>

      <Text style={styles.parrafo}>
        Proyecto de App (e-commerce) para curso de Desarrollo de Aplicaciones de
        CODERHOUSE. Comisión 61300.
      </Text>
      <Text style={styles.parrafo}>Alumna: Flavia S. Briglia</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
    padding: 20,
    textAlign: "center",
  },

  parrafo: {
    fontSize: 18,
    fontWeight: "400",
    margin: 20,
    textAlign: "center",
  },
});
