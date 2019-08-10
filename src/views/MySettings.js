import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, Switch } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/mySettings.style';
import commonStyles from '../stylesheet/common.style';
import * as Animatable from 'react-native-animatable';
import Input from './common/Input';
import Logo from './common/Logo';
import HeaderLoginModule from './common/HeaderLoginModule'
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderMenuAndBell from './common/HeaderMenuAndBell';

export default class MySettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            uploadPicture: '',
            isBidReceived: true,
            isBidStatus: true,
        }
    }

    fadeInMainView = () => this.refs.mainView.fadeIn(2000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
    fadeIn = () => this.refs.titleText.fadeIn(500).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

    fadeInDownHeader = () => this.refs.headerView.fadeInDown(1000);

    moveTextUp1 = () => this.refs.viewTxtInputCat.fadeInUp(1000).then(this.moveSecondViewUp());

    moveTextUp2 = () => this.refs.viewTxtInputSubCat.fadeInUp(2000).then(endState => endState.finished ? "finish " : console.log('finish not'));

    moveToForgotPasswordView = () => {
        this.props.navigation.navigate('ForgotPasswordComponent');
    }
    onClickRememberMe() {
        this.setState({ isRemember: !this.state.isRemember });
    }
    render() {
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                <HeaderLoginModule viewName={'My Settings'} navigation={this.props.navigation} />

                <KeyboardAwareScrollView style={styles.container}>
                    <View style={{ flex: 1, marginBottom: '2%', marginTop: '5%' }}>
                        <View style={{ flex: 1 }}>

                            <Text style={[commonStyles.textTitleSubmitReview, { marginLeft: '5%', fontSize: 15, marginBottom: '5%', }]}>Profile Details</Text>
                            <View style={{ flexDirection: 'row', flex: 0.3, }}>
                                <Text style={[commonStyles.textDescriptionDetail, { marginLeft: '5%' }]}>Merchant Key:</Text>
                                <Text style={{ textDecorationLine: 'underline' }}> 7fcl56ytrjkluop56</Text>
                            </View>


                            <View style={{ flex: 0.4 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: '2%' }}>
                                    <IconSimpleLine name="user" style={styles.icon} />
                                    <Input
                                        label={'First Name'}
                                        style={commonStyles.inputStyle}
                                        placeholder={'First Name'}
                                        onChangeText={(text) => this.setState({ userName: text })}
                                        value={this.state.userName}
                                        charLimit={30}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: '2%' }}>
                                    <IconSimpleLine name="user" style={styles.icon} />
                                    <Input
                                        label={'Last Name'}
                                        style={commonStyles.inputStyle}
                                        placeholder={'First Name'}
                                        onChangeText={(text) => this.setState({ userName: text })}
                                        value={this.state.userName}
                                        charLimit={30}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: '2%' }}>
                                    <IconSimpleLine name="phone" style={styles.icon} />
                                    <Input
                                        label={'Phone No'}
                                        style={commonStyles.inputStyle}
                                        placeholder={'Phone Number'}
                                        //keyboardType= 'number-pad'
                                        onChangeText={(text) => this.setState({ phoneNumber: text })}
                                        value={this.state.phoneNumber}
                                        charLimit={30}
                                    />
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: '2%' }}>
                                    <IconSimpleLine name="camera" style={styles.icon} />
                                    <Input
                                        label={'Upload Picture'}
                                        style={commonStyles.inputStyle}
                                        placeholder={'First Name'}
                                        onChangeText={(text) => this.setState({ userName: text })}
                                        value={this.state.userName}
                                        charLimit={30}
                                    />

                                   

                                        <TouchableOpacity style={[styles.buttonNotSelected]}>
                                            <Text>Browse</Text>
                                        </TouchableOpacity>

                                   
                                </View>
                                {/* <Image source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} style={{ width: 60, height: 60, marginLeft: '12%' }} /> */}

                            </View>
                            <View style={styles.viewSingleLine}/>

                            <Text style={[commonStyles.textTitleSubmitReview, { marginLeft: '5%', fontSize: 15, marginBottom: '5%', }]}>Notifications</Text>

                            <View style={{ flex: 0.3, marginLeft:'5%' }}>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={[commonStyles.textDescriptionDetail, {flex:0.8}]}>Bid Received</Text>
                                    <View style={{flex:0.2}}>
                                        <Switch
                                        //  onValueChange = {props.toggleSwitch1}
                                        //  value = {props.switch1Value}
                                        />
                                    </View>

                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={[commonStyles.textDescriptionDetail, {flex:0.8}]}>Bid Status</Text>
                                    <View style={{flex:0.2}}>
                                        <Switch
                                        //  onValueChange = {props.toggleSwitch1}
                                        //  value = {props.switch1Value}
                                        />
                                    </View>
                                </View>

                                <View style={styles.buttonBigNotSelected}>
                                    <TouchableOpacity >
                                        <Text style={commonStyles.textNotSelected}>Submit</Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={{marginTop:'5%'}} />
                                <View style={[styles.buttonBigSelected]}>
                                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('ChangePasswordContainer')}>
                                        <Text style={commonStyles.textSelected}>Change Password</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }
}
