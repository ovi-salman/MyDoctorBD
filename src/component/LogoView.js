import React from "react";
import { View, Image, Dimensions } from "react-native";

export default function LogoView() {
  return (
    <Image
      style={{ width: Dimensions.get("window").width, height: 350,resizeMode: "stretch" }}
      source={require("../Images/slide2.jpeg")}
    />
  );
}
