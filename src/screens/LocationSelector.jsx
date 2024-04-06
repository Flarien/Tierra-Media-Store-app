import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { useDispatch, useSelector } from "react-redux";
import { usePostUserLocationMutation } from "../services/shopService";
import { StyleSheet, Text, View } from "react-native";
import { setUserLocation } from "../features/auth/authSlice";
import { colors } from "../global/colors";
import MapPreview from "../components/MapPreview";
import AddButton from "../components/AddButton";

const LocationSelector = ({ navigation }) => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [error, setError] = useState(null);
  const [address, setAddress] = useState(null);
  const { localId } = useSelector((state) => state.authReducer.value);
  const [triggerPostAddress, result] = usePostUserLocationMutation();
  console.log(result);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("El permiso de acceso a ubicación fue denegado");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (location.latitude) {
          const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleAPI.mapStatic}`;
          const response = await fetch(url_reverse_geocode);
          const data = await response.json();
          setAddress(data.results[0].formatted_adddress);
        }
      } catch (error) {
        setError(setError.message);
      }
    })();
  }, [location]);

  const onConfirmAddress = () => {
    console.log(localId, location, address);
    const locationFormatted = {
      latitude: location.latitude,
      longitude: location.longitude,
      address: address,
    };
    dispatch(setUserLocation(locationFormatted));
    triggerPostAddress({ localId, location: locationFormatted });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Mi domicilio</Text>
      {/* <FlatList></FlatList> con directions */}
      {location.latitude ? (
        <View>
          <Text style={styles.descriptionText}>
            Latitud: {location.latitude}
          </Text>
          <Text style={styles.descriptionText}>
            Longitud: {location.longitude}
          </Text>
          <MapPreview location={location} />
          {/* Revisar */}
          <Text style={styles.descriptionText}>{address}</Text>
          <AddButton title={"Confirmar dirección"} onPress={onConfirmAddress} />
        </View>
      ) : (
        <View style={styles.noLocationContainer}>
          <Text>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    backgroundColor: colors.back_beige,
    paddingBottom: 130,
    height: "100%",
  },

  texto: {
    fontFamily: "Cinzel",
    fontSize: 28,
    color: "black",
    paddingVertical: 4,
  },

  descriptionText: {
    fontFamily: "Cinzel",
    fontSize: 20,
    color: "black",
    paddingVertical: 4,
  },

  noLocationContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: colors.back_green,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
