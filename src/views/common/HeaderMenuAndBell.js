import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
//import LinearGradient from 'react-native-linear-gradient';
//import Logo from './logo';
import IconEvilIcons from "react-native-vector-icons/EvilIcons";
import IconEntypo from 'react-native-vector-icons/Entypo';
//import Hamburger from 'react-native-hamburger';
import Icon from "react-native-vector-icons/AntDesign";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";


export default class HeaderMenuAndBell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isScrollDown: false,
            headerColorMix: ['rgb(42, 173,177)', 'rgb(131, 110, 198)', 'rgb(134, 103, 200)'],
            headerColor: ['rgb(42, 173,177)', 'rgb(93, 152, 179)'],
            isContactInfoClick: false,
            isDropDownclick: false,
            isSideMenuClick: false,
            isSearchbarDataShow: false,
            isCrossClick: false,
            active: false,
            isBottomMobileShow: true,
            mobileNumber: '',
            isNotificationShow: false,
        }
    }

    render() {

        const { colors, onPressPopup, onPressBell, isShowLeftButton, notificationCount, isBackButtonShow, viewName, isShowRightButton } = this.props;

        return (
            <View style={styles.mainView}>
                {isShowLeftButton ? <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
                    <IconEntypo name="menu" style={styles.icon} onPress={() => this.props.navigation.openDrawer()} />
                </TouchableOpacity> : <View style={{ flex: 0.2 }} />}

                <Text style={styles.titleStyle}> {viewName.toUpperCase()}</Text>

                {isShowRightButton ? <TouchableOpacity style={styles.imageRight} onPress={onPressBell}>
                    <IconEvilIcons name="search" color="black" style={styles.icon} />
                </TouchableOpacity> : <View style={{ flex: 0.15, }} />}
            </View>
        )

    }
}

const styles = {
    mainView: {
        flexDirection: 'row',
        height: 64,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(246, 205, 74)',
    },
    imageLeft: {
        flex: 0.15,
        height: '100%',
        justifyContent: 'center',

    },

    titleStyle: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        flex: 0.7,
        fontWeight: 'bold',
    },
    imageRight: {

        flex: 0.15,
        height: '100%',
        justifyContent: 'center'
    },
    icon: {
        fontSize: 30,
        alignSelf: 'center',
        tintColor: 'black',

        // fontSize:30,paddingTop:25, color:'black', paddingTop:30
    }
}