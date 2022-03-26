import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Splash({ navigation }) {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/animation.json')}
        autoPlay={true}
        loop={false}

        style={styles.animation}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Image source={require('../assets/sportify.jpeg')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#019267',

  },
  animation: {
    width: 300,
    height: 300,
    margin: 55,
    marginLeft: 20





  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50,
    height: 150,
    width: 300


  },
});
