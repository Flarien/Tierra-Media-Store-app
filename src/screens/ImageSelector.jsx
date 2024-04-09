import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePostProfileImageMutation } from "../services/shopService";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
import { setCameraImage, setProfileImage } from "../features/auth/authSlice";
import AddButton from "../components/AddButton";
import * as ImagePicker from "expo-image-picker";

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const { localId } = useSelector((state) => state.authReducer.value);
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
  const dispatch = useDispatch();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 4],
        base64: true,
        quality: 1,
      });
      
      
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
  };

  const requestGalleryPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Se requieren permisos para acceder a la galería de imágenes.");
    }
  };

  const pickImageFromGallery = async () => {
    await requestGalleryPermissions();

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      base64: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const confirmImage = () => {
    dispatch(setCameraImage(image));
    dispatch(setProfileImage(image));
    triggerSaveProfileImage({ localId, image });
    console.log(result);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <AddButton title="Tomar otra foto" onPress={pickImage} />
          <AddButton title="Confirmar foto" onPress={confirmImage} />
        </>
      ) : (
        <>
          <View style={styles.noPhotoContainer}>
            <Text>No hay foto para mostrar...</Text>
          </View>
          <AddButton title="Tomar una foto" onPress={pickImage} />
          <AddButton
            title="Seleccionar desde galería"
            onPress={pickImageFromGallery}
          />
        </>
      )}
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    backgroundColor: colors.back_beige,
    height: "100%",
  },
  image: {
    margin: 50,
    width: 200,
    height: 200,
  },
  noPhotoContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: colors.back_green,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
