import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header';

const Home = () => {
  return (
    <View>
      <Header />
      <Text>Lista de Categorías</Text>
    </View>
  );
}

export default Home

const styles = StyleSheet.create({})