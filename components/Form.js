import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Alert,  TextInput, View, StyleSheet, Text, Button } from 'react-native';


class Form extends Component{
  
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };

  }
  
  

onLogin() {
  const { username, password } = this.state;
  if(username == '' || password==''){
  Alert.alert('Fill Details Please');
  }
  else{
    Alert.alert('Thanks ' + `${username}`);
    this.props.navigation.navigate('Menu');
  }

}

  render(){
  return(
    <View style = {styles.FormContainer}>
      <Text style = {styles.FormText} >NAME</Text>
      <TextInput   style={styles.FormTextInput} value={this.state.username}
          onChangeText={(username) => this.setState({ username })}   
          placeholder={'Username'}/>
      <Text style = {styles.FormText} >PASSWORD</Text>
      <TextInput  style={styles.FormTextInput} value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
           />
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
  
})

export default Form;