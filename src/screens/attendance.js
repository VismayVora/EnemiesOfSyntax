import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Share,
} from 'react-native';

import QRCode from 'react-native-qrcode-svg';

const Attendance = ({ navigation }) => {
  const [inputText, setInputText] = useState('');
  const [qrvalue, setQrvalue] = useState('');
  let myQRCode = useRef();

  const shareQRCode = () => {
    myQRCode.toDataURL(dataURL => {
      console.log(dataURL);
      let shareImageBase64 = {
        title: 'React Native',
        url: `data:image/png;base64,${dataURL}`,
        subject: 'Share Link', //
      };
      Share.share(shareImageBase64).catch(error => console.log(error));
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <QRCode
          getRef={ref => (myQRCode = ref)}
          value={qrvalue ? qrvalue : 'NA'}
          size={250}
          color="black"
          backgroundColor="white"
          logoSize={30}
          logoMargin={2}
          logoBorderRadius={15}
          logoBackgroundColor="yellow"
        />
        <Text style={styles.textStyle}>
         Scan your QR Code while entering and leaving the premises
        </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => setQrvalue(inputText)}>
          <Text style={styles.buttonTextStyle}>Generate QR Code</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('ScanQRCode')}>
          <Text style={styles.buttonTextStyle}>
            Scan 
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textStyle: {
    textAlign: 'center',
    margin: 25,
  },
  textInputStyle: {
    flexDirection: 'row',

    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    margin: 30,
  },
  buttonStyle: {
    backgroundColor:'#0065ff',
    marginTop:20,
    padding:10,
    borderRadius:10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});

export default Attendance;