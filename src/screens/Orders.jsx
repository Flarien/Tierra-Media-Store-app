// import { StyleSheet, View } from 'react-native'
// import OrderItem from '../components/OrderItems';


// const Orders = () => {

//   return (
//     <View style={styles.container}>
//       <OrderItem />
//     </View>
//   );
// }

// export default Orders

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// Orders.js
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import OrderItems from '../components/OrderItems';

const Orders = ({ navigation }) => {
    const orders = [
        // Aquí deberías tener la lista de órdenes obtenida de la base de datos o de algún otro lugar
    ];

    const handleOrderDetail = (selectedOrder) => {
        navigation.navigate('OrdersDetail', { selectedOrder });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={orders}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <OrderItems
                        item={item}
                        onPress={() => handleOrderDetail(item)}
                    />
                )}
            />
        </View>
    );
};

export default Orders;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

