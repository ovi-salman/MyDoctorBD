import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  Alart
} from "react-native";

import {Header} from "react-native-elements"
import MyDoctorHeader from "../component/MyDoctorHeader";



class TherapyScreen extends Component {
  state = {
  };

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    
  };

  



  render() {
    return (
      <View style= {{flex:1}}>
      <MyDoctorHeader title = {"Therapy Screen"} navigation={this.props.navigation}/>
      <View style= {{flex:2,justifyContent: "center",alignItems: "center"}}>
      <Text style= {{fontSize: 20}}>Coming Soon</Text>
      </View>
      </View>
    );
  }
}

export default TherapyScreen;
