import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { colors } from "../global/colors";
import AddButton from "../components/AddButton";

const MyProfile = () => {
  const [image, setImage] = useState(null);

  return (
    <View style={styles.container}>
      {image ? null : (
        <>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/6073/6073873.png",
            }}
            style={styles.image}
            resizeMode="cover"
          />
          <AddButton title="Agregar foto" /> 
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
    height: "100%"
  },
  image: {
    margin: 50,
    width: 200,
    height: 200,
  },
});
