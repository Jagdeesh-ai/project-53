import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class RedButton extends Component {
  alertbutton(){
    alert("namaste,the changes will not be saved");
  }
  render(){
    return(
      <Button color="red" title="Click Me" onPress={this.alertbutton} />
    )
  }
}



class Redutton extends Component {
  alertbutton(){
    alert("namaste,the changes will not be saved");
  }
  render(){
    return(
      <Button color="red" title="Click Me" onPress={this.alertbutton} />
    )
  }
}




class Redgutton extends Component {
  alertbutton(){
    alert("namaste,the changes will not be saved");
  }
  render(){
    return(
      <Button color="red" title="Click Me" onPress={this.alertbutton} />
    )
  }
}



export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 100,paddingTop:30}} >
        <RedButton />
        <Redgutton />
        <Redutton />
        
      </View>
    );
  }
}