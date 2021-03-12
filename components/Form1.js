import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Alert,  TextInput, View, StyleSheet, Text, Button } from 'react-native';
import { color } from 'react-native-reanimated';


class Form1 extends Component{
  
  constructor(props) {
    super(props);
    
    this.state = {
      ModelName: '',
      ModelNumber : '',
      buttoncolor:"#1c242c",
      buttoncolorsec:"#1c242c",
      week: "#1c242c",
      month : "#1c242c",
      year : "#1c242c"
    };

  }
  
  

onLogin() {
  const { ModelName, ModelNumber } = this.state;
  if(ModelName == '' || ModelNumber == ''){
  Alert.alert('Fill Details Please');
  }
  else{
    Alert.alert('THANKS FOR SIGN UP');
    this.props.navigation.navigate('Home');
  }

}

  render(){
  return(
    <View style = {styles.FormContainer}>
      <Text style = {styles.FormText} >Model Name</Text>
      <TextInput   style={styles.FormTextInput} value={this.state.ModelName}
          onChangeText={(ModelName) => this.setState({ ModelName })}   
          placeholder={'MODEL NAME'}/>
         <Text style = {styles.FormText} >Model Number</Text>
      <TextInput   style={styles.FormTextInput} value={this.state.ModelNumber}
          onChangeText={(ModelNumber) => this.setState({ ModelNumber })}   
          placeholder={'MODEL NUMBER'}/>
      <Text style = {styles.FormText} >Vehicle Type</Text>
      <View style={styles.VechileType}>
          <Button title="  Four Wheeler  " color={this.state.buttoncolor} onPress={()=>{this.setState({buttoncolor:"#a4cccc"});this.setState({buttoncolorsec:"#1c242c"})}}/>
          <Button title="  Two Wheeler  "  color={this.state.buttoncolorsec} onPress={()=>{this.setState({buttoncolorsec:"#a4cccc"});this.setState({buttoncolor:'#1c242c'})}} />    
      </View>
      <Text style = {styles.FormText} >Subscription</Text>
      <View style={styles.VechileType}>
          <Button title="  Week  " color={this.state.week} onPress={()=>{this.setState({week:"#a4cccc"});this.setState({month:"#1c242c"}),this.setState({year:"#1c242c"})}}/>
          <Button title=" Month "  color={this.state.month} onPress={()=>{this.setState({month:"#a4cccc"});this.setState({week:"#1c242c"});this.setState({year:"#1c242c"})}} />
          <Button title="  Year  "  color={this.state.year} onPress={()=>{this.setState({year:"#a4cccc"});this.setState({month:"#1c242c"}); this.setState({week:"#1c242c"})}} />    
      </View>
      <Text style = {styles.FormButton}  onPress={this.onLogin.bind(this)} accessibilityRole
='button'  >Next</Text>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  FormContainer : {
    padding : 20,
    marginTop : 20,
    flex : 1,
  },
  FormText : {
    color : 'white',
    fontWeight:'bold',
    fontSize:16,
  },
  FormTextInput : {
    marginVertical:15,
    borderBottomWidth:2,
    width:310,
    height:45,
    borderColor:'white'
  },
  FormButton : {
    fontSize:32,
    fontWeight : 'bold',
    textAlign : 'center',
    marginTop:30,
    backgroundColor : '#1c242c',
    padding : 10,
    borderRadius : 40,
    color : 'white'
  },
  VechileType: {
    flexDirection:'row',
    justifyContent:'space-between',
    margin:15,
    
    padding:10,
    borderColor:'red'
    }
})

export default Form1;