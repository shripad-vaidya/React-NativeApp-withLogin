import { Text, StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { Component } from 'react'
export default class SmallTeaser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apidata: this.props.data
        };
    }
    render() {
        const { title, style } = this.props;
        const { header, text } = styles;
        const combineStyles = StyleSheet.flatten([header, style]);
        return (
            <View>
                {
                    this.props.data.map((element) =>
                        element['id'] < 4 ?
                            <>
                                <TouchableOpacity>
                                    <View style={styles.teaser}>
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
    teaser: {

        flexDirection: 'row',
        backgroundColor: '#ff0084',
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
    }
})