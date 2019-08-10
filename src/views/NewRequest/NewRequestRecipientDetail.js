import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import styles from '../../stylesheet/newRequest.style';
import commonStyle from '../../stylesheet/common.style';
import HeaderMenuAndBell from '../common/HeaderMenuAndBell';
import { SafeAreaView } from 'react-navigation';
import { Picker } from 'react-native-picker-dropdown'

export default class NewRequestRecipientDetail extends Component {
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
                    <View style={styles.viewDots} />
                    <View style={styles.topHeadingView}>
                        <Text style={styles.textHeading}>Enter Recipient Detail</Text>
                    </View>

                    <Text style={styles.textRecipient}>Recipient's Name</Text>
                    <TextInput
                        style={styles.textInputNotSelected}
                        placeholder='Test'
                    />

                    <Text style={styles.textRecipient}>Phone No</Text>

                    <TextInput
                        style={styles.textInputNotSelected}
                        placeholder='+911234567890'
                    />

                    <Text style={styles.textRecipient}>Email Id</Text>

                    <TextInput
                        style={styles.textInputNotSelected}
                        placeholder='test@gmail.com'
                    />

                    <Text style={styles.textRecipient}>Additional Details</Text>

                    <TextInput
                        placeholder={'Enter Additional Information eg. number, weight, special pickup/delivery considerations'}
                        //onChangeText={val => handleChange('description', val)}
                        //value={data.description}
                        name={"description"}
                        multiline={true}
                        numberOfLines={5}
                        style={styles.inputTextAreaStyle}
                    />

                    <View style={styles.viewBottomButtons}>
                        <TouchableOpacity style={[styles.buttonNotSelected]}  onPress={() => this.props.navigation.navigate('NewRequestPackageDetail')}>
                            <Text style={commonStyle.textNotSelected}>Back</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.buttonSelected]}  onPress={() => this.props.navigation.navigate('MyPackages')} >
                            <Text style={commonStyle.textSelected}>Next</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView>)
    }
}