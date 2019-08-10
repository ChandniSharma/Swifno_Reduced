
import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import styles from '../stylesheet/dashboard.style'
import HeaderMenuAndBell from './common/HeaderMenuAndBell';
import { SafeAreaView } from 'react-navigation';


export default class PaymentHistory extends Component {
    constructor(props) {
        super(props);

    }


    render() {


        return (

            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                <View style={{ flex: 1 }}>
                    <HeaderMenuAndBell viewName={'Payment History'} isShowLeftButton={true} isShowRightButton={true} navigation={this.props.navigation} />

                    <View>

                        {[1, 2, 3].map((value, index) => <View style={{
                            padding: 15,
                            backgroundColor: 'white',
                            borderBottomColor: 'lightgray',
                            borderWidth: 0.4,
                            shadowColor: 'lightGray',
                            shadowOpacity: 0.4,
                            shadowRadius: 1.5,
                            elevation: 3,
                            borderColor: 'rgba(0, 0,0, 0)'
                        }}>
                            <View style={{ flexDirection: 'row', paddingBottom:'1%' }}>
                                <Text style={{
                                    fontWeight: '700',
                                    color: '#000000',
                                    fontSize: 14,
                                    flex: 8,
                                    fontWeight: "bold",
                                }}>Ifeanyi Nwangwu</Text>
                                <Text>22-09-2017</Text>
                            </View>

                            <View style={{ flexDirection: 'row', paddingBottom:'1%' }}>
                                <Text style={{
                                    color: '#262626',
                                    fontSize: 13,
                                    flex: 9
                                }}>Paid 441,200.00 to A Seventeen Logistics for the delivery of 2 Event Booklets</Text>
                                <Text style={{
                                    color: 'red',
                                    fontSize: 13,
                                    textAlign: 'right',
                                    flex: 1
                                }}> Paid</Text>
                            </View>
                            <View style={{ flexDirection: 'row', paddingBottom:'1%' }}>
                                <Text style={{
                                  
                                    color: '#000000',
                                    fontSize: 13,
                                    
                                    fontWeight: "bold"
                                }}>Delivery Id:</Text>
                                <Text style={{
                                    color: '#262626',
                                    fontSize: 13,
                                }}> reg433</Text>
                            </View>
                            <View style={{ flexDirection: 'row', paddingBottom:'1%' }}>
                                <Text style={{
                                  
                                    color: '#000000',
                                    fontSize: 13,
                                   
                                    fontWeight: "bold"
                                }}>Reference No:</Text>
                                <Text style={{
                                    color: '#262626',
                                    fontSize: 13,
                                }}> 000317031006</Text>
                            </View>
                            <View style={{ flexDirection: 'row', paddingBottom:'1%' }}>
                                <Text style={{
                                 
                                    color: '#000000',
                                    fontSize: 13,
                                    flex: 8,
                                    fontWeight: "bold"
                                }}>Refund Amount:</Text>
                                <Text style={{
                                    color: '#262626',
                                    fontSize: 13,
                                }}> </Text>
                            </View>
                        </View>
                        )}

                    </View>
                </View>
            </SafeAreaView>

        )
    }
}

