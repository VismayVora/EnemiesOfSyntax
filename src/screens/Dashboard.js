import React,{useState,useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {URL,token} from '../utils/link'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const DATA = [
  {
    id: 'Project Id',
    title: 'Project 3',
    department: '% Complete'
  },
    {
      id: '1011',
      title: 'Project 1',
      department: '85%'
    },
    {
      id: '1123',
      title: 'Project 2',
      department: '81%'
    },
    {
      id: '1080',
      title: 'Project 3',
      department: '65%'
    },
    {
      id: '1220',
      title: 'Project 4',
      department: '55%'
    },
  ];


export default function Dashboard({navigation}){

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
        <View style={{borderWidth:1,flexDirection:'row',justifyContent:'space-between',width:wp('80%'),alignSelf:'center'}}>
        <Text style={{fontSize:20,padding:10}}>{item.id}</Text>
        <Text style={{fontSize:16,padding:10}}>{item.department}</Text>
        </View>
      </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Text style={styles.text}>Projects OverView</Text>
        <View style={styles.item}>
        <FontAwesome name={'building-o'} size={45} color="#393E46"  style={{paddingHorizontal:12}}/>
          <View>
            <Text style={styles.text}>No. of Projects</Text>
            <Text style={styles.text}>6</Text>
          </View>
        </View>
        <View style={styles.item}>
        <MaterialIcons name={'attach-money'} size={45} color="#393E46"  style={{marginRight:12}}/>
          <View>
            <Text style={styles.text}>Contract Value</Text>
            <Text style={styles.text}>Rs. 40.35 Cr</Text>
          </View>
        </View>
        <View style={styles.item}>
        <Ionicons name={'speedometer-outline'} size={45} color="#393E46"  style={{marginRight:12}}/>
          <View>
            <Text style={styles.text}>Budget</Text>
            <Text style={styles.text}>Rs. 31.10 Cr</Text>
          </View>
        </View>
        <View style={styles.item}>
        <MaterialCommunityIcons name={'sack-percent'} size={45} color="#393E46"  style={{marginRight:12}}/>
          <View>
            <Text style={styles.text}>     Margin    </Text>
            <Text style={styles.text}>23%</Text>
          </View>
        </View>
      </View>
      <View style={{marginTop:10}}>
        <Text style={styles.text}>Projects On My WatchList</Text>
        <FlatList
        data={DATA}
        keyExtractor={({ id }) => id}
        contentContainerStyle={{}}
        renderItem={renderItem}
      />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Login')
      }}><Text style={{color:'white',alignSelf:'center',fontSize:18}}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     
      backgroundColor:"#FFFFFF"
    },
    text:{
      fontWeight:'bold',
      fontSize:17,
      alignSelf:'center'
    },
    item:{
      flexDirection:'row',
      width:wp('80%'),
      marginVertical:5,
      alignItems:'center',
      justifyContent:'center'
    },
    button:{
      backgroundColor:'#0065ff',
      marginTop:8,
      padding:2,
      borderRadius:10,
      width:wp('50%'),
      height:50,
      alignSelf:'center',
      alignItems:'center',
      justifyContent:'center',
  }
  });
  