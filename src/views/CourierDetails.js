import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, SafeAreaView, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import styles from '../stylesheet/courierDetail.style'

import commonStyle from '../stylesheet/common.style';
import StarRating from 'react-native-star-rating';
import HeaderLoginModule from './common/HeaderLoginModule'


export default class CourierDetail extends Component {
    constructor(props) {
        super(props);

        this.arrayData = [{ 'userPhoto': 'https://bootdey.com/img/Content/avatar/avatar6.png', 'name': 'Danny Odita', 'ratingCount': 3, 'status': 'On Time', 'date': '23-06-2017' },

        { 'userPhoto': 'https://bootdey.com/img/Content/avatar/avatar6.png', 'name': 'Ram', 'ratingCount': 3, 'status': 'On Time', 'date': '12-09-2017' },

        { 'userPhoto': 'https://bootdey.com/img/Content/avatar/avatar6.png', 'name': 'Ram', 'ratingCount': 3, 'status': 'On Time', 'date': '15-09-2017' }
        ];
    }

    

    renderItem = (item, index) => {
        console.log(" Item is =========", item.item);

        return (
            <View style={{ marginLeft: '2%', marginRight: '2%' }}>
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={()=> this.props.navigation.navigate('SubmitReview')}>

                    <View style={{ flexDirection: 'row', fontSize: 15, justifyContent: 'space-evenly', flex: 1 }}>
                        <View style={{ flex: 0.2 }}>
                            <Image source={{ uri: item.item.userPhoto }} style={{
                                width: 70, height: 70, borderRadius: 35
                            }} />
                        </View>

                        <View style={{ flex: 0.8, justifyContent: 'space-evenly'  }}>

                            <View style={{ flexDirection: 'row', width:'100%'}}>
                                <Text style={[commonStyle.textDescriptionDetail, { flex: 0.75 }]}>
                                    {item.item.name}
                                </Text>
                                <Text style={[commonStyle.textDescriptionDetail, { flex: 0.25, }]}>{item.item.date}</Text>
                            </View>
                                <View style={{ width: 20, width: '30%' }}>
                                    <StarRating
                                        // style={{width:30, height:20}}
                                        disabled={false}
                                        maxStars={5}
                                        rating={3}
                                        starSize={20}
                                        fullStarColor={'rgb(247, 205,74)'}
                                    // selectedStar={(rating) => this.onStarRatingPress(rating)}
                                    />
                                </View>
                                <Text style={commonStyle.textDescriptionDetail}>Great </Text>
                        </View>

                    </View>
                </TouchableOpacity>
                <View style={styles.viewSingleLineCell} />

            </View>
        );
    }
    render() {
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                <HeaderLoginModule viewName={'Courier Details'} navigation={this.props.navigation} />

                <View>
                    <View style={styles.topBlackView }>

                        <View style={{ flex: 0.2, marginLeft:'5%' , marginTop:'5%'}}>
                            <Image source={{ uri:"https://bootdey.com/img/Content/avatar/avatar6.png" }} style={{
                                width: 70, height: 70, borderRadius: 35
                            }} />
                        </View>

                        <View style={{ flex: 0.8, marginLeft:'2%' , marginTop:'5%'}}>

                                <Text style={[commonStyle.textTitleCorier, {marginTop:'5%'}]}>
                                   Danny Oita
                                </Text>
                                
                            <View style={{ flexDirection: 'row', width: '100%' }}>
                                <View style={{ width: 20, width: '30%' }}>
                                    <StarRating
                                        // style={{width:30, height:20}}
                                        disabled={false}
                                        maxStars={5}
                                        rating={3}
                                        starSize={20}
                                        fullStarColor={'rgb(247, 205,74)'}
                                    // selectedStar={(rating) => this.onStarRatingPress(rating)}
                                    />
                                </View>
                                <Text style={commonStyle.textRatingCount}>(9)</Text>
                            </View>
                        </View>
                    </View>
                   
                    <Text style={[commonStyle.textBoldDetail, {marginTop:'5%', marginLeft:'5%'}]}>Review</Text>
                    <View style={styles.viewSingleLine}/>
                    <FlatList
                        data={this.arrayData}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                   
                </View>
            </SafeAreaView>
        )
    }
}