import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity,TextInput,Image} from 'react-native';
import PasswordInput from '../components/PassInput';
import Textinp from '../components/Textinp';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

function AddProject({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      {/* <Image source={require('../utils/undraw_Login_re_4vu2.png')} style={{height:150,width:210}}/> */}
    <Text style={styles.text}>Add Project Details</Text>
    <Textinp
        marginTop={10}
        iconShape="person"
        placeholder="Name"
        // value={email}
        onChangeText={text => {
          setEmail(text);
        }}
        placeholderTextColor="grey"/>
    <Textinp
        marginTop={10}
        iconShape="location-sharp"
        placeholder="Location"
        // value={email}
        onChangeText={text => {
          setEmail(text);
        }}
        placeholderTextColor="grey"/>
        
    <TouchableOpacity
        style={styles.button}
        onPress={() => {
        navigation.navigate('bottomtabs');
        console.log("Logged In");
        }}><Text style={styles.textStyle}>Submit</Text>
      </TouchableOpacity>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    // marginTop: 25,
    alignSelf:'center',
    fontSize:18,
  },
  text:{
    fontSize:24,
    fontWeight:'bold',
    alignSelf:'flex-start',
    marginVertical:10,
    marginLeft:wp('10%'),
},
    button:{
        backgroundColor:'#0065ff',
        marginTop:20,
        padding:10,
        borderRadius:10,
        width:wp('85%')
    }
});

export default AddProject;