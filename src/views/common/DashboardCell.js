import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import styles from '../../stylesheet/dashboard.style'
import commonStyles from '../../stylesheet/common.style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import * as Animatable from 'react-native-animatable';

export default class DashboardCell extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { item, index } = this.props

        return (
            <View style={styles.viewOuter}>
                <View style={styles.viewInner}>
                    <View >
                        <View style={{flexDirection:'row', flex:1}}>
                        <Text style={[commonStyles.textTitleDashboard, {flex:0.8}]}>
                            {item.item.PackageNo}
                        </Text>
                        {item.item.Time ? <Text style={[commonStyles.textTimeDashboard, {flex:0.2}]}>
                            {item.item.Time}
                        </Text> : null}
                        </View>
                       
                        <Text style={commonStyles.textDescriptionDashboard}>
                            {item.item.Description}
                        </Text>
                        {item.item.BidAmount ? <View style={{ flexDirection: 'row' }}>
                            <Text style={commonStyles.textDescriptionDashboard}>Bid Amount:</Text>
                            <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid',color:"black",fontSize: 13}}> N</Text>
                            <Text style={commonStyles.textPriceDashboard}>
                                {item.item.BidAmount}
                            </Text>
                        </View> : <Text style={commonStyles.textDescriptionDashboard}>
                                {item.item.Description2}
                            </Text>}
                       

                    </View>
                    <View style={styles.viewContainNumber}>
                        {/* <Text>
                    {item.item.PersonCount}
                </Text> */}
                    </View>
                </View>
            </View>
        )
    }

}