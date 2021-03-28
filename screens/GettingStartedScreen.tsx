import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import CameraLoader from '../components/CameraLoader';

export default function GettingStartedScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('App')} title="Get Started" />
    </View>
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
