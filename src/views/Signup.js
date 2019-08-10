import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/signup.style'
import commonStyles from '../stylesheet/common.style';
import * as Animatable from 'react-native-animatable';
import Input from './common/Input';
import Logo from './common/Logo';
import HeaderLoginModule from './common/HeaderLoginModule'
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPwd: ''


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
                <HeaderLoginModule viewName={'Sign Up'} navigation={this.props.navigation} />

                <KeyboardAwareScrollView style={styles.container}>
                    <View style={{ flex: 1,marginBottom:'2%' }}>

                        <Image source={require('../assets/Images/logo_login.png')} style={{ flex: 0.5, alignSelf: 'center', marginTop: '10%', marginBottom: '10%' }} />

                        <View style={{ backgroundColor: 'white', flex: 1 }}>

                            {/* <Image source={require('../assets/Images/logo_login')} style={[styles.logo, { flex: 0.5 }]} />  */}

                            <View style={{ flex: 0.5 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: '2%' }}>
                                    <IconSimpleLine name="user" style={styles.icon} />
                                    <Input
                                        label={'User Name'}
                                        style={commonStyles.inputStyle}
                                        placeholder={'User Name'}
                                        onChangeText={(text) => this.setState({ userName: text })}
                                        value={this.state.userName}
                                        charLimit={30}
                                    />
                                </View>
                                
                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: '2%' }}>
                                    <IconMaterialCommunity name="email" style={styles.icon} />
                                    <Input
                                        label={'email'}
                                        style={commonStyles.inputStyle}
                                        placeholder={'Email'}
                                        onChangeText={(text) => this.setState({ email: text })}
                                        value={this.state.email}
                                        charLimit={30}
                                    />
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: '2%' }}>
                                    <IconSimpleLine name="user" style={styles.icon} />
                                    <Input
                                        label={'Phone Number'}
                                        style={commonStyles.inputStyle}
                                        placeholder={'Phone Number'}
                                        //keyboardType= 'number-pad'
                                        onChangeText={(text) => this.setState({ phoneNumber: text })}
                                        value={this.state.phoneNumber}
                                        charLimit={30}
                                    />
                                </View>

                                <View style={{ flexDirection: 'row',justifyContent: 'center', marginBottom: '2%'  }}>
                                    <IconMaterialIcons name="lock-open" style={styles.icon} />
                                    <Input
                                        label={'Password'}
                                        style={commonStyles.inputStyle}
                                        placeholder={'Password'}
                                        secureTextEntry={true}
                                        onChangeText={(text) => this.setState({ password: text })}
                                        value={this.state.password}
                                    />
                                </View>

                                <View style={{ flexDirection: 'row',justifyContent: 'center', marginBottom: '2%' }}>
                                    <IconMaterialIcons name="lock-open" style={styles.icon} />
                                    <Input
                                        label={'Confirm Password'}
                                        style={commonStyles.inputStyle}
                                        placeholder={'Confirm Password'}
                                        secureTextEntry={true}
                                        onChangeText={(text) => this.setState({ confirmPwd: text })}
                                        value={this.state.confirmPwd}
                                    />
                                </View>

                            </View>
                            <View style={{ marginTop: '10%', marginBottom: '10%' }}>

                                <TouchableOpacity underlayColor="#25b6ad" style={[styles.buttonSelected]}>
                                    <Text style={styles.textSelected}>Submit</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'center' }}>
                                <Text style={styles.textDontHaveAccount}>Already Registered?</Text>
                                <TouchableOpacity underlayColor="#25b6ad" style={[styles.signupButton]} onPress={() => this.props.navigation.navigate('Login')}>
                                    <Text style={styles.signupText}>Sign In</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }
}
