import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert,  TextInput, View, StyleSheet, Text, Button, ScrollView } from 'react-native';

class Payments extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      ModelName: '',
      ModelNumber : '',
      buttoncolor:"#1c242c",
      buttoncolorsec:"#1c242c",
      week: "#1c242c",
      month : "#1c242c",
      year : "#1c242c",
      ExpiryValue : '',
      cvv : ''
    };

  }
  
  

onLogin() {
  const { ModelName, ModelNumber,ExpiryValue,cvv } = this.state;
  if(ModelName == '' || ModelNumber == '' || ExpiryValue == '' || cvv == ''){
  Alert.alert('Fill Details Please');
  }
  
    
  else{
    
    
  
    Alert.alert('THANKS FOR SIGN UP');
    this.props.navigation.navigate('Home');
  }

}
  render(){
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.containerCheckout}>Checkout</Text>
      <Text style={styles.containerPayments}>Payment Methods</Text>
      <View style={styles.VechileType}>
          <Button title="  Debit Card  " color={this.state.week} onPress={()=>{this.setState({week:"#a4cccc"});this.setState({month:"#1c242c"}),this.setState({year:"#1c242c"})}}/>
          <Button title=" Credit Card "  color={this.state.month} onPress={()=>{this.setState({month:"#a4cccc"});this.setState({week:"#1c242c"});this.setState({year:"#1c242c"})}} />
             
      </View>
      <View style = {styles.FormContainer}>
      <Text style = {styles.FormText} >NAME ON CARD</Text>
      <TextInput   style={styles.FormTextInput} value={this.state.ModelName}
          onChangeText={(ModelName) => this.setState({ ModelName })}   
          placeholder={'NAME'}/>
         <Text style = {styles.FormText} >CARD NUMBER</Text>
      <TextInput   style={styles.FormTextInput} value={this.state.ModelNumber}
          onChangeText={(ModelNumber) => this.setState({ ModelNumber })}   
          placeholder={'NUMBER'}/>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={[styles.FormText,styles.containerText]}>EXPIRY DATE</Text>
            <Text style={[styles.FormText,styles.containerText]}>CVV</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <TextInput style={[styles.FormText,styles.containerbutton]} placeholder={'DD/YY'} value={this.state.ExpiryValue} onChangeText={(ExpiryValue)=>this.setState({ExpiryValue})}/>
            <TextInput style={[styles.FormText,styles.containerbutton]} placeholder={'CVV'} value={this.state.cvv} onChange={(cvv)=>this.setState({cvv})} maxLength={3}/>
          </View>
     
      <Text style = {styles.FormButton}  onPress={this.onLogin.bind(this)} accessibilityRole
='button'  >Next</Text>
    </View>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  containerCheckout : {
    
    fontWeight:'bold',
    fontSize:40,
    textAlign:'center'
  },
  containerPayments : {
    fontSize:20,
    margin:15,
    fontWeight:'bold',
    textAlign:'center',
  },
  FormContainer : {
    padding : 20,
    marginTop : 10,
    flex : 1,
  },
  FormText : {
    color : '#1c242c',
    fontWeight:'bold',
    fontSize:16,
  },
  containerText : {
    paddingLeft:15,
    paddingRight:35
  },
  containerbutton : {
    
    borderBottomColor:'black',
    borderBottomWidth:2,
    padding:20,
    marginLeft:20,
    marginRight:20
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
    justifyContent:'space-around',
    margin:15,
    
    padding:10,
    borderColor:'red'
    }
  
});

export default Payments;
