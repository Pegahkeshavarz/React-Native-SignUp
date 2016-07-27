import React, { Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TextInput, TouchableHighlight} from 'react-native';
var Button = require('../Button');
var validator = require('email-validator');



class SignIn extends Component {
    constructor(props){
        super(props);
        this.handleSignIn = this.handleSignIn.bind(this);

        this.state={
            username: '',
            password: '',
            valid: true,
            passValid: true,
            passMsg: '',
            emailMsg:''
        }
    }

    handleSignIn(){
        if(this.state.password.length < 5){
            this.setState({password: '', passMsg: 'password should be atleast 5 char', passValid: false})
        } else {
            this.setState({passMsg: '', passValid: false})
        }

        if(!this.state.valid){
            this.setState({emailMsg: 'Email is not valid'})
        } else {
            this.setState({emailMsg: ''})
        }
    }

    render(){
        console.log(this.state);
        var formValid = (this.state.valid) ? styles.input : styles.nvalid;
        var passValid = this.state.passValid ? styles.input : styles.nvalid;
        return(

            <View style={styles.container}>
                <Text>Sign In</Text>
                <TextInput placeholder="username" style={formValid}
                 onChangeText ={(text) => {
                        if(validator.validate(text)){
                            this.setState({username: text, valid: true})
                        } else {
                            this.setState({username: '', valid: false})
                        }
                    }
                }
                />
                <Text style={styles.red}>{this.state.emailMsg}</Text>
                <TextInput secureTextEntry={true} placeholder="Password" style={formValid}
                 onChangeText ={(text) => {this.setState({password: text})}}
                 value={this.state.password}/>
                 <Text style={styles.red}>{this.state.passMsg}</Text>
                <Button text='Sign In' onPress={this.handleSignIn}/>
            </View>

        )
    }
}



var styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input:{
        padding: 4,
        height: 40,
        borderColor:'black',
        borderWidth: 1,
        borderRadius: 5,
        margin:5,
        width: 200,
        alignSelf: 'center'
    },
    label:{
        fontSize:18
    },
    nvalid:{
        padding: 4,
        height: 40,
        borderColor:'red',
        borderWidth: 1,
        borderRadius: 5,
        margin:5,
        width: 200,
        alignSelf: 'center'
    },
    red:{
        color: 'red'
    }
});

module.exports = SignIn;
