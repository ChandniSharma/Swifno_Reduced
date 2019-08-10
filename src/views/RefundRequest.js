import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import styles from '../stylesheet/refundRequest.style'
import IconFeather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-navigation';
import commonStyle from '../stylesheet/common.style';
import HeaderLoginModule from './common/HeaderLoginModule'
import { Picker } from 'react-native-picker-dropdown'

export default class RefundRequest extends Component {
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

                <HeaderLoginModule viewName={'Refund Request'} navigation={this.props.navigation} />

                <View style={styles.container}>
                    <View style={[styles.topBlackView, { justifyContent: 'space-between', padding:'2%' }]}>
                        <View style={{ flexDirection: 'row', paddingBottom: '1%', paddingTop:'1%' }}>
                            <Text style={commonStyle.locationName}> 2 Event Booklets </Text>
                        </View>

                        <View style={{ flexDirection: 'row',paddingBottom: '1%' }}>
                            <Text style={commonStyle.locationName}> Delivery Id: </Text>
                            <Text style={commonStyle.locationName}>req439</Text>
                        </View>

                        <View style={{ flexDirection: 'row',paddingBottom: '1%' }}>
                            <Text style={commonStyle.locationName}> Paid Amount: </Text>
                            <Text style={commonStyle.locationName}>1012.00</Text>
                        </View>

                        <View style={{ flexDirection: 'row',paddingBottom: '1%' }}>
                            <Text style={commonStyle.locationName}> From: </Text>
                            <Text style={commonStyle.locationName}>46 Ago Palace Way Lagos, Nigeria</Text>
                        </View>

                        <View style={{ flexDirection: 'row', paddingBottom: '1%' }}>
                            <Text style={commonStyle.locationName}> To: </Text>
                            <Text style={commonStyle.locationName}>Bishop Howells Memorial Grammar School Bariga, Beside CMS Grammar School Bariga</Text>
                        </View>

                    </View>

                    <View style={{margin:'5%'}}>

                       
                            <Text style={commonStyle.textTitleSubmitReview}>Refund Request Reason</Text>
                     

                        <View style={{ marginTop: '2%' }}>
                            <Picker
                                selectedValue={this.state.state}
                                onValueChange={this.onValueChange}
                                mode="dialog"
                                style={styles.picker}
                            >
                               <Picker.Item label="Reason 1" value="MP" />
                                        <Picker.Item label="Reason 2" value="RJ" />
                                        <Picker.Item label="Reason 3" value="GJ" />
                                        <Picker.Item label="Reason 4" value="CH" />
                            </Picker>
                        </View>

                        <Text style={[commonStyle.textTitleSubmitReview,  { marginTop:'5%'}]}>Refund Amount</Text>

                        <TextInput
                            style={styles.textInputNotSelected}
                            placeholder='Enter Amount'
                        />

                       
                    <Text style={[commonStyle.textTitleSubmitReview, { marginTop:'5%'}]}> Comment</Text>

                    <View style={styles.viewAddImage} />

                    {/* </KeyboardAwareScrollView> */}
                    <View style={[styles.viewBottomButtons, {marginBottom:'5%'}]}>
                        <TouchableOpacity style={[styles.buttonNotSelected]} onPress={() => this.props.navigation.goBack()}>
                            <Text style={commonStyle.textNotSelected}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.buttonSelected]} onPress={() => this.props.navigation.navigate('ReviewRefundRequest')}>
                            <Text style={commonStyle.textSelected}>Submit</Text>
                        </TouchableOpacity>
                    </View>

                    </View>
                </View>
            </SafeAreaView>
        )
    }
}