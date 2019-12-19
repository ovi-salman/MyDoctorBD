import React from "react";
import { View } from "react-native";
import { Header, Icon } from "react-native-elements";

export default function MyDoctorHeader(props) {
  console.log("Header", props);
  this.props = props;
  return (
    <Header
      placement="left"
      leftComponent={
        <Icon
          color="#fff"
          name="menu"
          onPress={() => this.props.navigation.toggleDrawer()}
        />
      }
      centerComponent={{
        text: props.title,
        style: { color: "#fff", fontWeight: "bold", fontSize: 18 }
      }}
      rightComponent={props.rightComponent}
    />
  );
}
