import React from "react";
import { View, Image, Dimensions, StyleSheet, Text } from "react-native";

export default function PackageTwo() {
  return (
    <View style={style.Container}>
      <View style={style.PackagesDetails}>
        <Text style={style.TextNormal}>Package 2</Text>
        <Text style={style.TextNormal}> 12 Hours 2500 Taka</Text>
        <Text style={style.TextNormal}> 6 Hours 2000 Taka</Text>
      </View>
      <View style={style.PackagesDesCeiption}>
        <Text style={style.Text}>
          Experrienced nurses or paramedic-level care for patients with tube
          feeding, IV medicines, catheter Care, Wound Care,suctioning and
          nebulization,personal hygine etc,
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  Container: {
    flexDirection: "row",
    borderStyle: "dotted",
    marginTop: 10
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
