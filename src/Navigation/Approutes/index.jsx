import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LanguageScreen from '../../Pages/Language';
import DifficultyScreen from '../../Pages/Difficult'


import WordRearrangement from '../../Components/WordRearragement'

import Questions from '../../Pages/Questions'


const Stack = createStackNavigator();

const OnboardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerShown: false,
      }}
      initialRouteName="LanguageScreen">
      <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
      <Stack.Screen name="DifficultyScreen" component={DifficultyScreen} />
      <Stack.Screen name="QuestionsStack" component={QuestionsStack}/>
    </Stack.Navigator>
  );
};


const QuestionsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerShown: false,
      }}>
      <Stack.Screen name="Questions" component={Questions} />
    </Stack.Navigator>
  );
}


export const Approutes = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="OnboardStack"
        screenOptions={{
          headerTitle: 'Vāṇītyā',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            color: '#FFFFFF',
          },
        }}>
        <Stack.Screen name="OnboardStack" component={OnboardStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
