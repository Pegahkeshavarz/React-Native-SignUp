import React, { Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

var SignIn = require('./components/authentication/signin');

module.exports = React.createClass(
    {
        render: function(){
            return(
                <View style ={styles.container}>
                    <SignIn />
                </View>
            )
        }
});

var styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
