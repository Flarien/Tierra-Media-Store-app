import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {usePostProfileImageMutation} from "../services/shopService"
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
import { setCameraImage } from "../features/auth/authSlice";
import AddButton from "../components/AddButton";
import * as ImagePicker from "expo-image-picker"
import { log } from "console";

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const {localId} = useSelector(state => state.authReducer.value)
  const [triggersaveProfileImage, result] = usePostProfileImageMutation();

  const dispatch = useDispatch();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
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
        allaowsEditing: true,
        aspect: [9,16],
        base64: true,
        quality: 0.2,      
      });
      if (!result.canceled) {
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
      }
    }
  };

  const confirmImage = () => {
    dispatch(setCameraImage(image))
    triggersaveProfileImage({image, localId})
    console.log(result);
    navigation.goBack()
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
