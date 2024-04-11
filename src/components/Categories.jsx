//import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useGetCategoriesQuery } from "../services/shopService";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import CategoryItem from "./CategoryItem";
import { colors } from "../global/colors";
import StyledView from "../styledComponents/StyledView";
import StyledText from "../styledComponents/StyledText";

const Categories = ({ navigation }) => {
  //const categories = useSelector(state => state.shopReducer.value.categories)
  const [isLoading, setIsLoading] = useState(true);
  const { data, error } = useGetCategoriesQuery();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <StyledView center>
        <ActivityIndicator size={100} color={colors.back_green} />
      </StyledView>
    );
  }

  if (error) {
    return (
      <StyledView center>
        <StyledText red>Error al cargar</StyledText>
      </StyledView>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CategoryItem navigation={navigation} category={item} />
        )}
        keyExtractor={(category) => category}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  titleCategories: {
    fontSize: 30,
    color: "brown",
    marginTop: 20,
    fontFamily: "Cinzel",
    textAlign: "center",
  },
});
