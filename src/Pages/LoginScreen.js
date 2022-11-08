import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity ,Button,Alert} from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default class LoginScreen extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username : '',
      password : '',
    }
  }
   users=[
    {
      email:'ABC.com',
      pass:'12345@s',
      color:'pink',
      name:'abc',
    },
    {
      email:'shreyash.b@sankeysolutions.com',
      pass:'Shrey@12 ',
      color:'blue',
      name:'Shreyash'
    },
    {
      email:'ashwin.s@sankeysolutions.com',
      pass:'ash@1005 ',
      color:'pink',
      name:'Ashwin',
    }
  ];
  nextPage = () => {
    this.users.map(index => {

      if (index.email == this.state.username) {

        if(index.pass== this.state.password){

            console.log(index.email,index.pass,index.color);
            this.props.navigation.navigate('Welcome',{userName: index.name});
        }
       

    }

    });

  };
  go = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(this.state.email) === true){
               alert('valid');
           }
           else{
               alert();
           }
  }
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }
  render() {
   
    return (
      <View style={styles.container}>
        <Text>App</Text>
        <Image
          source={require('./../assets/bus.png')}
          style={{ borderRadius: 400 / 2 }}
        />
        <View style={styles.inputContainer}>
          <TextInput value={this.state.username} onChangeText={(username) => this.setState({username})} textAlign='center' style={styles.input} placeholder="Email-id" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput value={this.state.password} onChangeText={(password) => this.setState({password})} textAlign='center' secureTextEntry={true} style={styles.input} placeholder="Passwoord" />
        </View>
        <View style={{paddingTop:100}}>
          <TouchableOpacity style={styles.btnSubmit}  onPress={this.nextPage()} >
            <Text 
            style={{ color: 'a#fff', fontSize: 18, fontWeight: "bold" }} 
            // onPress={() => this.props.navigation.navigate('Welcome')} 
            
            >Submit</Text>

          </TouchableOpacity>
          {/* <Button
          title={'Login'}
          style={styles.input}
          onPress={()=>{this.onLogin.bind(this)}}
          // onPress={() => this.props.navigation.navigate('Welcome')} 
        /> */}
        </View>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#231246",
   
  },
  input: {

    width: 300,
    height: 40,
    color: 'black',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 18
  },
  inputContainer: {
    paddingBottom: 30,
  },
  btnSubmit: {
    backgroundColor: '#f78ae5',
    width: 200,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center'
  },


})