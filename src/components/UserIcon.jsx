import React from "react";
import { Image, View } from "react-native";
import { useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../global/colors";

const UserIcon = ({ focused }) => {
  const { user, profileImage } = useSelector(
    (state) => state.authReducer.value
  );

  return (
    <View>
      {profileImage ? (
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
      ) : (
        <FontAwesome
          name="user-circle"
          size={30}
          color={focused ? colors.back_green : colors.back_beige}
        />
      )}
    </View>
  );
};

export default UserIcon;

const styles = {
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
};
