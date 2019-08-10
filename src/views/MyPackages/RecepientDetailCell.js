import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import styles from '../../stylesheet/dashboard.style'
import commonStyles from '../../stylesheet/common.style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import * as Animatable from 'react-native-animatable';

export default class RecepientDetail extends Component {
    constructor(props) {
        super(props);

    }

//     <View>

//     <Text>Recipient's Name:</Text>
//     <Text></Text>
//     <Text>Phone:</Text>
//     <Text>+91 987654321</Text>
//     <Text>Email:</Text>
//     <Text>support@user.com</Text>
// </View>
render() {
    const { item, index } = this.props

    return (
        <View style={styles.viewOuter}>
            <View style={styles.viewInner}>
                <View >
                    <Text style={commonStyles.locationName}>Recepient Details</Text>

                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <Text style={[commonStyles.textTitleDashboard, { flex: 0.8 }]}>
                            Recipient Name:
                        </Text>
                        <Text style={[commonStyles.textTimeDashboard, { flex: 0.2 }]}>
                            User 1
                        </Text>
                    </View>

                    <Text style={commonStyles.textDescriptionDashboard}>
                        {item.item.Description}
                    </Text>
                    {item.item.BidAmount ? <View style={{ flexDirection: 'row' }}>
                        <Text style={commonStyles.textDescriptionDashboard}>Bid Amount:</Text>
                        <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', color: "black", fontSize: 13 }}> N</Text>
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