import { FlatList, View } from "react-native";
import orders from "../data/orders.json";
import OrderItems from "../components/OrderItems";

const Orders = () => {
  return (
    <View>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderItems item={item} />}
        keyExtractor={(order) => order.id}
      />
    </View>
  );
};

export default Orders;
