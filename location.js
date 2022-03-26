import React,{useState , useRef }  from "react";
import { StyleSheet,Button, Text, View } from "react-native";
import { Marker } from "react-native-maps";
import MapView from "react-native-maps";
export default function Location({navigation}) {
  const [visible,setVisible]=useState(false);
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    latitude: 19.0760,
    longitude: 72.8777,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });
  const mumbaiRegion = {
    latitude: 19.0760,
    longitude: 72.8777,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const goToTokyo = () => {
    //complete this animation in 3 seconds
    mapRef.current.animateToRegion(tokyoRegion, 3 * 1000);
  };
  const selectLocation = () => {
    setVisible(true);
    // navigation.navigate('AddProject')
  };
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 19.0760,
          longitude: 72.8777,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
      <Marker coordinate={mumbaiRegion} onPress={()=>navigation.navigate("AddProject")} title="Mumbai"/>
      {visible?<Marker coordinate={region} onPress={()=>navigation.navigate("AddProject")} pinColor="green" title="New Project"/>:<></>}
      </MapView>
      {/* <Button onPress={() => goToTokyo()} title="Go to Tokyo" /> */}
      <Button onPress={() => selectLocation()} title="Add a project" />
      {/* <Text style={styles.text}>Current latitude{region.latitude}</Text>
      <Text style={styles.text}>Current longitude{region.longitude}</Text> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    fontSize: 20,
    backgroundColor: "lightblue",
  },
});