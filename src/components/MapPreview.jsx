import { StyleSheet, Image, View } from "react-native";
import { googleAPI } from "../firebase/googleAPI";
import { colors } from "../global/colors";

const MapPreview = ({ location }) => {
  const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${location.latitude},${location.longitude}&markers=color:green%7Clabel:G%7C${location.latitude},${location.longitude}&markers=color:red%7Clabel:C%7C${location.latitude},${location.longitude}&key=${googleAPI.mapStatic}`;
  

  return (
    <View style={styles.mapPreview}>
      <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />
    </View>
  );
};

export default MapPreview;

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: "center",
    alignItems: "center",
  },

  mapImage: {
    width: 330,
    height: 330,
    borderRadius: 200,
    borderWidth: 4,
    borderColor: colors.back_green,
    padding: 10,
  },
});
