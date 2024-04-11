import { useSelector } from "react-redux";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { colors } from "../global/colors";
import AddButton from "../components/AddButton";
import { logout } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { deleteSession } from "../db";
import { MaterialIcons } from "@expo/vector-icons";
import StyledText from "../styledComponents/StyledText"

const MyProfile = ({ navigation }) => {

  const { profileImage, imageCamera } = useSelector(
    (state) => state.authReducer.value
  );
  const { localId, user } = useSelector((state) => state.authReducer.value);


  const dispatch = useDispatch();

  const onLogout = async () => {
    dispatch(logout());
    const deletedSession = await deleteSession({ localId });
    console.log(deletedSession);
  };

  return (
      <View style={styles.container}>
        {profileImage || imageCamera ? (
          <>
            <Image
              source={{ uri: profileImage || imageCamera }}
              style={styles.image}
              resizeMode="cover"
            />
            <AddButton
              title="Cambiar foto"
              onPress={() => navigation.navigate("Image Selector")}
            />
            <AddButton
              title="Agregar domicilio"
              onPress={() => navigation.navigate("Location Selector")}
            />
          </>
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
        {user ? (
          <Pressable style={styles.logoutIcon} onPress={onLogout}>
            <StyledText green>Cerrar sesión</StyledText>
            <MaterialIcons name="logout" size={30} color={colors.back_green} />
          </Pressable>
        ) : null}
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
  logoutIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
  },
});
