import * as React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function GettingStartedScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={{ fontSize: 42, fontWeight: 'bold' }}> Food Finders </Text>
        <View style={{ height: 20 }} />
        <Text> Scan it in. </Text>
        <Text> Skip the bin. </Text>
        <Text> Cooking is a win. </Text>
        <View style={{ height: 50 }} />
        <TouchableOpacity
          onPress={() => navigation.navigate('App')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 200,
            height: 100,
            borderRadius: 60,
            backgroundColor: '#C6CE78',
            elevation: 5, // Android
            flexDirection: 'row',
          }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Get Started </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5E9CE',
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
