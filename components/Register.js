import React, { Component } from 'react'
import {View, Button, TextInput} from 'react-native'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



export class Register extends Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      name: '',
    }
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const {email, password, name} = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result)
    })
    .then((error) => {
      console.log(error)
    })
  }
  render() {
    return (
      <View>
        <TextInput
          placeholder = "name"
          onChangeText={(e) => this.setState({name: e})}
        />
                <TextInput
          placeholder = "email"
          onChangeText={(e) => this.setState({email: e})}
        />
                <TextInput
          placeholder = "password"
          secureTextEntry = {true}
          onChangeText={(e) => this.setState({password: e})}
        />

        <Button
          onPress={() => {this.onSignUp()}}
          title = 'Sign Up'
        />
      </View>
    )
  }
}

export default Register
