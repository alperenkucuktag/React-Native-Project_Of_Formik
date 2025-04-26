import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FormikYup from '../components/Formik';
import UserPage from '../components/UserPage';

function StackNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={FormikYup} />
      <Stack.Screen name="UserPage" component={UserPage} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
