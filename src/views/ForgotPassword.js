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


export default class ForgotPasswordComponent extends Component {
    constructor(props) {
        super(props);
      this.state ={
          email:'',
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
        
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                                <HeaderLoginModule viewName={'Forgot Password'} navigation = {this.props.navigation} />

                <KeyboardAwareScrollView style={{flex:1}}>
                    {/* here is the key image */}
                    <View style={styles.viewMain}>
                    <Image style={styles.image} source={require('../assets/Images/key.png')} />
                    <Text style={styles.textDescription}> We just need your registered Email id to send you password reset instruction.</Text>

                    <View style={{flexDirection:'row', marginBottom:'10%'}}>
                        <IconMaterialCommunity name="email" color={'gray'} style={styles.icon} />
                    <Input
                             label={'Enter Your Email ID'}
                                style={commonStyles.inputStyle}
                                placeholder={'Email'}
                                onChangeText={(text) => this.setState({ email: text })}
                                value={this.state.email}
                                charLimit={30}
                            />
                    </View>
                    
                    <View style={{flexDirection:'row', justifyContent:'space-evenly'}}  onPress={()=> this.props.navigation.navigate('Login')}>
                       <TouchableOpacity underlayColor="#25b6ad" style={[styles.buttonNotSelected]}>
                            <Text style={styles.textNotSelected}>Previous</Text>
                        </TouchableOpacity>

                        <TouchableOpacity underlayColor="#25b6ad" style={[styles.buttonSelected]} onPress={()=> this.props.navigation.navigate('Login')}>
                            <Text style={styles.textSelected}>Next</Text>
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