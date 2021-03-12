import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Svg from '../assets/Icons/link2.png';
import Form from './Form'

export default function Sign({navigation}) {
  const Clickme = () => {
    {navigation.navigate('Menu')};
  }
  return (
    <ScrollView>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.mainText} >New {'\n'}Account  </Text>
          <Text style={{fontSize:19,position:'absolute',top:40,right:30,color:'#d4d8d9'}}>1/2{'\n'}steps</Text>
          <View style={styles.containerImage}>
          <View style={styles.Image}>
            <Image source ={Svg} />
          </View>
          <Text style={styles.ImageText}>Upload a profile picture {'\n'}(Optional)</Text>
          </View>
        </View>
       <Form navigation={navigation}/>
       <StatusBar style="light" />
      </View>   
  </SafeAreaView>
</ScrollView>
  );
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#343c4c',
  },
  main : {
     marginTop:100,
     paddingHorizontal:20,
  },
  mainText : {
    color:'white',
    fontSize:48,
    fontWeight:'bold'
  },
  mainTextChild : {

  },
  mainForm : {
    marginTop:180
  },
  containerImage : {
    marginTop:20,

  },
  Image : {
    borderRadius:90,
    borderColor:'white',
    paddingVertical:20,
    paddingHorizontal:20,
    borderWidth:2,
    width:90
  },
  ImageText : {
    position:'absolute',
    top:25,
    right : 20,
    color:'#d4d8d9',
    fontSize: 16
  },
})