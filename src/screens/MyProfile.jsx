//import { useState } from "react";
import { useSelector } from "react-redux";
import { Image, StyleSheet, View } from "react-native";
import { colors } from "../global/colors";
import AddButton from "../components/AddButton";

const MyProfile = ({ navigation }) => {
  //const [image, setImage] = useState(null);

  ///////---------------->INVESTIGAR ImagePicker.launchImageLibraryAsync(options) Para la opción de agregar imagen desde la galería

  // const image = useSelector((state) => state.authReducer.value.imageCamera);

  // const launchCamera = async () => {
  //   navigation.navigate("Image Selector");
  // };

  // const launchLocation = async () => {
  //   navigation.navigate("Location Selector");
  // };
  const { profileImage, imageCamera } = useSelector(
    (state) => state.authReducer.value
  );

  return (
    <View style={styles.container}>
      {profileImage || imageCamera ? (
        <Image
          source={{ uri: profileImage || imageCamera }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/6073/6073873.png",
            }}
            style={styles.image}
            resizeMode="cover"
          />
          <AddButton
            title="Agregar foto"
            onPress={() => navigation.navigate("Image Selector")}
          />
          <AddButton
            title="Agregar domicilio"
            onPress={() => navigation.navigate("Location Selector")}
          />
        </>
      )}
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: colors.back_beige,
    height: "100%",
  },
  image: {
    margin: 50,
    width: 200,
    height: 200,
  },
});
