import { Text, StyleSheet, View, FlatList, Button ,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import SmallTeaser from '../Components/SmallTeaser';
import { BackHandler } from 'react-native';
export default class Welcome extends Component {
  constructor(props) {
    super(props)
   
    this.state = {
      data: [],
      Date1: undefined,
      // uName:'abc',
      uName: this.props.route.params.userName,
      color: this.props.route.params.color,
       
    };
  } 
  componentDidMount() {
    this.apicall();
    var date = new Date().getDate()
    var month = new Date().getMonth() + 1
    var year = new Date().getFullYear()
    var hour = new Date().getHours()
    var min = new Date().getMinutes()
    var sec = new Date().getSeconds()
    var fullDate = date + '/' + month + '/' + year + ' ' + hour + ':' + min + ':' + sec
    this.setState({ Date1: fullDate });
  }
  async apicall() {
    let res = await fetch('https://reactnative.dev/movies.json ')
    let respjson = await res.json()
    console.warn(respjson)
    this.setState({ data: respjson.movies })
  }
  backBtn = () => {
    this.props.navigation.goBack();
  }
  render() {
    var count = 0;
    return (
      <View style={styles.container}>
        <Text style={styles.textData}>{this.state.Date1}</Text>
        <Text style={styles.welText}>Welcome {this.state.uName}</Text>
        <SmallTeaser data={this.state.data} color={this.state.color} />
        <TouchableOpacity onPress={()=>this.backBtn()}>
          <Text style={styles.textData} >
            Back
          </Text>
        </TouchableOpacity>
        {/* <Button title='Back' style={styles.backBtn} o /> */}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: "#231246",
  },
  textData: {
    color: '#ffff',
    fontSize: 28,

  },
  welText: {
    color: '#ffff',
    fontSize: 24,
    marginTop: 15,
    marginBottom: 15,
  },
  teaser: {
    marginTop: 20,

  },
  backBtn: {
    marginTop: 20,
    borderRadius:50,
   fontSize:20,
   width:200,
  }
})