import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import styles from '../stylesheet/myPackages.style'
import IconFeather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-navigation';
import commonStyle from '../stylesheet/common.style';
import HeaderLoginModule from './common/HeaderLoginModule'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Route from './common/Route';


export default class TrackPackage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: [ 'Date & Time', 'Vender Comments', 'Area State', 'Address Location'],
          
            tableData: [
              ['20-11-2018', 'On the road', 'Rivers', '230 Awolowo Read, Logos. Nigeria'],
              ['20-11-2018', 'In Abuja', 'Abuja[FCT]', '230 Awolowo Read, Logos. Nigeria'],
              ['20-11-2018', 'Abj', 'Plateau', '44 Garb Street, Abuja, Nigeria']
            ]
          }
    }

  

    render() {
        const state = this.state;
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>

                <HeaderLoginModule viewName={'Track Package'} navigation={this.props.navigation} />

                <View style={styles.container}>
                    <View style={[styles.topBlackView, { height:'auto'} ]}>
                        <View style={{marginLeft:'2%', marginTop:'2%', marginRight:'2%',marginBottom:'2%', justifyContent:'space-between'}}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={commonStyle.locationName}>2Event Booklets</Text>
                            </View>
                            
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={commonStyle.locationName}>Delivery Id: </Text>
                            <Text style={commonStyle.locationName}>req439</Text>
                        </View>

                        <View style={{ flexDirection: 'row',marginRight:'2%' }}>
                            <Text style={commonStyle.locationName}>From: </Text>
                            <Text style={[commonStyle.locationName,{paddingRight:'2%', width:'auto'} ]}>Maiduguri-Central, Borne, Maiduguri, Nigeria</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginBottom:'2%', marginRight:'2%'}}>
                            <Text style={commonStyle.locationName}>To: </Text>
                            <Text style={[commonStyle.locationName, {marginBottom:'2%',paddingRight:'2%', width:'auto'}]}>Mayo-Belwa, Adamawa, Nigerian Prison Service, Vol, Nigeria</Text>
                        </View>
                       </View>
                    </View>
<ScrollView style={{ height:'auto', width:'95%', alignSelf:'center',}}>
                    <View >
                        <Table borderStyle={{ borderWidth: 1, borderColor: 'lightgrey' }}>
                            <Row data={state.tableHead} flexArr={[1, 1, 1]} style={styleTable.head} textStyle={styleTable.headingText} />
                            <TableWrapper style={styleTable.wrapper}>

                                <Rows data={state.tableData} flexArr={[1, 1, 1]} style={styleTable.row} textStyle={styleTable.text} />
                            </TableWrapper>
                        </Table>
                    </View>
                    </ScrollView>
                    <View style={[styles.mapView, {height:hp('35%')}]}>
                            <Route style={{width:'100%', height:'100%'}}/>
                            </View>


                </View>
            </SafeAreaView>
        )
    }
}


const styleTable = StyleSheet.create({
    container: {  padding: 16, paddingTop: 30,  },
    head: {  height: hp ('10%'),  backgroundColor: '#f1f8ff',  },
    headingText:{fontWeight:'bold' , textAlign: 'center', },
    wrapper: { flexDirection: 'row' },
    row: {  height: 'auto'},
    text: { textAlign: 'center', margin:5, }
  });