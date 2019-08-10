/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './src/reducers';


import { Platform, StyleSheet, Text, View, AsyncStorage, Alert } from 'react-native';
//import {createStackNavigator ,createSwitchNavigator, SafeAreaView} from 'react-navigation';
import WelcomeScreen from './src/welcome/WelcomeScreen';
import LoginContainer from "./src/containers/Login";
//import Login from "./src/views/Login";
import ForgotPasswordComponent from './src/views/ForgotPassword';
import Tutorial from './src/views/Tutorial';
import Dashboard from './src/views/Dashboard';
import Signup from './src/views/Signup';
import ChangePasswordContainer from './src/containers/ChangePassword';
//import Route from './src/views/common/Route';
import SideMenu from './src/sidemenu/SideMenu';
import MyPackages from './src/views/MyPackages/MyPackages';
import { createStackNavigator, createAppContainer, createDrawerNavigator, DrawerItems, } from 'react-navigation';
import MyPackageDetail from './src/views/MyPackages/MyPackageDetail';
import MySettings from './src/views/MySettings';
import CourierDetail from './src/views/CourierDetails';
import SubmitReview from './src/views/SubmitReview';
import ViewFeedback from './src/views/ViewFeedback';
import NewRequestSummary from './src/views/NewRequest/Summary';
import PaymentHistory from './src/views/PaymentHistory';
import TrackPackage from './src/views/TrackPackage';
import NewRequestPackageDetail from './src/views/NewRequest/NewRequestPackageDetail';
import ReviewRefundRequest from './src/views/ReviewRefundRequest';
import NewRequestDropoffLocation from './src/views/NewRequest/NewRequestDropoffLocation';
import NewRequestPickupLocation from './src/views/NewRequest/NewRequestPickupLocation';
import NewRequestRecipientDetail from './src/views/NewRequest/NewRequestRecipientDetail';
import RefundRequest from './src/views/RefundRequest';
import Route from './src/views/common/Route';

// import { importDeclaration } from '@babel/types';
//import MapViewGoogle from './src/views/common/MapViewGoogle';

// const MainNavigator = createStackNavigator({
//   Tutorial:{screen: Tutorial},
//   Login: {screen: LoginContainer},
//   ForgotPasswordComponent: {screen: ForgotPasswordComponent},
//   Dashboard:{screen:Dashboard},
//   Signup: {screen: Signup},
//   ChangePasswordContainer: {screen: ChangePasswordContainer},
//   Route:{screen:Route},
// },{
//   //initialRouteName: 'Tutorial',
//   initialRouteName: 'ChangePasswordContainer',
//   gesturesEnabled: false,
//   headerMode: 'none',
// }
// );

// const RootNavigator = createAppContainer(MainNavigator)

const DrawerNavigator = new createDrawerNavigator(
  {
    Dashboard: {
      screen: Dashboard, navigationOptions: {
        header: null
      },
    },
    NewRequestPickupLocation: {
      screen: NewRequestPickupLocation, navigationOptions: {
        header: null
      },
    },
    NewRequestDropoffLocation: {
      screen: NewRequestDropoffLocation, navigationOptions: {
        header: null
      },
    },
    NewRequestSummary: {
      screen: NewRequestSummary, navigationOptions: {
        header: null
      },
    },

    MyPackages: {
      screen: MyPackages, navigationOptions: {
        header: null
      },
    },

    MySettings: {
      screen: MySettings, navigationOptions: {
        header: null
      }
    },
    CourierDetail: {
      screen: CourierDetail, navigationOptions: {
        header: null
      }
    },

    SubmitReview: {
      screen: SubmitReview, navigationOptions: {
        header: null
      }
    },

    ViewFeedback: {
      screen: ViewFeedback, navigationOptions: {
        header: null
      }
    },

    NewRequestSummary: {
      screen: NewRequestSummary, navigationOptions: {
        header: null
      }
    },

    PaymentHistory: {
      screen: PaymentHistory, navigationOptions: {
        header: null
      }
    },

    TrackPackage: {
      screen: TrackPackage, navigationOptions: {
        header: null
      }
    },

    NewRequestPackageDetail: {
      screen: NewRequestPackageDetail, navigationOptions: {
        header: null
      }
    },

    RefundRequest: {
      screen: RefundRequest, navigationOptions: {
        header: null
      }
    },


  },
  {
    contentComponent: SideMenu
  }
)

const LoginNavigator = createStackNavigator({
  Tutorial: { screen: Tutorial },
  Login: { screen: LoginContainer },
  ForgotPasswordComponent: { screen: ForgotPasswordComponent },
  Signup: { screen: Signup },
  ChangePasswordContainer: { screen: ChangePasswordContainer },
  DrawerNavigator: { screen: DrawerNavigator },
  MyPackages: { screen: MyPackages },
  MyPackageDetail: { screen: MyPackageDetail },
  MySettings: { screen: MySettings },
  CourierDetail: { screen: CourierDetail },
  SubmitReview: { screen: SubmitReview },
  ViewFeedback: { screen: ViewFeedback },
  NewRequestSummary: { screen: NewRequestSummary },
  PaymentHistory: { screen: PaymentHistory },
  TrackPackage: { screen: TrackPackage },
  ReviewRefundRequest: { screen: ReviewRefundRequest },
  NewRequestPackageDetail: { screen: NewRequestPackageDetail },
  NewRequestDropoffLocation: { screen: NewRequestDropoffLocation },
  NewRequestPickupLocation: { screen: NewRequestPickupLocation },
  NewRequestRecipientDetail: { screen: NewRequestRecipientDetail },
  RefundRequest : { screen: RefundRequest },
  Route: {screen:Route},
  // MapViewGoogle:{screen:MapViewGoogle}
}, {
    initialRouteName: 'MyPackageDetail',
    // initialRouteName: 'CourierDetail',
    gesturesEnabled: false,
    headerMode: 'none',
  }
);

const RootNavigator = createAppContainer(LoginNavigator)

const store = createStore(rootReducer, applyMiddleware(thunk));

//export default RootNavigator

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
