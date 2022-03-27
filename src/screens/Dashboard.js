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
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Contractor 1',
      department: 'Dept 1'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Contractor 2',
      department: 'Dept 2'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Contractor 3',
      department: 'Dept 3'
    },
  ];


export default function Dashboard({navigation}){

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
        <View style={styles.item}>
        <Text style={{fontSize:20}}>{item.title}</Text>
        <Text style={{fontSize:16}}>{item.department}</Text>
        </View>
      </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Text style={styles.text}>Projects OverView</Text>
        <View style={styles.item}>
        <FontAwesome name={'building-o'} size={50} color="#393E46"  style={{paddingHorizontal:12}}/>
          <View>
            <Text style={styles.text}>No. of Projects</Text>
            <Text style={styles.text}>6</Text>
          </View>
        </View>
        <View style={styles.item}>
        <MaterialIcons name={'attach-money'} size={50} color="#393E46"  style={{marginRight:12}}/>
          <View>
            <Text style={styles.text}>Contract Value</Text>
            <Text style={styles.text}>Rs. 40.35 Cr</Text>
          </View>
        </View>
        <View style={styles.item}>
        <Ionicons name={'speedometer-outline'} size={50} color="#393E46"  style={{marginRight:12}}/>
          <View>
            <Text style={styles.text}>Budget</Text>
            <Text style={styles.text}>Rs. 31.10 Cr</Text>
          </View>
        </View>
        <View style={styles.item}>
        <MaterialCommunityIcons name={'sack-percent'} size={50} color="#393E46"  style={{marginRight:12}}/>
          <View>
            <Text style={styles.text}>     Margin    </Text>
            <Text style={styles.text}>23%</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: hp('2%'),
      backgroundColor:"#FFFFFF"
    },
    text:{
      fontWeight:'bold',
      fontSize:20,
      alignSelf:'center'
    },
    item:{
      flexDirection:'row',
      width:wp('80%'),
      marginVertical:5,
      alignItems:'center',
      justifyContent:'center'
    }
  });
  