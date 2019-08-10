import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import styles from '../../stylesheet/myPackages.style'
import HeaderMenuAndBell from '../common/HeaderMenuAndBell';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Input from '../common/Input';
import { SafeAreaView } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import * as CONST from '../../constants/Constant';
import MyPackageCell from './MyPackageCell';

export default class MyPackages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCurrentActivitySelected: true,
            isActiveBids: true,
            isDeliveries: false,
            isPendingReviews: false,
            isRefundRequests: false,
        }

        this.arrayActiveBids = [{},{}];
    }

    getCurrentActivity = () => {
        this.setState({ isCurrentActivitySelected: true });
    }
    getNotification = () => {
        this.setState({ isCurrentActivitySelected: false });

    }

    getOptionValue = (optionName) => {

        if (optionName === CONST.ACTIVE_BIDS) {
            this.setState({
                isActiveBids: true,
                isDeliveries: false,
                isPendingReviews: false,
                isRefundRequests: false,
            });
        } else if (optionName === CONST.DELIVERIES) {
            this.setState({
                isActiveBids: false,
                isDeliveries: true,
                isPendingReviews: false,
                isRefundRequests: false,
            });
        } else if (optionName === CONST.PENDING_REVIEWS) {
            this.setState({
                isActiveBids: false,
                isPendingReviews: true,
                isDeliveries: false,
                isRefundRequests: false,
            });
        } else if (optionName === CONST.REFUND_REQUESTS) {
            this.setState({
                isActiveBids: false,
                isRefundRequests: true,
                isDeliveries: false,
                isPendingReviews: false,
            });
        }
    }
    renderItem = (item, index) => {
        console.log(" Item is ", item.item);

        return (
            <MyPackageCell item={item} index={index} navigation={this.props.navigation}/>
        );
    }
    render() {

        let arrayListData;
        // if (this.state.isCurrentActivitySelected) {
        //     if (this.state.isActiveBids) {
        //         arrayListData = this.arrayActiveBids;
        //     } else if (this.state.isRefundRequests) {
        //         arrayListData = this.arrayRefundRequests;
        //     } else if (this.state.isDeliveries) {
        //         arrayListData = this.arrayDeliveries;
        //     } else if (this.state.isPendingReviews) {
        //         arrayListData = this.arrayPendingReviews;
        //     }
        // } else {
        //     arrayListData = this.arrayNotifications;
        // }

        arrayListData = this.arrayActiveBids;

        return (

            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>

                <View style={{ flex: 1 }}>

                    <HeaderMenuAndBell viewName={'My Packages'} isShowLeftButton={true} isShowRightButton ={true} navigation={this.props.navigation} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 44 }}>
                        <TouchableOpacity onPress={() => this.getCurrentActivity()} style={styles.buttonSegment}>
                            <Text style={styles.textTopBtn}>Active Packages</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.getNotification()} style={styles.buttonSegment}>
                            <Text style={styles.textTopBtn}>Package History</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ flexDirection: 'row', width: '100%', height: '0.5%', flex: 0.009 }}>
                        {this.state.isCurrentActivitySelected ? <Animatable.View style={styles.viewSingleLineLeft} /> : <View style={styles.viewSingleLineEmpty} />}
                        {!this.state.isCurrentActivitySelected ? <Animatable.View style={styles.viewSingleLineRight} /> : null}
                        {/* {this.state.isCurrentActivitySelected ? <Animatable.View style={styles.viewSingleLineLeft} />
                            : <Animatable.View style={styles.viewSingleLineRight} />} */}
                    </View>
                    <View style={[styles.viewSingleLine, { flex: 0.003 }]} />

                    <FlatList style= {styles.flatListCurrentActivity}
                        data={arrayListData}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </SafeAreaView>

        )
    }
}

