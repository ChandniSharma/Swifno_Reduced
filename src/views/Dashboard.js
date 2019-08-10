import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import styles from '../stylesheet/dashboard.style'
import HeaderMenuAndBell from './common/HeaderMenuAndBell';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Input from './common/Input';
import { SafeAreaView } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import * as CONST from '../constants/Constant';
import DashboardCell from '../views/common/DashboardCell';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCurrentActivitySelected: true,
            isActiveBids: true,
            isDeliveries: false,
            isPendingReviews: false,
            isRefundRequests: false,
        }

        this.arrayActiveBids = [{ "PackageNo": "Package 1", "Description": "Placed bid for My Package", "BidAmount": "200.00" },

        { "PackageNo": "Package 2", "Description": "Placed bid for My Package", "BidAmount": "200.00" },

        { "PackageNo": "Package 3", "Description": "Placed bid for My Package", "BidAmount": "200.00" },

        ],
            this.arrayDeliveries = [{ "PackageNo": "Package 1", "Description": "Has Picked up My Package", "Description2": "From Pick up location" },

            { "PackageNo": "Package 2", "Description": "Has Picked up My Package", "Description2": "From Pick up location" },

            { "PackageNo": "Package 3", "Description": "Has Picked up My Package", "Description2": "From Pick up location" },

            ],
            this.arrayPendingReviews = [{ "PackageNo": "Package 1", "Description": "Placed bid for My Package", "BidAmount": "200.00" },

            { "PackageNo": "Package 2", "Description": "Placed bid for My Package", "BidAmount": "200.00" },

            { "PackageNo": "Package 3", "Description": "Placed bid for My Package", "BidAmount": "200.00" },

            ],
            this.arrayRefundRequests = [{ "PackageNo": "Package 1", "Description": "Has Picked up My Package", "Description2": "From Pick up location" },

            { "PackageNo": "Package 2", "Description": "Has Picked up My Package", "Description2": "From Pick up location" },

            { "PackageNo": "Package 3", "Description": "Has Picked up My Package", "Description2": "From Pick up location" },

            ],
            this.arrayNotifications = [{ "PackageNo": "Operator 1", "Description": "Placed bid for My Package", "BidAmount": "200.00", "Time":"5 Min ago" },

            { "PackageNo": "Operator 2", "Description": "Placed bid for My Package", "BidAmount": "200.00",  "Time":"5 Min ago"  },

            { "PackageNo": "Operator 3", "Description": "Placed bid for My Package", "BidAmount": "200.00",  "Time":"5 Min ago"  },
        ]

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
            <DashboardCell item={item} index={index} />
        );
    }
    render() {

        let arrayListData;
        if(this.state.isCurrentActivitySelected){
            if (this.state.isActiveBids) {
                arrayListData = this.arrayActiveBids;
            } else if (this.state.isRefundRequests) {
                arrayListData = this.arrayRefundRequests;
            } else if (this.state.isDeliveries) {
                arrayListData = this.arrayDeliveries;
            } else if (this.state.isPendingReviews) {
                arrayListData = this.arrayPendingReviews;
            }
        }else{
            arrayListData = this.arrayNotifications;
        }
       

        return (

            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>

                <View style={{ flex: 1 }}>

                    <HeaderMenuAndBell viewName={'DASHBOARD'} isShowLeftButton={true} isShowRightButton ={true} navigation={this.props.navigation} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', height:44 }}>
                        <TouchableOpacity onPress={() => this.getCurrentActivity()} style={styles.buttonSegment}>
                            <Text style={styles.textTopBtn}>Current Activity</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.getNotification()} style={styles.buttonSegment}>
                            <Text style={styles.textTopBtn}>Notifications</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ flexDirection: 'row', width: '100%', height: '0.5%', flex: 0.009 }}>
                        {this.state.isCurrentActivitySelected ? <Animatable.View style={styles.viewSingleLineLeft} /> : <View style={styles.viewSingleLineEmpty} />}
                        {!this.state.isCurrentActivitySelected ? <Animatable.View style={styles.viewSingleLineRight} /> : null}
                        {/* {this.state.isCurrentActivitySelected ? <Animatable.View style={styles.viewSingleLineLeft} />
                            : <Animatable.View style={styles.viewSingleLineRight} />} */}
                    </View>
                    <View style={[styles.viewSingleLine, { flex: 0.003 }]} />


                    {this.state.isCurrentActivitySelected ?
                        <View style={{ justifyContent: 'center'}}>


                            <ScrollView horizontal={true} style={styles.scrollView} contentContainerStyle={{flexGrow : 1, justifyContent : 'center', paddingLeft:10,paddingBottom:10}}>
                                <View style={{ flexDirection: 'row' }}>


                                    <View style={this.state.isActiveBids ? styles.buttonSelected : styles.buttonNotSelected}>
                                        <TouchableOpacity  onPress={() => this.getOptionValue(CONST.ACTIVE_BIDS)} >
                                            <Text style={this.state.isActiveBids ?styles.textSelected:styles.textNotSelected}>Active Bids</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={this.state.isDeliveries ? styles.buttonSelected : styles.buttonNotSelected}>
                                        <TouchableOpacity  onPress={() => this.getOptionValue(CONST.DELIVERIES)} >
                                            <Text style={this.state.isDeliveries ?styles.textSelected:styles.textNotSelected}>Deliveries</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={this.state.isPendingReviews ? styles.buttonSelected : styles.buttonNotSelected}>
                                        <TouchableOpacity onPress={() => this.getOptionValue(CONST.PENDING_REVIEWS)} >
                                            <Text  style={this.state.isPendingReviews ?styles.textSelected:styles.textNotSelected}>Pending Reviews</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={this.state.isRefundRequests ? styles.buttonSelected : styles.buttonNotSelected}>
                                        <TouchableOpacity onPress={() => this.getOptionValue(CONST.REFUND_REQUESTS)} >
                                            <Text style={this.state.isRefundRequests ?styles.textSelected:styles.textNotSelected}>Refund Requests</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ScrollView>
                        </View> : <View  />}



                    <FlatList style={this.state.isCurrentActivitySelected ? styles.flatListCurrentActivity:styles.flatlistNotification}
                        data={arrayListData}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />

                    <IconAntDesign name="pluscircle" style={{ fontSize: 70, alignSelf: 'flex-end', right: '3%', flex: 0.2 }} onPress={()=>this.props.navigation.navigate('NewRequestPickupLocation')}/>

                    

                </View>
            </SafeAreaView>

        )
    }
}

