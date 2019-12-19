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


class HealthCheckUpScreen extends Component {
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
      <MyDoctorHeader title = {"Health Check Up"} navigation={this.props.navigation}/>
      <Packages/>
      <PackageDetails data = {{packageName: "Package 1", timeOne: "6 months 6000 Taka", timeTwo: "", description: "Basic investigation and an experienced  M.B.B.S Doctor nurse and phlebotomist team visit at home"}} />
      <PackageDetails data = {{packageName: "Package 2", timeOne: "12 months 10000 Taka", timeTwo: "", description: "Basic investigation and an experienced  M.B.B.S Doctor nurse and phlebotomist team visit at home"}} />
      </View>
    );
  }
}

export default HealthCheckUpScreen;
