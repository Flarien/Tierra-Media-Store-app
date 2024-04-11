import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../services/shopService.js";
import { ActivityIndicator, FlatList} from "react-native";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search.jsx";
import { colors } from "../global/colors.js";
import StyledView from "../styledComponents/StyledView.jsx";
import StyledText from "../styledComponents/StyledText.jsx";

const ItemListCategories = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const category = useSelector(
    (state) => state.shopReducer.value.categorySelected
  );

  const { data: productsFilteredByCategory, error } =
    useGetProductsByCategoryQuery(category);

  console.log(isLoading, error);
  //const {category} = route.params //recibe el parametro category desde CategoryItems (segundo parametro dentro de navigation.navigate )

  useEffect(() => {
    if (productsFilteredByCategory) {
      const productsRaw = Object.values(productsFilteredByCategory); // productsRaw devuelve un array con los valores de las propiedades de un objeto (los productos contenidos en productsFilteredByCategory)
      const productsFiltered = productsRaw.filter(
        (product) => product.title.includes(keyword) // Filtra los productos por el keyword ingresado

      );
      setProducts(productsFiltered);
    }
  }, [productsFilteredByCategory, keyword]);

  useEffect(() => {
    setIsLoading(false); // Se establece inmediatamente
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
    <StyledView>
      <Search onSearch={setKeyword} keyword={keyword} />
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem product={item} navigation={navigation} />
        )} 
        keyExtractor={(item) => item.id}
      />
    </StyledView>
  );
};

export default ItemListCategories;
