import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity,TextInput,Image} from 'react-native';
import PasswordInput from '../components/PassInput';
import Textinp from '../components/Textinp';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';

function SignUp1({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
       <LottieView
        source={require('../assets/contractor.json')}
        autoPlay={true}
        loop={false}

        style={styles.animation}
      />
      
      <Textinp
        marginTop={50}
        iconShape="mail"
        placeholder="Email"
        autoComplete="email"
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}
        placeholderTextColor="grey"/>
      <PasswordInput
        placeholder="Password"
        autoComplete="password"
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
        placeholderTextColor="grey"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('attendance')
          console.log("Signed Up");
      }}><Text style={styles.textStyle}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFFFFF'
  },
  textStyle: {
    color: 'white',
    // marginTop: 25,
    alignSelf:'center',
    fontSize:20,
  },
  text:{
    fontSize:24,
    fontWeight:'bold',
    alignSelf:'flex-start',
    marginBottom:10,
    marginLeft:wp('10%'),
},
animation: {
  width: 200,
  height: 200,
  margin: 25,
  marginLeft: 20
},
    button:{
        backgroundColor:'#0065ff',
        marginTop:20,
        padding:10,
        borderRadius:10,
        width:wp('85%')
    }
});

export default SignUp1;