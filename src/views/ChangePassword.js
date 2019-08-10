import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/forgotPassword.style'
import commonStyles from '../stylesheet/common.style';
import * as Animatable from 'react-native-animatable';
import { isEmpty } from "lodash";
import HeaderLoginModule from './common/HeaderLoginModule'; 
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from './common/Input';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class ChangePassword extends Component {
    constructor(props) {
        super(props);
      this.state ={
          email:'',
          oldPassword:'',
          password: '',
          confirmPwd: ''
            
      }
    }
    // fadeInDownHeader = () => this.refs.headerView.fadeInDown(1000);
    // fadeInMainView = () => this.refs.mainView.fadeIn(2000).then(endState => console.log(endState.finished ? 'fadein finished':" cancelled"))

    // _navigateToGetStartedView = () => {
    //     this.props.navigation.navigate("Signup");
    //   }

      componentDidMount(){
        // this.fadeInDownHeader();
        // this.fadeInMainView();
    }
    
    render() {
        const {_submit, data, errors, handleChange} = this.props;
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                                <HeaderLoginModule viewName={'Change Password'} navigation = {this.props.navigation} />

                <KeyboardAwareScrollView style={{flex:1}}>
                    {/* here is the key image */}
                    <View style={styles.viewMain}>
                    
                    <View style={{ flexDirection: 'row' }}>
                                    <IconMaterialIcons name="lock-open" style={styles.icon} />
                                    <Input
                                        label={'Old Password'}
                                        style={commonStyles.inputStyle}
                                        placeholder={'Password'}
                                        secureTextEntry={true}
                                        onChangeText={(text) => handleChange('oldPassword',text )}
                                        value={data.oldPassword}
                                    />
                                </View>

                    <View style={{ flexDirection: 'row' }}>
                                    <IconMaterialIcons name="lock-open" style={styles.icon} />
                                    <Input
                                        label={'New Password'}
                                        style={commonStyles.inputStyle}
                                        placeholder={'Password'}
                                        secureTextEntry={true}
                                        onChangeText={(text) => handleChange('newPassword',text )}
                                        value={data.newPassword}
                                    />
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <IconMaterialIcons name="lock-open" style={styles.icon} />
                                    <Input
                                        label={'Confirm Password'}
                                        style={commonStyles.inputStyle}
                                        placeholder={'Confirm Password'}
                                        secureTextEntry={true}
                                        onChangeText={(text) =>handleChange('confirmPassword',text )}
                                        value={data.confirmPassword}
                                    />
                                </View>
                    
                    <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:'15%'}}  onPress={()=> this.props.navigation.navigate('Login')}>
                       <TouchableOpacity underlayColor="#25b6ad" style={[styles.buttonNotSelected]}>
                            <Text style={commonStyles.textNotSelected}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity underlayColor="#25b6ad" style={[styles.buttonSelected]} onPress={()=> this.props.navigation.navigate('DrawerNavigator')}>
                            <Text style={commonStyles.textSelected}>Submit</Text>
                        </TouchableOpacity>
</View>
                       </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>

        )
    }
}

{/* */ }
                // </View> */}