import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import styles from '../../stylesheet/newRequest.style'
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-navigation';
import commonStyle from '../../stylesheet/common.style';
import HeaderLoginModule from '../common/HeaderLoginModule'
import { Picker } from 'react-native-picker-dropdown'
import DateTimePicker from "react-native-modal-datetime-picker";
import HeaderMenuAndBell from '../common/HeaderMenuAndBell';
import Input from '../common/Input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import commonStyles from '../../stylesheet/common.style';


export default class NewRequestPackageDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state: 'india',
            isStartTimePickerVisible: false,
            isEndTimePickerVisible: false,
            startTime: '',
            endTime: '',
            isInsuranceRequired: false,

        }
        this.onValueChange = this.handleValueChange.bind(this)
    }

    handleValueChange(state) {
        this.setState({ state })
    }

    showStartTimePicker = () => {
        console.log("showStartTimePicker =====");
        this.setState({ isStartTimePickerVisible: true });
    };

    hideStartTimePicker = () => {
        this.setState({ isStartTimePickerVisible: false });
    };

    showEndTimePicker = () => {
        this.setState({ isEndTimePickerVisible: true });
    };

    hideEndTimePicker = () => {
        this.setState({ isEndTimePickerVisible: false });
    };

    handleStartTimePicked = time => {
        console.log("A start time has been picked: ", time);
        var event = new Date(time);
        let timeObject = time.toLocaleTimeString()

        console.log(" event ==========", event.toLocaleTimeString('en-US'), "timeobject =======", timeObject);
        this.setState({
            startTime: event.toLocaleTimeString('en-US')
        })
        this.hideStartTimePicker();
    };

    handleEndTimePicked = time => {
        console.log("A end time has been picked: ", time);
        var event = new Date(time);

        this.setState({
            endTime: event.toLocaleTimeString('en-US')
        })
        this.hideEndTimePicker();
    };

    // mode = 'date'  (by default)
    // Datepicker? 'date' Timepicker? 'time' Both? 'datetime'

    render() {
        return (

            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                <KeyboardAwareScrollView style={styles.container}>

                    <View style={{ flex: 1 }}>

                        <HeaderMenuAndBell viewName={'New Request'} isShowLeftButton={true} isShowRightButton={false} navigation={this.props.navigation} />

                        {/* dot view */}
                        <View style={styles.viewDots} />
                        <View style={styles.topHeadingView}>
                            <Text style={styles.textHeading}>Enter Package Details</Text>
                        </View>

                        <View style={styles.pickerViewBottomRow}>
                            <Picker
                                selectedValue={this.state.state}
                                onValueChange={this.onValueChange}
                                mode="dialog"

                            >
                                <Picker.Item label="Madhya Pradesh" value="MP" />
                                <Picker.Item label="Rajasthan" value="RJ" />
                                <Picker.Item label="Gujrat" value="GJ" />
                                <Picker.Item label="Chhatisgarh" value="CH" />
                            </Picker>
                        </View>

                        <View style={styles.pickerViewBottomRow}>
                            <Picker
                                selectedValue={this.state.state}
                                onValueChange={this.onValueChange}
                                mode="dialog"
                            >
                                <Picker.Item label="Madhya Pradesh" value="MP" />
                                <Picker.Item label="Rajasthan" value="RJ" />
                                <Picker.Item label="Gujrat" value="GJ" />
                                <Picker.Item label="Chhatisgarh" value="CH" />
                            </Picker>
                        </View>

                        {/* <View style={styles.pickerViewBottomRow}>
                            <TextInput
                                label={'Password'}      
                                placeholder='Package Name/Description'
                            />
                        </View> */}
                        <View style={{ flexDirection: 'row', marginBottom: '2%', justifyContent: 'center', marginTop:'2%' }}>
                            {/* <IconMaterialIcons name="lock-open" style={styles.icon} />
                                     */}
                            <Input
                                label={'Package Name/Description'}
                                style={commonStyles.inputStyle}
                                placeholder={'Package Name/Description'}
                            //  secureTextEntry={true}
                            // onChangeText={val => handleChange('password', val)}
                            //  value={data.password}
                            />
                        </View>


                        <View style={styles.pickerViewBottomRow}>
                            <Picker
                                selectedValue={this.state.state}
                                onValueChange={this.onValueChange}
                                mode="dialog"
                            >
                                <Picker.Item label="Madhya Pradesh" value="MP" />
                                <Picker.Item label="Rajasthan" value="RJ" />
                                <Picker.Item label="Gujrat" value="GJ" />
                                <Picker.Item label="Chhatisgarh" value="CH" />
                            </Picker>
                        </View>
                        <Text style={[commonStyle.textTitle, { marginLeft: '8%', marginTop: '5%' },]}>Pickup Time Period</Text>

                        <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '8%', marginRight: '5%', justifyContent: 'space-between', height: '5%', }}>

                            <TouchableOpacity onPress={() => this.showStartTimePicker()} style={{ width: '40%', height: 35 }}>

                                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', height: '100%' }}>
                                    {this.state.startTime ? <Text style={{ width: 100 }}>{this.state.startTime}</Text> : <Text style={commonStyle.textPlaceholder}>Start Time</Text>}
                                    <IconAntDesign name='clockcircleo' style={{ fontSize: 16, marginLeft: '5%', color: 'gray' }} />
                                </View>

                            </TouchableOpacity>

                            <DateTimePicker
                                mode="time"
                                isVisible={this.state.isStartTimePickerVisible}
                                onConfirm={this.handleStartTimePicked}
                                onCancel={this.hideStartTimePicker}
                            />

                            <TouchableOpacity onPress={() => this.showEndTimePicker()} style={{ width: '40%', height: 35 }}>
                                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', height: '100%' }}>
                                    {this.state.endTime ? <Text style={{ width: 100 }}>{this.state.endTime}</Text> : <Text style={commonStyle.textPlaceholder}>End Time</Text>}
                                    <IconAntDesign name='clockcircleo' style={{ fontSize: 16, marginLeft: '5%', color: 'gray' }} />
                                </View>
                            </TouchableOpacity>

                            <DateTimePicker
                                mode="time"
                                isVisible={this.state.isEndTimePickerVisible}
                                onConfirm={this.handleEndTimePicked}
                                onCancel={this.hideEndTimePicker}
                            />
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', marginTop: '-4%' }}>
                            <View style={styles.viewSingleHalfLine} />
                            <View style={styles.viewSingleHalfLine} />
                        </View>

                        <View style={styles.rememberView}>

                            <TouchableOpacity style={styles.tickMarkView} onPress={() => this.setState({ isInsuranceRequired: !this.state.isInsuranceRequired })} >
                                {this.state.isInsuranceRequired ? <IconMaterialIcons name="check-box" color="gray" style={styles.iconCheckBox} /> : <IconMaterialIcons name="check-box-outline-blank" color="gray" style={styles.iconCheckBox} />}
                            </TouchableOpacity>

                            <View style={{ flex: 0.8, marginTop: '1.5%' }}>
                                <TouchableOpacity style={styles.rememberBtn} onPress={() => this.setState({ isInsuranceRequired: !this.state.isInsuranceRequired })} >
                                    <Text style={styles.rememberText}> Insurance Required</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={{ marginTop: '2%' }}>
                            <Input
                                label={'Item Value'}
                                style={[commonStyles.inputStyle]}
                                placeholder={'Item Value'}
                            />
                        </View>



                        {/* View boxes  */}
                        <View style={styles.viewPackageDetail}>
                            <View style={styles.viewBoxSelected}>
                                <IconAntDesign name="plus" style={{ fontSize: 25, color: 'white', marginBottom: '1%' }} />
                            </View>
                            <View style={styles.viewBox} />
                            <View style={styles.viewBox} />
                            <View style={styles.viewBox} />
                            <View style={styles.viewBox} />
                        </View>

                        <View style={styles.viewBottomButtons}>
                            <TouchableOpacity style={[styles.buttonNotSelected]} onPress={() => this.props.navigation.navigate('NewRequestDropoffLocation')}>
                                <Text style={commonStyle.textNotSelected}>Back</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.buttonSelected]} onPress={() => this.props.navigation.navigate('NewRequestSummary')}>
                                <Text style={commonStyle.textSelected}>Next</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>)
    }
    render1() {
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>

                <View>
                    <Text>State</Text>
                    <Picker
                        selectedValue={this.state.state}
                        onValueChange={this.onValueChange}
                        mode="dialog"
                    >
                        <Picker.Item label="India" value="india" />
                        <Picker.Item label="UK" value="uk" />
                        <Picker.Item label="USA" value="usa" />
                        <Picker.Item label="Australia" value="australia" />
                    </Picker>
                </View>

                <>
                    <Button title="Time Picker" onPress={this.showDateTimePicker} />
                    <DateTimePicker
                        mode="time"
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDateTimePicker}
                    />
                </>
            </SafeAreaView>
        )
    }
}