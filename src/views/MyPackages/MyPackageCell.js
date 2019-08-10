import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import styles from '../../stylesheet/myPackages.style'
import commonStyles from '../../stylesheet/common.style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

import * as Animatable from 'react-native-animatable';

export default class MyPackageCell extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const { item, index } = this.props
        console.log(" Props is ==== ", this.props);

        return (
            <View style={styles.viewOuter}>
                <View style={[styles.viewInner ]}>
                    <View style={{ marginLeft:'2%'}}>
                        <View style={{justifyContent:'space-between', padding:'2%' }}>
                            <Text style={commonStyles.textTitlePackageCell}>My Package</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={commonStyles.textDescriptionCell}>From:</Text>
                                    <Text style={commonStyles.textDescriptionCell}> Location1</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={commonStyles.textDescriptionCell}>  To:</Text>
                                    <Text style={commonStyles.textDescriptionCell}> Location2</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={commonStyles.textDescriptionCell}>Schdeuled Date:</Text>
                                <Text style={commonStyles.textDescriptionCell}> 23 Nov 2006</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={commonStyles.textDescriptionCell}>Status:</Text>
                                <Text style={commonStyles.textDescriptionCell}> Awarded</Text>
                                <Text style={commonStyles.textBold}> (</Text>
                                    <Text style={commonStyles.textDecoration}>N</Text>
                                    <Text style={commonStyles.textBold}>34.00)</Text>

                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={commonStyles.textDescriptionCell}>Operator:</Text>
                                <Text style={commonStyles.textDescriptionCell}> Operator 1</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewSingleLineCell}/>
                    <View style={{ flexDirection: 'row', marginLeft:'2%', padding:'2%'}} >

                        {/* icon and button  */}
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('MyPackageDetail')}>
                                <View style={styles.viewIconAndText}>
                                    <IconAntDesign name="eye" style={styles.iconStyle} />
                                    <Text style={commonStyles.textButtonCell}> View Details  </Text>
                                </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('TrackPackage')}>
                                <View style={styles.viewIconAndText}>
                                    <IconEntypo name="location-pin" style={styles.iconStyle} />
                                    <Text style={commonStyles.textButtonCell}>Track Package  </Text>
                                </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('SubmitReview')}>
                                <View style={styles.viewIconAndText}>
                                    <IconMaterialIcons name="message" style={styles.iconStyle} />
                                    <Text style={commonStyles.textButtonCell}> Give Feedback</Text>
                                </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        )
    }

}