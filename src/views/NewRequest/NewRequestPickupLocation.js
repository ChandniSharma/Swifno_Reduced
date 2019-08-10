import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import styles from '../../stylesheet/newRequest.style';
import commonStyle from '../../stylesheet/common.style';
import HeaderMenuAndBell from '../common/HeaderMenuAndBell';
import { SafeAreaView } from 'react-navigation';
import { Picker } from 'react-native-picker-dropdown'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Route from '../common/Route'
export default class NewRequestPickupLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state: 'MP',
            isDateTimePickerVisible: false,

        }
        this.onValueChange = this.handleValueChange.bind(this)

    }
    handleValueChange(state) {
        this.setState({ state })
    }

    render() {
        return (

            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>

                <View style={{ flex: 1 }}>

                    <HeaderMenuAndBell viewName={'New Request'} isShowLeftButton={true} isShowRightButton={false} navigation={this.props.navigation} />

                    <KeyboardAwareScrollView style={[styles.container,  ]}>
                        <View style={{ width:'100%', height:'100%',marginBottom:'2%'}}>

                            {/* dot view */}
                            <View style={[styles.viewDots, { flex: 0.1 }]} />

                            <View style={{ flex: 0.4 }}>

                                <View style={[styles.topHeadingView]}>
                                    <Text style={styles.textHeading}>Enter Pickup Location</Text>
                                </View>

                                <View style={{ marginTop: '5%' }}>
                                    <Picker
                                        selectedValue={this.state.state}
                                        onValueChange={this.onValueChange}
                                        mode="dialog"
                                        style={styles.picker}
                                    >
                                        <Picker.Item label="Madhya Pradesh" value="MP" />
                                        <Picker.Item label="Rajasthan" value="RJ" />
                                        <Picker.Item label="Gujrat" value="GJ" />
                                        <Picker.Item label="Chhatisgarh" value="CH" />
                                    </Picker>
                                </View>

                                <TextInput
                                    style={styles.textInputNotSelected}
                                    placeholder='Enter Area'
                                />

                                <TextInput
                                    style={styles.textInputNotSelected}
                                    placeholder='Enter Address'
                                />
                            </View>

                            <View style={[styles.mapView]}>
                                <Route />
                            </View>


                            <View style={[styles.viewBottomButtons, {flex:0.3}]}>
                                <TouchableOpacity style={[styles.buttonNotSelected]} onPress={() =>  this.props.navigation.goBack()}>
                                    <Text style={commonStyle.textNotSelected}>Back</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={[styles.buttonSelected]} onPress={() => this.props.navigation.navigate('NewRequestDropoffLocation')}>
                                    <Text style={commonStyle.textSelected}>Next</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                </View>
            </SafeAreaView>)
    }
}