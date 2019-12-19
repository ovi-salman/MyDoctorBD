import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  Alart,
  Dimensions
} from "react-native";

import {Header} from "react-native-elements"
import MyDoctorHeader from "../component/MyDoctorHeader";


class DoctorAtHomeScreen extends Component {
  state = {
  };

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    
  };

  



  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyDoctorHeader title={"My Doctor Point"} navigation={this.props.navigation}/>
        <View
        
          style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
        >
          <Text style= {{alignSelf: "center", fontSize: 20, fontStyle: "italic",fontWeight: "bold", marginBottom: 10}}>Your Nearby Points</Text>
          <Image
          style={{ width: Dimensions.get("window").width, height: 500 }}
          source={require('../Images/GoogleMap.png')}
        />
        </View>
      </View>

    );
  }
}

export default DoctorAtHomeScreen;
