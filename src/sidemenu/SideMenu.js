import PropTypes from 'prop-types';
import React, {Component} from 'react';
// import {NavigationActions,StackActions} from 'react-navigation';
import {ScrollView, Text, View,Image,TouchableOpacity, Alert,AsyncStorage} from 'react-native';
import styles from './sidemenu.style'
// import {Icon} from "native-base";
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconZocial from 'react-native-vector-icons/Zocial';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Dashboard from '../views/Dashboard';

class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        console.log('route',route)
        // const navigateAction = NavigationActions.navigate({
        //     routeName: route,
        // });
        this.props.navigation.closeDrawer()
        this.props.navigation.navigate(route);
       
    };

    constructor(props){
        super(props);
        this.state={
            name:'Person name',
            email:''
        }
      this.arrayData = ["Dashboard","New Request", "My Packages", "Payment History", "Settings", "Logout" ];
    }

    componentWillMount(){
 
        // this._getNumberValue();

console.log(" in side menu ");

    }

    // async _getNumberValue(){
    //     const name = await AsyncStorage.getItem('name')
    //     console.log('LoginName',name);
    //     if(name == null){

    //     }else{
    //         this.setState({
    //             name:name
    //         });
    //     }
    // }

    render(){
        return(
            <View style={styles.container}>
 {/* <ScrollView> */}
                    <View style={styles.header}>
                      
                        <IconAntDesign name="close" style={styles.close} onPress={this.navigateToScreen('')}/>

                       
                        <View style={{flexDirection:'row'}}>
                        <View style={styles.avatar}>
                        <Image style={{height:84, width:84, borderRadius:42}} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                        </View>
                       

                       
                            <View style={{ marginTop:'27%'}}>
                                <Text style={styles.name}>Test User</Text>
                                <View style={{flexDirection:'row'}}>
                                    <IconZocial name='email' style={{fontSize: 18, paddingLeft:5, paddingRight:5, paddingTop:2}}/>
                                    <Text style={styles.emailText}>test@gmail.com</Text>
                                </View>
                           </View>
                      
                        </View>
                        </View>
                        <View style={{marginTop:'10%'}}>
                        <TouchableOpacity onPress={this.navigateToScreen('Dashboard')}>
                            <View style={styles.navItemStyle}>
                                <IconAntDesign style={styles.icon} name="dashboard"  />
                                <Text style={styles.text}>
                                    {this.arrayData[0]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.viewSingleLine}/>
                        <TouchableOpacity onPress={this.navigateToScreen('NewRequestPickupLocation')}>
                            <View style={styles.navItemStyle}>
                                <IconFontAwesome5 style={styles.icon} name="truck"  />
                                <Text style={styles.text}>
                                    {this.arrayData[1]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.viewSingleLine}/>
                        <TouchableOpacity onPress={this.navigateToScreen('MyPackages')}>
                            <View style={styles.navItemStyle}>
                                <IconSimpleLineIcons style={styles.icon} name="bag"  />
                                <Text style={styles.text}>
                                {this.arrayData[2]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.viewSingleLine}/>
                        <TouchableOpacity onPress={this.navigateToScreen('PaymentHistory')}>
                            <View style={styles.navItemStyle}>
                                <IconMaterialIcons style={styles.icon} name="payment"  />
                                <Text style={styles.text}>
                                {this.arrayData[3]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.viewSingleLine}/>
                        <TouchableOpacity onPress={this.navigateToScreen('MySettings')}>
                            <View style={styles.navItemStyle}>
                                <IconAntDesign style={styles.icon} name="setting"  />

                                <Text style={styles.text}>
                                {this.arrayData[4]}
                                </Text>
                            </View>

                        </TouchableOpacity>
                        <View style={styles.viewSingleLine}/>
                        <TouchableOpacity onPress={this.onClickLogout.bind(this)}>
                            <View style={styles.navItemStyle}>
                                <IconMaterialCommunityIcons style={styles.icon} name="logout"  />
                                <Text style={styles.text}>
                                {this.arrayData[5]}
                                </Text>
                            </View>

                        </TouchableOpacity>
                        <View style={styles.viewSingleLine}/>
                    </View>
                    
                    {/* </ScrollView> */}
            </View>
        )
    }

    onClickLogout(){
        Alert.alert(
            'Are you sure to logout',
            '',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress:this.onPressOk.bind(this) },
            ],
            { cancelable: false }
        )
    }
    onPressOk(){
        // AsyncStorage.removeItem('token', (err) => {
        //     console.log('KeyRemoved')
        // });
        this.props.navigation.navigate('Login');

    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;