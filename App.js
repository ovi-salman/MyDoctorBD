import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Icon } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import DoctorAtHomeScreen from "./src/screens/DoctorAtHomeScreen";
import WindowOfOppurtunityScreen from "./src/screens/WindowOfOppurtunityScreen";
import HealthCheckUpScreen from "./src/screens/HealthCheckUpScreen";
import CounselingScreen from "./src/screens/CounselingScreen";
import NutrationScreen from "./src/screens/NutrationScreen";
import PalliativeCareScreen from "./src/screens/PalliativeCareScreen";
import TherapyScreen from "./src/screens/TherapyScreen";
import NonCommunicableScreen from "./src/screens/NonCommunicableScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StackNav  />
      
    </View>
  );
}

const MyDrawerNavigator = createDrawerNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        
        
        
        drawerIcon: (
          <Icon
            
            name="user-md"
            type="font-awesome"
            color="#19b5fe"
            size={30}
            
          />
        ),
        drawerLabel:( <Text style={{ fontSize: 12,alignSelf:"center" }}>User</Text>),
        
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        
        drawerLabel: <Text  style={{ fontSize: 20 }}>Home</Text>
      }
    },
    Login3: {
      screen: LoginScreen,
      navigationOptions: {
        drawerLabel: <Text style={{ fontSize: 20 }}>My Profile</Text>
      }
    },
    Login4: {
      screen: LoginScreen,
      navigationOptions: {
        drawerLabel: (
          <Text style={{ fontSize: 20 }}>My Request</Text>
        )
      }
    },
    Login1: {
      screen: LoginScreen,
      navigationOptions: {
  
        drawerLabel: <Text style={{ fontSize: 20 }}>Change Password</Text>
      }
    },
    Login5: {
      screen: LoginScreen,
      navigationOptions: {
       
        drawerLabel: <Text style={{ fontSize: 20 }}>Help</Text>
      }
    },
    Login2: {
      screen: LoginScreen,
      navigationOptions: {

        drawerLabel: (
          <Text style={{ fontSize: 20 }}>Logout</Text>
        )
      }
    },
  },
  {
    initialRouteName: "Login",
    drawerPosition: "left",
    drawerWidth: 250,
    drawerBackgroundColor: "#e4f1fe",
    contentOptions: {
      activeTintColor: "#19b5fe",
      inactiveTintColor: "#000000",
      activeBackgroundColor: "#ff5500",
      inactiveBackgroundColor: "#ffffff",
      itemsContainerStyle: {
        marginTop: 20
      },
      itemStyle: {
        marginTop: 10,
      },
      labelStyle: {
        fontSize: 16
      }
    }
  }
);

const MyApp = createAppContainer(MyDrawerNavigator);
const AppNavigator = createStackNavigator(
  {
    
    MyApp: MyApp,
    Login: LoginScreen,
    Home: HomeScreen,
    DoctorAtHome: DoctorAtHomeScreen,
    WindowOfOppurtunity: WindowOfOppurtunityScreen,
    HealthCheckUp: HealthCheckUpScreen,
    Counseling: CounselingScreen,
    NonCommunicable: NonCommunicableScreen,
    Nutration: NutrationScreen,
    Therapy: TherapyScreen,
    PalliativeCare: PalliativeCareScreen,
    
  },
  {
    headerMode: "none",
    
  }
);
const StackNav = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
