import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity,TextInput,Image,ToastAndroid} from 'react-native';
import PasswordInput from '../components/PassInput';
import Textinp from '../components/Textinp';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MapView from "react-native-maps";
import {Marker} from 'react-native-maps';
import { URL,token } from '../utils/link';

function AddProject({navigation,route}) {

    // console.log(route.params);
    const loc=route.params.loc;
    // console.log(loc.latitude)
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    const setToastMessage = message => {
        ToastAndroid.showWithGravity(
          message,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
    };

    const crProj=async()=>{
        try{
            const result=await fetch(URL+'/create_project/',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token '+token},
                body: JSON.stringify({
                    "name":name,
                    "location_name":location,
                    "latitude":loc.latitude,
                    "longitude":loc.longitude,
                    "description":'Description'
                  }),
            });
            const json= await result.json();
            console.log(json);
            // setEvents(json);
        }catch(error){
            console.log(error);
            // Alert.alert(error);
        }finally{
            setToastMessage("Project Created Successfully");
            navigation.goBack();
        }
    }
  return (
    <View style={styles.container}>
      {/* <Image source={require('../utils/undraw_Login_re_4vu2.png')} style={{height:150,width:210}}/> */}
    <Text style={styles.text}>Add Project Details</Text>
    <Textinp
        marginTop={10}
        iconShape="person"
        placeholder="Name"
        value={name}
        onChangeText={text => {
          setName(text);
        }}
        placeholderTextColor="grey"/>
    <Textinp
        marginTop={10}
        iconShape="location-sharp"
        placeholder="Location"
        value={location}
        onChangeText={text => {
          setLocation(text);
        }}
        placeholderTextColor="grey"/>
    <View style={styles.container1}>
    {/*Render our MapView*/}
      <MapView
        style={styles.map}
        //specify our coordinates.
        initialRegion={{
          latitude: loc.latitude,
          longitude: loc.longitude,
          latitudeDelta: 0.05922,
          longitudeDelta: 0.05421,
        }}
      >
          <Marker coordinate={{
          latitude: loc.latitude,
          longitude: loc.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }} />
      </MapView>
    </View>
    <TouchableOpacity
        style={styles.button}
        onPress={() => {
        crProj();
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
    },
    container1:{
        // ...StyleSheet.absoluteFillObject,
        // flex: 1, //the container will fill the whole screen.
        width:250,
        height:180,
        // justifyContent: "flex-end",
        alignItems: "center",
        // marginLeft:wp('15%'),
        marginVertical:wp('5%'),
    },
    map: {
        ...StyleSheet.absoluteFillObject,
      },
});

export default AddProject;