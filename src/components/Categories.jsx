//import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useGetCategoriesQuery } from "../services/shopService";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CategoryItem from "./CategoryItem";

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
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error al cargar</Text>
      </View>
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
