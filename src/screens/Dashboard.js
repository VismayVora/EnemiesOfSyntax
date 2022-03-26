import React,{useState,useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {URL,token} from '../utils/link'

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
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(true);

  const getData=async()=>{
    setLoading(true);
    try{
        const result=await fetch(URL+'/contractor_attendance/1/',{
            method:'GET',
            headers: {'Authorization': 'Token '+token},
        });
        const json= await result.json();
        console.log(json);
        setData(json);
    }catch(error){
        console.log(error);
    }finally{
        setLoading(false);
    }
}

  useEffect(() => {
      getData();
  },[]);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
        <View style={styles.item}>
        <Text style={{fontSize:20}}>{item.contractor}</Text>
        <Text style={{fontSize:16}}>{item.project}</Text>
        <Text style={{fontSize:16}}>Attendance: {item.total_time}</Text>
        </View>
      </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Project Name:</Text>
        <Text>Description:</Text>
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: hp('2%'),
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 8,
      borderRadius:5,
      height:90,
    },
  });
  