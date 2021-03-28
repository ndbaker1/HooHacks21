import * as React from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Linking,
  ImageSourcePropType
} from 'react-native';
import { Chip } from 'react-native-paper';
import { Text, View } from '../components/Themed';
import BoxComponent from '../components/BoxComponent';
import { Recipe } from "../APIs/spoonacular";
import { ingredients, recipes } from "../APIs/data";

export default function RecipiesScreen({ navigation, route }: any) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <Text style={{ ...styles.title, color: 'black', marginTop: 20 }}>
          Ingredients
        </Text>
        <BoxComponent>
          <Text style={styles.bttntext}>Here's what we found:</Text>
        </BoxComponent>
        <View style={{ ...styles.containerSpace, backgroundColor: "#fff" }}>
          {ingredients.map((i: any) => <Chip icon="information"> {i} </Chip>)}
        </View>
        <Text style={{ ...styles.title, color: "black" }}>
          Recipes
        </Text>
        {recipes.map((i: Recipe) =>
          <TouchableOpacity onPress={() => { Linking.openURL('https://cooking.nytimes.com/recipes/8663-spaghetti-with-fresh-tomato-and-basil-sauce') }}>
            <ImageBackground source={require('../images/spaghetti-puttanesca.png')} style={styles.imageContainer} imageStyle={{ borderRadius: 15 }}>
              <View style={styles.overlay} />
              <Text style={{ position: 'absolute', marginTop: 87, marginLeft: 15, fontSize: 16 }}>{i.title}</Text>
              <Text style={{ position: 'absolute', marginTop: 111, marginLeft: 18, fontSize: 12 }}>Prep Time: 40 minutes</Text>
            </ImageBackground>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  containerSpace: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
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