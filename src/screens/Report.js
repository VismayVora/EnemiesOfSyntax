import React, { Component } from 'react';
import { StyleSheet, ScrollView, StatusBar, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { width } from '../components/Constants';

export default function Report({ navigation }) {
  const widthAndHeight = 250;
  const series = [123, 321, 123, 789, 537,444];
  const series1 = [ 789, 537,444,123, 321, 123,];
  const series2 = [537,444,123, 537,444,123,];
  const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800','#000000'];

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Progress</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: width,
            marginBottom: 10,
          }}>
          <Text style={{ color: 'orange' }}>January</Text>
          <Text style={{ color: 'red' }}>February</Text>
          <Text style={{ color: 'blue' }}>March</Text>
          <Text style={{ color: 'yellow' }}>April</Text>
          <Text style={{ color: 'lightgreen' }}>May</Text>
          <Text style={{ color: 'black' }}>June</Text>
        </View>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
        />
        <Text style={styles.title}>Attendance</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: width,
            marginBottom: 10,
          }}>
          <Text style={{ color: 'orange' }}>January</Text>
          <Text style={{ color: 'red' }}>February</Text>
          <Text style={{ color: 'blue' }}>March</Text>
          <Text style={{ color: 'yellow' }}>April</Text>
          <Text style={{ color: 'lightgreen' }}>May</Text>
          <Text style={{ color: 'black' }}>June</Text>
        </View>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series1}
          sliceColor={sliceColor}
          
        />
           <Text style={styles.title}>Security Violations</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: width,
            marginBottom: 10,
          }}>
          <Text style={{ color: 'orange' }}>January</Text>
          <Text style={{ color: 'red' }}>February</Text>
          <Text style={{ color: 'blue' }}>March</Text>
          <Text style={{ color: 'yellow' }}>April</Text>
          <Text style={{ color: 'lightgreen' }}>May</Text>
          <Text style={{ color: 'black' }}>June</Text>
        </View>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series2}
          sliceColor={sliceColor}
        
        />
     
      </View>
      
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    margin: 20,
    color: 'black',
  },
});
