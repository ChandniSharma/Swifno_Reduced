import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/login.style'
import commonStyles from '../stylesheet/common.style';
import * as Animatable from 'react-native-animatable';
import Input from './common/Input';
import Logo from './common/Logo';
import HeaderLoginModule from './common/HeaderLoginModule'
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            isRemember: false,
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
    onPressFacebookButton() {
        alert('Coming Soon ...')
    }
    render() {
        const { data, errors, handleChange, login, onSubmit, fetching } = this.props;
        console.log("errors====", errors, "isRequesting===", login, "Fetching ----", fetching);
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                <HeaderLoginModule viewName={'Login'} navigation={this.props.navigation} />

                <KeyboardAwareScrollView style={styles.container}>
                    <View style={{ flex: 1,marginBottom:'2%' }}>
                        <View style={{ backgroundColor: 'white', flex: 1 }}>

                            <Image source={require('../assets/Images/logo_login.png')} style={{ flex: 0.5, alignSelf: 'center', marginTop: '10%', marginBottom: '10%' }} />
                            <View style={{ flex: 0.5 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: '2%' }}>
                                    <IconSimpleLine name="user" style={styles.icon} />

                                    <Input
                                        label={'User Name'}
                                        style={commonStyles.inputStyle}
                                        placeholder={'User Name'}
                                        onChangeText={(text) => this.setState({ userName: text })}
                                        value={data.mobile}
                                        onChangeText={val => handleChange('mobile', val)}
                                        charLimit={30}
                                    />

                                </View>
                                {/* <View style={styles.viewSingleLineError} /> */}
                                {/* {errors.mobile && !data.mobile ? <Animatable.Text animation="fadeIn" style={styles.errorText}> Enter your mobile number, please</Animatable.Text> : null} */}

                                <View style={{ flexDirection: 'row', marginBottom: '2%', justifyContent: 'center' }}>
                                    <IconMaterialIcons name="lock-open" style={styles.icon} />
                                    <Input
                                        label={'Password'}
                                        style={commonStyles.inputStyle}
                                        placeholder={'Password'}
                                        secureTextEntry={true}
                                        onChangeText={val => handleChange('password', val)}
                                        value={data.password}
                                    />
                                </View>
                                {/* <View style={styles.viewSingleLineError} /> */}
                               
                                {/* {errors.password && !data.password ? <Animatable.Text animation="fadeIn" style={styles.errorText}> Password is required</Animatable.Text> : null} */}

                            </View>
                            <View style={styles.rememberView}>

                                <TouchableOpacity style={styles.tickMarkView} onPress={() => this.onClickRememberMe()}>
                                    {this.state.isRemember ? <IconMaterialIcons name="check-box" color="gray" style={styles.iconCheckBox} /> : <IconMaterialIcons name="check-box-outline-blank" color="gray" style={styles.iconCheckBox} />}
                                </TouchableOpacity>
                                
                                <View style={{flex: 0.8, marginTop:'1.5%'}}>
                                <TouchableOpacity style={styles.rememberBtn} onPress={() => this.onClickRememberMe()}>
                                    <Text style={styles.rememberText}> Remember me</Text>
                                </TouchableOpacity>
                                </View>
                                
                            </View>
                            <View style={{ marginTop: '2%', justifyContent: 'center', }}>
                                <TouchableOpacity underlayColor="#25b6ad" onPress={onSubmit} style={[styles.buttonSelected]}>
                                {/* <TouchableOpacity underlayColor="#25b6ad" onPress={()=>this.props.navigation.navigate('DrawerNavigator')} style={[styles.buttonSelected]}> */}

                                    {(login.loading && fetching) ? <ActivityIndicator size="large" color="white" /> : <Text style={styles.textSelected} >Log In</Text>}
                                </TouchableOpacity>
                            </View>

                            {/* 
                            <TouchableOpacity underlayColor="#25b6ad" style={[styles.buttonSelected]}>
                                <Text style={styles.textSelected}>Login</Text>
                            </TouchableOpacity> */}



                            <View style={styles.forgotPwdBtnView}>
                                <TouchableOpacity style={styles.forgotPwdBtn} onPress={() => this.props.navigation.navigate('ForgotPasswordComponent')}>
                                    <Text style={styles.forgotPwdText}> Forgot Password?</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.orText}>OR</Text>

                            <View style={{ marginBottom: '5%', alignItems: 'center' }}>
                                <TouchableOpacity underlayColor="#25b6ad" style={styles.facebookBtn} onPress={() => this.onPressFacebookButton()}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginLeft: '2%', marginRight: '2%' }}>
                                        <IconAntDesign name="facebook-square" style={{ fontSize: 22, marginRight: '2%', color: 'white', marginLeft: '2%' }} />
                                        <Text style={styles.fbText}>Login with Facebook</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>


                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <Text style={styles.textDontHaveAccount}>Don't have an account yet? </Text>
                                <TouchableOpacity underlayColor="#25b6ad" style={[styles.signupButton]} onPress={() => this.props.navigation.navigate('Signup')}>
                                    <Text style={styles.signupText}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }
}
