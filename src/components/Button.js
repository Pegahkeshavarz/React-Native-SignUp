import React, { Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TextInput, TouchableHighlight } from 'react-native';


module.exports = React.createClass({

    render: function(){
        return(
            <TouchableHighlight underlayColor={'gray'} onPress={this.props.onPress} style={styles.button}>
            <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        )
    }
});

var styles = StyleSheet.create({
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        borderColor: 'black',
        marginTop: 10
    },
    buttonText:{
        flex:1,
        alignSelf:'center',
        fontSize: 20
    }
})
