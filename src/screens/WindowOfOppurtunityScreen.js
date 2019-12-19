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
import Packages from "../component/Packages"
import PackageDetails from "../component/PackageDeatails"


class WindowOfOppurtunityScreen extends Component {
  state = {
  };

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    
  };

  



  render() {
    return (
      <View>
      <MyDoctorHeader title = {"Window Of Oppurtunity"} navigation={this.props.navigation}/>
      <Packages/>
      <PackageDetails data = {{packageName: "Mother & Baby care", timeOne: "Per Visit 2000 Taka", timeTwo: "", description: "Experienced M.B.B.S Doctor, experienced Nurse and Phlebotomist team visit at Home"}} />
      </View>
    );
  }
}

export default WindowOfOppurtunityScreen;
