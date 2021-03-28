import React, { useState, useEffect, createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, BackHandler, Button } from 'react-native';
import { Camera } from 'expo-camera';
import { getImageIngredients } from '../APIs/logMeals';
import { getRecipes } from '../APIs/spoonacular';
import { ingredients, recipes } from '../APIs/data';

export default function CameraLoader({ navigation }: any) {
  const cameraRef = createRef<Camera>()
  const getCamera = () => cameraRef.current

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [cameraActive, setCameraActive] = useState(false);

  useEffect(() => {
    const backAction = () => {
      if (cameraActive) Alert.alert('Close Camera', 'Are you sure you want to go back?', [
        { text: 'NO', onPress: () => null, style: 'cancel' },
        { text: 'YES', onPress: () => setCameraActive(false) },
      ])
      else BackHandler.exitApp()
      return true;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  });

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) return <View />
  if (hasPermission === false) return <Text>No access to camera</Text>

  async function takePicture() {
    const photo = await getCamera()?.takePictureAsync({ base64: true, quality: 0.1 })
    if (photo?.base64)
      getImageIngredients(photo.base64)
        .then(ingredientsRes => {
          getRecipes(ingredientsRes)
            .then(recipesRes => {
              setCameraActive(false)
              recipesRes.forEach(a => recipes.push(a))
              ingredientsRes.forEach(a => ingredients.push(a))
              setTimeout(() => navigation.navigate('Recipes'), 500)
            })
        })
  }

  return (
    <View style={styles.container}>
      {
        cameraActive ? (
          <Camera style={styles.container} type={Camera.Constants.Type.back} ref={cameraRef}>
            <View style={styles.view}>
              <TouchableOpacity
                onPress={() => {
                  takePicture()
                }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 60,
                  elevation: 10,
                  marginTop: 'auto',
                  marginBottom: 20,
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <Text style={{ fontSize: 22 }}>⚡</Text>
              </TouchableOpacity>
            </View>
          </Camera>
        ) : (
          <View style={styles.view} >
            <Button
              onPress={() => setCameraActive(true)}
              title="Take Picture"
            >
            </Button>
          </View>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
