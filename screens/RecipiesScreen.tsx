import * as React from 'react';
import {
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Linking
} from 'react-native';

import { Text, View } from '../components/Themed';
import BoxComponent from '../components/BoxComponent';

const Separator = () => (
  <View style={styles.separator} />
);

export default function RecipiesScreen() {


  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* <Text style={styles.title}>Tab Two</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
        <Text style={styles.title}>
          Ingredients
        </Text>
        <Button
          title="Upload Image"
          color="#C6CE78"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        {/* <View style={styles.containerSpace}>
          <View style={styles.button} />
          <View style={styles.button} />
        </View> */}
        <BoxComponent>
          <Text style={styles.bttntext}>Here's what we found:</Text>
        </BoxComponent>
        <View style={styles.containerSpace}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.bttntext}>Hello</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.bttntext}>World</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>
          Recipes
        </Text>
        <TouchableOpacity onPress={() => { Linking.openURL('https://cooking.nytimes.com/recipes/8663-spaghetti-with-fresh-tomato-and-basil-sauce') }}>
          <ImageBackground source={require('../images/Tomato-Pasta.png')} style={styles.imageContainer} imageStyle={{ borderRadius: 15 }}>
            <View style={styles.overlay} />
            <Text style={{ position: 'absolute', marginTop: 87, marginLeft: 15, fontSize: 16 }}>Lauren's massive brain</Text>
            <Text style={{ position: 'absolute', marginTop: 111, marginLeft: 18, fontSize: 12 }}>Prep Time: 40 minutes</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { Linking.openURL('https://www.epicurious.com/recipes/food/views/pasta-with-15-minute-burst-cherry-tomato-sauce-56390060') }}>
          <ImageBackground source={require('../images/more-pasta.png')} style={styles.imageContainer} imageStyle={{ borderRadius: 15 }}>
            <View style={styles.overlay} />
            <Text style={{ position: 'absolute', marginTop: 87, marginLeft: 15, fontSize: 16 }}>Kendra big brained</Text>
            <Text style={{ position: 'absolute', marginTop: 111, marginLeft: 18, fontSize: 12 }}>Prep Time: 40 minutes</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { Linking.openURL('https://www.google.com/imgres?imgurl=https%3A%2F%2Fflockler.com%2Fthumbs%2Fsites%2F192%2Fclassic_tomato_spaghetti_21645_s600x600_c854x499_l0x420.png&imgrefurl=https%3A%2F%2Fthehappyfoodie.co.uk%2Frecipes%2Fclassic-tomato-spaghetti&tbnid=gLXoY69MbwCpmM&vet=12ahUKEwjbo7_ZgtLvAhWXbqwKHfgJDSYQMygBegUIARDnAQ..i&docid=1z1qPEsNiHF_fM&w=600&h=600&q=tomato%20pasta%20spaghetti&safe=strict&ved=2ahUKEwjbo7_ZgtLvAhWXbqwKHfgJDSYQMygBegUIARDnAQ') }}>
          <ImageBackground source={require('../images/more-pasta.png')} style={styles.imageContainer} imageStyle={{ borderRadius: 15 }}>
            <View style={styles.overlay} />
            <Text style={{ position: 'absolute', marginTop: 87, marginLeft: 15, fontSize: 16 }}>nick&raghav's sauteed snails</Text>
            <Text style={{ position: 'absolute', marginTop: 111, marginLeft: 18, fontSize: 12 }}>Prep Time: 40 minutes</Text>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSpace: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageContainer: {
    width: 323,
    height: 135,
    paddingTop: 77,
    marginBottom: 23,
  },
  overlay: {
    width: 323,
    height: 58,
    borderRadius: 15,
    backgroundColor: 'rgba(212, 129, 73, 0.9)',
  },
  button: {
    backgroundColor: '#FFCDB0',
    padding: 5,
    width: '40%',
    height: 25,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    //fontFamily: 'Montserrat_Bold', 
    marginBottom: 20,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  scrollView: {
    //backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  borderClass: {
    width: 323,
    height: 135,
    borderWidth: 1,
    //borderColor: '#F44336',
    borderRadius: 15
  },
  bttntext: {
    fontSize: 15,
    color: '#DF7130',
    textAlign: 'center',
  },
});