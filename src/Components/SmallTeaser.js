import { Text, StyleSheet, View, Image, TouchableOpacity, FlatList, Modal } from 'react-native'
import React, { Component } from 'react'
export default class SmallTeaser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apidata: this.props.data,
            color: this.props.color,
            isVisible: false,
            title: undefined,
            year: undefined,
        };
    }
    render() {
        return (
            <View>
                <View  style={styles.centeredView} >
                    <Modal
                   
                        animationType="fade"
                        // transparent={true}
                        visible={this.state.isVisible}
                    >
                        <Text style={styles.nameData}>Movie Detail</Text>
                        <View>
                            <Text style={styles.nameData}>Movie Name:{this.state.title}</Text>
                            <Text style={styles.nameData}>Realse Year:{this.state.year}</Text>
                        </View>
                        <TouchableOpacity onPress={()=>this.setState({isVisible:false})} >
                            <Text style={styles.closeBtn}>Close</Text>
                        </TouchableOpacity>
                    </Modal>
                </View>
                {
                    this.props.data.map((element) =>
                        element['id'] < 4 ?
                            <>
                                <TouchableOpacity
                                    onPress={() => {
                                        console.log("indside click"),
                                            this.setState({ isVisible: true }),
                                            this.setState({ title: element.title }),
                                            this.setState({ year: element.releaseYear })
                                    }}
                                >
                                    <View style={{ ...styles.teaser, backgroundColor: this.props.color }}>
                                        <Image
                                            source={require('./../assets/yotube.png')}
                                            style={styles.img}
                                        />
                                        <View>
                                            <Text style={styles.nameText}>{element.title}</Text>
                                            <Text style={styles.yearText}>{element.releaseYear}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </>
                            : null
                    )
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    centeredView: {
        
        flexDirection:'row',
        backgroundColor:'pink',
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22,
      },
      nameData: {
        color: 'black',
        fontSize: 28,
      },
    teaser: {
        flexDirection: 'row',
        borderRadius: 20,
        width: 300,
        height: 120,
        alignContent: 'center',
        marginBottom: 15,
    },
    textData: {
        color: '#ffff',
        fontSize: 28,

    },
    img: {
        width: 140,
        height: 120
    },
    nameText: {
        color: '#ffff',
        marginTop: 30,
        fontSize: 18,

    },
    yearText: {
        fontSize: 16,
        color: '#ffff'
    },
    closeBtn: {
        backgroundColor:'green',
        color:'#ffff',
        fontSize:20,
        width:200,
        textAlign:'center',
        borderRadius:20,
    }
})