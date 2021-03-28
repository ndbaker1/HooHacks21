import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { View } from '../components/Themed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'white' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 42 }}>Welcome</Text>
      </View>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Welcome to Food Finders!</Text>
      <Step number="1" text="Pick favorite ingredients from your fridge or pantry" />
      <Step number="2" text="Find out what dishes you can make with your ingredients" />
      <Step number="3" text="Start making Recipes available to you" />
      <Step number="4" text="Favorite and Save Recipes for the Future" />
    </View>
  );
}

function Step({ number, text }: any) {
  return (
    <View style={{ ...styles.container, flex: 1, flexDirection: 'row', width: 160 }}>
      <View style={{ width: 50, height: 50, borderRadius: 50, ...styles.content, backgroundColor: '#F2C069', marginRight: 20, elevation: 5 }}>
        <Text style={{ color: '#D48149', fontSize: 20, fontWeight: 'bold' }}> {number} </Text>
      </View>
      <Text> {text} </Text>
    </View >
  )
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
