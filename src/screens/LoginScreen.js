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
  SafeAreaView,
  ScrollView
} from "react-native";

import { Header, Input, Icon, Button } from "react-native-elements";

class LoginScreen extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {};

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Image
              style={{
                width: Dimensions.get("window").width,
                height: 400,
                resizeMode: "stretch"
              }}
              source={require("../Images/slide1.jpeg")}
            />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Input
              placeholder="            User Name"
              leftIcon={
                <Icon
                  name="user-md"
                  type="font-awesome"
                  color="#19b5fe"
                  size={24}
                />
              }
            />
            <Input
              placeholder="            Password"
              leftIcon={
                <Icon
                  name="key"
                  type="font-awesome"
                  color="#19b5fe"
                  size={24}
                />
              }
            />
            <Button style={{ marginTop: 10 }} title="Sing In" onPress={() => this.props.navigation.navigate("Home")} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default LoginScreen;
