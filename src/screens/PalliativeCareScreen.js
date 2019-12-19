import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  Alart,
} from "react-native";

import {Header} from "react-native-elements"
import MyDoctorHeader from "../component/MyDoctorHeader";
import Packages from "../component/Packages"
import PackageDetails from "../component/PackageDeatails"


class PalliativeCareScreen extends Component {
  state = {
  };

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    
  };

  



  render() {
    return (
      <View >
      <MyDoctorHeader title = {"Palliative Care"} navigation={this.props.navigation}/>
      <Packages   />
      <PackageDetails data = {{packageName: "Package 1", timeOne: "12 Hours 1500 Taka", timeTwo: "6 Hours 1000 Taka", description: "Assistance with activities of Daily Living [ADL's], range of motionexcercises, walking, movement & positioning, oral feading, recording and reporting vitals,insulin administration."}} />
      <PackageDetails data = {{packageName: "Package 2", timeOne: "12 Hours 2500 Taka", timeTwo: "6 Hours 2000 Taka", description: "Experrienced nurses or paramedic-level care for patients with tube feeding, IV medicines, catheter Care, Wound Care,suctioning and nebulization,personal hygine etc,"}} />
      
      </View>
    );
  }
}

export default PalliativeCareScreen;
