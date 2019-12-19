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

import { Header } from "react-native-elements";
import MyDoctorHeader from "../component/MyDoctorHeader";
import Packages from "../component/Packages";
import PackageDetails from "../component/PackageDeatails";

class NonCommunicableScreen extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {};

  render() {
    return (
      <View>
        <MyDoctorHeader
          title={"Non Communicable Diease"}
          navigation={this.props.navigation}
        />
        <Packages />
        <PackageDetails
          data={{
            packageName: "Package 1",
            timeOne: "6 months 16000 Taka",
            timeTwo: "",
            description:
              "Basic investigation and as experienced M.B.B.S  Doctor visit at home . 1 visit per months and 1 telephone call per weak"
          }}
        />
        <PackageDetails
          data={{
            packageName: "Package 2",
            timeOne: "12 months 28000 Taka",
            timeTwo: "",
            description:
              "Basic investigation and as experienced M.B.B.S  Doctor team visit at home . 1 visit per months and 1 telephone call per weak"
          }}
        />
      </View>
    );
  }
}

export default NonCommunicableScreen;
