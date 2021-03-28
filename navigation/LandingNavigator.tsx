import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import useColorScheme from '../hooks/useColorScheme';
import GettingStartedScreen from '../screens/GettingStartedScreen';

const LandingStack = createStackNavigator()

export default function LandingNavigator() {
  const colorScheme = useColorScheme();

  return (
    <LandingStack.Navigator screenOptions={{ headerShown: false }}>
      <LandingStack.Screen name="Landing" component={GettingStartedNavigator} />
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