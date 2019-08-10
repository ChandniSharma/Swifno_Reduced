import { Dimensions } from 'react-native';
const deviceHeight = Dimensions.get('window').height;
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default {
    container: {
        flex: 1,
    },
    topHeadingView: {
        backgroundColor: 'rgb(246, 205, 74)',
        // height: 50,
        height: hp('7%'),
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center'
        // marginTop: '10%',

    },
    textHeading: {
        marginLeft: '2%',

    },
    picker: {
        borderColor: 'rgb(246, 205, 74)',
        borderWidth: 1,
        width: '90%',
        height: hp('7%'),
        alignSelf: 'center',
        justifyContent: 'center'
    },
    pickerViewBottomRow: {
        borderBottomColor: 'lightgray',
        borderWidth: 1,
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderTopColor: 'white',
        width: '90%',
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop:'5%'
        
    },

    textInputNotSelected: {
        borderColor: 'lightgray',
        borderWidth: 1,
        width: '90%',
        height: hp('7%'),
        alignSelf: 'center',
        marginTop: '2%',
        paddingLeft: 5,
    },
    textInputSelected: {
        borderColor: 'rgb(246, 205, 74)',
        borderWidth: 1,
        width: '90%',
        height: hp('7%'),
        alignSelf: 'center',
        marginTop: '2%'
    },

    buttonNotSelected: {
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0)',
        shadowOffset: {
            width: .4,
            height: .11
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        backgroundColor: 'white',
        borderColor: 'lightgray',
        borderWidth: 1,
        flex: 0.45
    },
    buttonSelected: {
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderColor: 'black',
        borderWidth: 1,
        flex: 0.45,
        backgroundColor: 'black',
    },
    viewBottom: {
        height: hp('30%'),
        bottom:'3%',
        backgroundColor: 'white',
        position: 'absolute',
        width: wp('100%')
    },
    viewBottomButtons: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: wp('90%'),
         bottom: '3%',
        marginTop: '5%',
        //marginBottom:'5%'
    },
    mapImage: {
        width: '100%',
        height: '100%',
    },
    mapView: {
        width: '90%',
        height: hp('35%'),
        marginTop: '5%',
        alignSelf: 'center',
        // marginBottom: '5%'
    },
    mapSummary: {
        width: wp('100%'),
        height: hp('100%'),
    },

    viewDots: {
        marginTop: '5%',
        marginBottom: '5%',
    },
    iconCheckBox: {
        fontSize: 30
    },
    textRecipient: {
        marginLeft: '9%',
        marginTop: '5%',
        color: '#262626',
    },
    inputTextAreaStyle: {
        marginLeft: '5%',
        marginRight: '5%',
        height: 60,
        borderColor: 'lightgray',
        borderWidth: 1,
        marginTop: '5%',
        color: '#262626',
        paddingTop: 5,
        paddingLeft: 5,

    },
    viewSingleLine: {
        //marginTop:'1%',
        width: '100%',
        height: '1%',
        backgroundColor: 'lightgray',
        marginTop: '1%'

    },
    viewSingleHalfLine: {
        //marginTop:'1%',
        width: '47%',
        height: 1,
        backgroundColor: 'lightgray',
        marginTop: '1%',
        marginBottom:'1%'

    },
    rememberView: {
        flexDirection: 'row',
        flex: 1,
        marginTop: '5%',
        // marginBottom: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        height: 30,
        //  backgroundColor:'pink',
    },
   
    ViewTickmark: {
        // marginRight: '-3%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        height: '100%',
        marginTop: '5%'
    },
    viewRememberText: {
        marginTop: '1%',
        marginLeft: '5%'
    },
    tickMarkView: {
        // backgroundColor:'blue',
        height: 40,
        flex: 0.1,
        // borderColor: 'gray',
        // borderWidth: .2,
        // shadowColor: 'rgba(0,0,0,0.5)',
        // shadowOffset: {
        //     width: .5,
        //     height: .5
        // },
        // shadowOpacity: 0.5,
        // shadowRadius: 1,
        //borderRadius: .2,
    },
    rememberBtn: {
        // flex: 0.8,
        // height: 20,
        justifyContent: 'center',
        // backgroundColor:'green',
    },
    rememberText: {
        // marginLeft:'2%',
        fontSize: 16,
        //  marginTop:'2%'
    },
    viewPackageDetail: {
        flexDirection: 'row',
        marginTop: '5%',
        marginLeft: '5%'
    },
    viewBox: {
        backgroundColor: 'rgb(233, 232, 229)',
        width: 30,
        height: 30,
        margin: '1%'
    },
    viewBoxSelected:{
        backgroundColor: 'black',
        width: 30,
        height: 30,
         margin: '1%',
        justifyContent:'center',
        alignItems: 'center',
    },
    buttonBoxYellow: {
        // backgroundColor: 'rgb(246, 205, 74)',
        // width: wp('3%'),
        // height: hp('3%'),
        // marginRight: '2%',
        // marginTop: '5%',
        width: '100%',
        height: '100%',
        // alignSelf:'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewBoxYellow: {
        backgroundColor: 'rgb(246, 205, 74)',
        width: wp('5%'),
        height: hp('5%'),
        marginRight: '2%',
        marginTop: '1%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewYellowBoxSummary: {
        width: wp('5%'),
        height: hp('4%'),
        marginLeft: wp('93%'),
        backgroundColor: 'rgb(246, 205, 74)',
        marginBottom: '2%',
        marginTop: '1%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewLocations: {
        padding: 15,
        backgroundColor: 'white',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 0.5,
        // borderBottomColor: 'lightgray',
        //borderWidth:0.5,
        // shadowColor: 'lightGray',
        // shadowOpacity: 0.1,
        // shadowRadius: 1.0,
        // elevation: 1,
        // borderColor: 'rgba(0, 0,0, 0)'

      
    },

    // oldLocationView:{
    //     padding: 15,
    //     backgroundColor: 'white',
    //     borderBottomColor: 'lightgray',
    //     borderWidth: 0.4,
    //     shadowColor: 'lightGray',
    //     shadowOpacity: 0.4,
    //     shadowRadius: 1.5,
    //     elevation: 3,
    //     borderColor: 'rgba(0, 0,0, 0)'
    // }
}