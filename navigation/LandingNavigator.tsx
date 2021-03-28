import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';
import GettingStartedScreen from '../screens/GettingStartedScreen';

const LandingStack = createStackNavigator()

export default function LandingNavigator() {
  const colorScheme = useColorScheme();

  return (
    <LandingStack.Navigator screenOptions={{ headerShown: false }}>
      <LandingStack.Screen name="Landing" component={GettingStartedNavigator}/>
    </LandingStack.Navigator>
  );
}

const GettingStartedStack = createStackNavigator();

function GettingStartedNavigator() {
  return (
    <GettingStartedStack.Navigator>
      <GettingStartedStack.Screen
        name="GettingStarted"
        component={GettingStartedScreen}
        options={{ headerTitle: 'Welcome' }}
      />
    </GettingStartedStack.Navigator>
  );
}