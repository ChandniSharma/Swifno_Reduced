import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import styles from '../stylesheet/myPackages.style'
import IconFeather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-navigation';
import commonStyle from '../stylesheet/common.style';
import HeaderLoginModule from './common/HeaderLoginModule'
import { GiftedChat } from 'react-native-gifted-chat'

export default class ReviewRefundRequest extends Component {
    state = {
        messages: [],
    }
    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ],
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                <HeaderLoginModule viewName={'Review Refund Request'} navigation={this.props.navigation} />

                <View style={styles.container}>
                    <View style={[styles.topBlackView ]}>
                        <View style={{margin:'2%', justifyContent:'space-between', marginBottom:'7%'}}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={commonStyle.locationName}> Package Name: </Text>
                            <Text style={commonStyle.locationName}>req439</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={commonStyle.locationName}> Refund Reason: </Text>
                            <Text style={commonStyle.locationName}>1012.00</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={commonStyle.locationName}> Paid Amount: </Text>
                            <Text style={commonStyle.locationName}>N0.00</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={commonStyle.locationName}> Refund Amount: </Text>
                            <Text style={commonStyle.locationName}>1012.00</Text>
                        </View>

                        <View style={{ flexDirection: 'row', paddingBottom:'2%' }}>
                            <Text style={commonStyle.locationName}> Reund Reason: </Text>
                            <Text style={commonStyle.locationName}>Open</Text>
                        </View>
                        </View>
                    </View>

                    <GiftedChat
                        messages={this.state.messages}
                        onSend={messages => this.onSend(messages)}
                        user={{
                            _id: 1,
                        }}
                    />


                </View>
            </SafeAreaView>
        )
    }
}