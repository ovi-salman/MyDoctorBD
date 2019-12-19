import React from "react";
import { View, Image, Dimensions, StyleSheet, Text } from "react-native";

export default function PackageDetails(props) {
  return (
    <View style={style.Container}>
      <View style={style.PackagesDetails}>
        <Text style={style.TextNormal}>{props.data.packageName}</Text>
        <Text style={style.TextNormal}> {props.data.timeOne}</Text>
        <Text style={style.TextNormal}> {props.data.timeTwo}</Text>
      </View>
      <View style={style.PackagesDesCeiption}>
        <Text style={style.Text}>{props.data.description}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  Container: {
    flexDirection: "row",
    borderStyle: "dotted",
    marginBottom: 10
  },
  Text: {
    fontSize: 18,
    textAlign: "center"
  },
  TextNormal: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  PackagesDetails: {
    backgroundColor: "#89c4f4",
    flex: 1,
    marginTop: 5
  },
  PackagesDesCeiption: {
    backgroundColor: "#89c4f4",
    flex: 2,
    marginTop: 5
  }
});
