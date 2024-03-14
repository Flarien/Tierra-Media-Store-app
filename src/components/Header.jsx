import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import { logout } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteSession } from "../db";

const Header = ({ title }) => {
  //useSelector --> REDUX
  const { localId, user } = useSelector((state) => state.authReducer.value);

  const dispatch = useDispatch();

  const onLogout = async () => {
    dispatch(logout());
    const deletedSession = await deleteSession({ localId });
    console.log(deletedSession);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleSection}>{title}</Text>
      {user ? (
        <Pressable style={styles.logoutIcon} onPress={onLogout}>
          <MaterialIcons name="logout" size={24} color={colors.back_green} />
        </Pressable>
      ) : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0, //Si es iOS, el paddig es 0. Si es android, usa el Constants
  },

  titleSection: {
    fontSize: 30,
    backgroundColor: colors.secondary,
    color: "white",
    textAlign: "center",
    padding: 10,
    fontFamily: "Cinzel",
  },

  logoutIcon: {
    right: 15,
    marginTop: 55,
    position: "absolute",
  },
});
