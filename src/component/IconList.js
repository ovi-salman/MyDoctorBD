import React from "react";
import {
  View,
  Image,
  Dimensions,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Icon } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

export default function IconList(props) {
  this.props = props;

  return (
    <View style={{ margin: 12, justifyContent: "space-around" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity>
          <Icon
            raised
            name="user-md"
            type="font-awesome"
            color="#19b5fe"
            size={50}
            onPress={() => this.props.navigation.navigate("DoctorAtHome")}
          />
          <Text style={style.Text}>My Doctor Point</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            raised
            name="heartbeat"
            type="font-awesome"
            color="#19b5fe"
            size={50}
            onPress={() => this.props.navigation.navigate("HealthCheckUp")}
          />
          <Text style={style.Text}>Health Check Up</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity>
          <Icon
            raised
            name="stethoscope"
            type="font-awesome"
            color="#19b5fe"
            size={50}
            onPress={() => this.props.navigation.navigate("WindowOfOppurtunity")}
          />
          <Text style={style.Text}>Window Of Oppurtunity</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            raised
            name="toggle-down"
            type="font-awesome"
            color="#19b5fe"
            size={50}
            onPress={() => this.props.navigation.navigate("NonCommunicable")}
          />
          <Text style={style.Text}>Non Communicable</Text>
          <Text style={style.Text}>Disease</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity>
          <Icon
            raised
            name="heart"
            type="font-awesome"
            color="#19b5fe"
            size={50}
            onPress={() => this.props.navigation.navigate("PalliativeCare")}
          />
          <Text style={style.Text}>Palliative Care</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            raised
            name="list"
            type="font-awesome"
            color="#19b5fe"
            size={50}
            onPress={() => this.props.navigation.navigate("Nutration")}
          />
          <Text style={style.Text}>Nutration & Diet</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity>
          <Icon
            raised
            name="comments"
            type="font-awesome"
            color="#19b5fe"
            size={50}
            onPress={() => this.props.navigation.navigate("Counseling")}
          />
          <Text style={style.Text}>Counseling</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            raised
            name="user-md"
            type="font-awesome"
            color="#19b5fe"
            size={50}
            onPress={() => this.props.navigation.navigate("Therapy")}
          />
          <Text style={style.Text}>Therapy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  Container: {
    width: 100,
    marginTop: 30
  },
  Text: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center"
  }
});
