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
                    <Text style={{fontSize:16}}>Email: {item.contractor}</Text>
                    {/* <Text style={{fontSize:16}}>{item.department}</Text> */}
                </View>
                
            </View>
          </TouchableOpacity>
      );


    return(
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.head}>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Project Name: </Text>
                <Text style={{fontSize:20}}>{name}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>Location: </Text>
                <Text style={{fontSize:16}}>{location}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>Description: </Text>
                <Text style={{fontSize:16}}>{desc}</Text>
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
            data: [20, 40, 30, 10, 50],
            },
            ],
            }}
            width={Dimensions.get('window').width - 16}
            height={220}
            yAxisLabel={''} chartConfig={{
            backgroundColor: '#10c9bd',
            backgroundGradientFrom: '#f2b40a',
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
    },
    head:{
        backgroundColor:'#f9c2ff',
        borderRadius:5,
        marginBottom:10,
    },
    item: {
      backgroundColor: '#f9c2ff',
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