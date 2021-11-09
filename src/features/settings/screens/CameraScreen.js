/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */

import React, { useContext, useRef, useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';

import { CustomText as Text } from '../../../components/CustomText/CustomText';
import { AuthenticationContext } from '../../../services/authentication/AuthenticationContext';

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const InnerSnap = styled(View)`
  width: 100%;
  height: 100%;
  z-index: 999;
`;

export const CameraScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <ProfileCamera
      ref={(camera) => (cameraRef.current = camera)}
      type={Camera.Constants.Type.back}
    >
      <InnerSnap>
        <TouchableOpacity
          onPress={snap}
          style={{
            position:"absolute",
            width: 70,
            height: 70,
            bottom: 0,
            borderRadius: 50,
            backgroundColor: '#fff',
            alignSelf:"center",
          }}
        />
      </InnerSnap>

    </ProfileCamera>
  );
};
