import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import styles from '../../stylesheet/newRequest.style';
import commonStyle from '../../stylesheet/common.style';
import HeaderMenuAndBell from '../common/HeaderMenuAndBell';
import { SafeAreaView } from 'react-navigation';
import { Picker } from 'react-native-picker-dropdown'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Route from '../common/Route'

export default class NewRequestDropoffLocation extends Component {
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
                    {/* dot view */}
                    <KeyboardAwareScrollView style={[styles.container,]}>
                        <View style={{ width: '100%', height: '100%', marginBottom: '2%' }}>

                            <View style={styles.viewDots} />
                            <View style={styles.topHeadingView}>
                                <Text style={styles.textHeading}>Enter Dropoff Location</Text>
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
                            <View style={styles.mapView}>
                                <Route />
                            </View>

                            <View style={styles.viewBottomButtons}>
                                <TouchableOpacity style={[styles.buttonNotSelected]} onPress={() =>  this.props.navigation.goBack()}>
                                    <Text style={commonStyle.textNotSelected}>Back</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={[styles.buttonSelected]} onPress={() => this.props.navigation.navigate('NewRequestPackageDetail')}>
                                    <Text style={commonStyle.textSelected}>Next</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </KeyboardAwareScrollView>
                </View>

            </SafeAreaView>)
    }
}