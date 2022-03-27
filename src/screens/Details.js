import React,{useState,useEffect} from "react";
import {SafeAreaView,FlatList,View,Text,StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {URL,token} from '../utils/link'
import {BarChart} from "react-native-chart-kit";

export default function Details({navigation,route}){
    const id=route.params.id;
    const location=route.params.loc;
    const desc=route.params.desc;
    const name=route.params.name;
    console.log(route.params);

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);

  const getData=async()=>{
    setLoading(true);
    try{
        const result=await fetch(URL+'/contractor_attendance/',{
            method:'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Token '+token},
            body: JSON.stringify({
              "pk":id,
              "date":"2022-03-26",
            }),
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
                <View>
                    <Text style={{fontSize:16,color:"yellow"}}>Name: {item.name}</Text>
                    <Text style={{fontSize:16,color:'yellow'}}>Email: {item.contractor}</Text>
                    {/* <Text style={{fontSize:16}}>{item.department}</Text> */}
                </View>
                
            </View>
          </TouchableOpacity>
      );


    return(
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.head}>
            <View style={{flexDirection:'row',width:wp('58%')}}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'yellow'}}>Project Name: </Text>
                <Text style={{fontSize:20,color:'white'}}>{name}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:16,fontWeight:'bold',color:'yellow'}}>Location: </Text>
                <Text style={{fontSize:16,color:'white'}}>{location}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:16,fontWeight:'bold',color:'yellow'}}>Description: </Text>
                <Text style={{fontSize:16,color:'white',width:wp('58%')}}>{desc}</Text>
            </View>
            {/* <Text style={{fontSize:16}}>Location: {location}</Text> */}
        </View>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Contractors:</Text>
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        // horizontal={true}
      />
      </View>
      <View>
            {/*It is an Example of Bar Chart*/}
            <Text style={styles.text}>Average Working Hours</Text>
            <BarChart data={{
            labels: [ 'Monday','Tuesday','Wednesday','Thursday','Friday'],
            datasets: [
            {
            data: [8, 7, 9, 10, 8],
            },
            ],
            }}
            width={Dimensions.get('window').width - 16}
            height={220}
            yAxisLabel={''} chartConfig={{
            backgroundColor: '#0065ff',
            backgroundGradientFrom: '#0065ff',
            backgroundGradientTo: '#f2b40a',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
            color:'red',
            borderRadius: 16,
            },
            }}
            style={{ marginVertical: 8,
            borderRadius: 16,
            }}
            />
            </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: hp('2%'),
      marginHorizontal:wp('2%'),
      backgroundColor:'#FFFFFF'
    },
    head:{
        backgroundColor:'#0065ff',
        borderRadius:10,
        margin:20,
        padding:20,
    },
    item: {
      backgroundColor: '#0065ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 8,
      borderRadius:5,
      height:90,
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center',
    }
  });