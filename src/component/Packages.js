import React from "react";
import { View, Image, Dimensions, StyleSheet, Text } from "react-native";

export default function Packages() {
  return (
    <View style={style.Container}>
      <Text style={style.Text}> Care Packages</Text>
    </View>
  );
}

const style = StyleSheet.create({
  Container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  Text: {
    fontSize: 25,
    fontWeight: "bold"
  }
});
