import React, { useState, useEffect, createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Alert, BackHandler } from 'react-native';
import { Camera } from 'expo-camera';
import { getImageIngredients } from '../APIs/logMeals';
import { getRecipes } from '../APIs/spoonacular';

export default function CameraLoader() {
  const cameraRef = createRef<Camera>()
  const getCamera = () => cameraRef.current

  const [currentPhoto, setCurrentPhoto] = useState(null);
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
        .then(getRecipes)
        .then(recipes => {
          console.log('final recipes:', recipes)
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
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  marginTop: 'auto',
                  backgroundColor: '#fff',
                }}>
              </TouchableOpacity>
            </View>
          </Camera>
        ) : (
          <View style={styles.view} >
            <CameraPreview photo={currentPhoto} />
            <TouchableOpacity
              onPress={() => setCameraActive(true)}
              style={{
                width: 130,
                borderRadius: 4,
                backgroundColor: '#14274e',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: 40
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
              >
                Take picture
            </Text>
            </TouchableOpacity>
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

const CameraPreview = ({ photo, retakePicture, savePhoto }: any) => {
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '100%'
      }}
    >
      <ImageBackground
        source={{ uri: photo && photo.uri }}
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            padding: 15,
            justifyContent: 'flex-end'
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <TouchableOpacity
              onPress={retakePicture}
              style={{
                width: 130,
                height: 40,

                alignItems: 'center',
                borderRadius: 4
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20
                }}
              >
                Re-take
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={savePhoto}
              style={{
                width: 130,
                height: 40,

                alignItems: 'center',
                borderRadius: 4
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20
                }}
              >
                save photo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}
