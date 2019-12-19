import React from "react";
import { View, Image, Dimensions, StyleSheet, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
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



const MyDrawerNavigator = createDrawerNavigator(
    {
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              raised
              name="home"
              type="font-awesome"
              color="#19b5fe"
              size={25}
            />
          ),
          drawerLabel: <Text style={{ fontSize: 20 }}>Home</Text>
        }
      },
      DoctorAtHome: {
        screen: DoctorAtHomeScreen,
        navigationOptions: {
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              raised
              name="user-md"
              type="font-awesome"
              color="#19b5fe"
              size={25}
            />
          ),
          drawerLabel: <Text style={{ fontSize: 20 }}>Doctor At Home</Text>
        }
      },
      WindowOfOppurtunity: {
        screen: WindowOfOppurtunityScreen,
        navigationOptions: {
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              raised
              name="stethoscope"
              type="font-awesome"
              color="#19b5fe"
              size={25}
            />
          ),
          drawerLabel: (
            <Text style={{ fontSize: 20 }}>Window Of {"\n"}Oppurtunity</Text>
          )
        }
      },
      HealthCheckUp: {
        screen: HealthCheckUpScreen,
        navigationOptions: {
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              raised
              name="heartbeat"
              type="font-awesome"
              color="#19b5fe"
              size={25}
            />
          ),
          drawerLabel: <Text style={{ fontSize: 20 }}>Health Check Up</Text>
        }
      },
      Counseling: {
        screen: CounselingScreen,
        navigationOptions: {
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              raised
              name="comments"
              type="font-awesome"
              color="#19b5fe"
              size={25}
            />
          ),
          drawerLabel: <Text style={{ fontSize: 20 }}>Couseling</Text>
        }
      },
      NonCommunicable: {
        screen: NonCommunicableScreen,
        navigationOptions: {
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              raised
              name="toggle-down"
              type="font-awesome"
              color="#19b5fe"
              size={25}
            />
          ),
          drawerLabel: (
            <Text style={{ fontSize: 20 }}>Non Communicable Disease</Text>
          )
        }
      },
  
      Nutration: {
        screen: NutrationScreen,
        navigationOptions: {
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              raised
              name="list"
              type="font-awesome"
              color="#19b5fe"
              size={25}
            />
          ),
          drawerLabel: <Text style={{ fontSize: 20 }}>Nutration & Diet</Text>
        }
      },
      Therapy: {
        screen: TherapyScreen,
        navigationOptions: {
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              raised
              name="user-md"
              type="font-awesome"
              color="#19b5fe"
              size={25}
            />
          ),
          drawerLabel: <Text style={{ fontSize: 20 }}>Therapy</Text>
        }
      },
      PalliativeCare: {
        screen: PalliativeCareScreen,
        navigationOptions: {
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              raised
              name="heart"
              type="font-awesome"
              color="#19b5fe"
              size={25}
            />
          ),
          drawerLabel: <Text style={{ fontSize: 20 }}>Palliative Care</Text>
        }
      }
    },
    {
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
          marginTop: 10
        },
        labelStyle: {
          fontSize: 16
        }
      }
    }
  );
  
  const MyApp = createAppContainer(MyDrawerNavigator);
  


  export default MyApp;