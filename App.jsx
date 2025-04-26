//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FormikYup from './src/components/Formik';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackNavigator from './src/navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';

// create a component
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default App;
