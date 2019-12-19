import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  Alart,
  Dimensions,
  ScrollView
} from "react-native";
import { StackNavigator } from "react-navigation";

import { Header, Icon } from "react-native-elements";
import MyDoctorHeader from "../component/MyDoctorHeader";
import LogoView from "../component/LogoView";
import IconList from "../component/IconList";
import DoctorAtHomeScreen from "./DoctorAtHomeScreen";
import { createAppContainer, createStackNavigator } from "react-navigation";

class HomeScreen extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.props = props;
    console.log("home", this.props.navigation);
  }

  componentDidMount = () => {};

  render() {
    return (
      <ScrollView>
        <MyDoctorHeader
          title={"My Doctor BD"}
          navigation={this.props.navigation}
        />
        <LogoView />
        <IconList navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}

export default HomeScreen;
