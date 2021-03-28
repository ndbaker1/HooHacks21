import * as React from 'react';
import { StyleSheet } from 'react-native';
import CameraLoader from '../components/CameraLoader';
import { View } from '../components/Themed';

export default function HomeScreen() {
  return (
    <View style={styles.container}></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
