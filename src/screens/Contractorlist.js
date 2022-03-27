import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Stars from 'react-native-stars';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
  ImageBackground,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { URL } from '../utils/link';


export default function Contractorlist({ navigation }) {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    var axios = require('axios');

    
    var config = {
        method: 'get',
        url: URL+'/contractors/',
        headers: {
          'Authorization': 'Token b01b48aeb6761f6b2b4d095f3b81eace9cf42f9a'
        }
      };


    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setFilteredData(response.data);
        setMasterData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  };

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.department
          ? item.department.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setFilteredData(newData);
      setSearch(text);
    }


    else {
      setFilteredData(masterData);
      setSearch(text);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.feedItem} elevation={15}>
        <ImageBackground source={{
           uri:URL+ item.photo,
          }} style={styles.avatar} resizeMode="stretch" />
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ flexDirection: "row" }}>

              <Text style={styles.name}>NAME- {item.name}</Text>
              

            </View>
          </View>
          <Text style={styles.post}>CONTACT - {item.phone_no}</Text>
          <Text style={styles.post}>EMAIL - {item.email}</Text>
          <Text style={styles.post}>DEPARTMENT - {item.department}</Text>
         
          <View style={{backgroundColor:'yellow',marginVertical:12,borderRadius:7}}>
          <Stars
            default={2.5}
            count={5}
            half={true}
            // starSize={100} 
            fullStar={<Ionicons name={'star'} size={20} color="#393E46"  style={{paddingLeft:10}}/>}
            emptyStar={<Ionicons name={'star-outline'} size={20} color="#393E46"  style={{paddingLeft:10}}/>}
            halfStar={<Ionicons name={'star-half-sharp'} size={20} color="#393E46"  style={{paddingLeft:10}}/>}
          />
        </View>

        </View>
      </View>

    );
  };

  return (
    <View style={styles.container}>
        <View style={styles.inputCard} >
          <TextInput
            style={styles.input}
            placeholder='Search By Department'
            placeholderTextColor="white"
            clearButtonMode="always"
            value={search}
            onChangeText={(text) => searchFilter(text)}
          />
        </View>
      
      <FlatList
        data={filteredData}
        keyExtractor={({ id }) => id}
        contentContainerStyle={{}}
        renderItem={renderItem}

      />

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',

  },
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    backgroundColor: '#3BCBFF',
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EBECF4",

  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500"
  },
  feed: {
    marginHorizontal: 10
  },
  feedItem: {
    backgroundColor: "#0065ff",
    borderRadius: 7,
    padding: 8,
    flexDirection: "row",
    margin: 10,
    marginHorizontal:15,
    shadowColor: "#000000",
    shadowOffset: { height: 15 },
    shadowRadius: 15,
    shadowOpacity: 10,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 20,
    marginRight: 16
  },
  name: {
    fontSize: 15,
    fontWeight: "500",
    color: "#FFFFFF"
  },
  timestamp: {
    fontSize: 11,
    color: "#C4C6CE",
    marginTop: 4
  },
  post: {
    marginTop: 16,
    fontSize: 14,
    color: "white"
  },
  postImage: {
    width: undefined,
    height: 150,
    borderRadius: 5,
    marginVertical: 16
  },
  input: {
    padding: 10,
    flex: 1,
    borderBottomColor: "black",
    backgroundColor: '#0065ff',
    color: "#FFFFFF",
    borderRadius:7
  },
  inputCard: {
    margin: 10,
    flexDirection: 'row',
    
    alignItems: 'center',
    borderRadius: 5,
    zIndex: 100,
    borderColor: "white",
    borderWidth: 0.5
  },

});