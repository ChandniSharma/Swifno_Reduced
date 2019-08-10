import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default {
    container: {
        flex: 1,
    },
    topBlackView: {
        backgroundColor: 'rgb(0,0,0)',
        borderRadius: 6,
        width: '96%',
        alignSelf: 'center',
        marginTop: '2.5%',
        marginBottom: '2.5%'
    },
    mapImage: {
        width: '100%',
        height: '100%',
    },
    mapView: {
        width: '95%',
        // height: hp('30%'),

        alignSelf: 'center',
        marginBottom: '2%',
        marginTop: '2%'
    },
    buttonSegment: {
        flex: 0.5,
        height: '100%',
        // backgroundColor:'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textSegmentButton: {
        color: 'black',
        fontSize: 16,
    },
    viewSingleLine: {
        //marginTop:'1%',
        width: '100%',
        height: '0.3%',
        backgroundColor: 'lightgray',
        marginBottom: '3%'

    },
    viewSingleLineCell: {
        marginTop: '2%',
        width: '100%',
        height: '0.2%',
        backgroundColor: 'lightgray',
        marginBottom: '2%'
    },

    viewSingleLineBidsInReview: {
        marginTop: '3%',
        width: '100%',
        height: '0.5%',
        backgroundColor: 'lightgray',
        marginBottom: '3%'
    },

    viewSingleLineLeft: {
        backgroundColor: 'rgb(246, 205, 74)',
        flex: 0.5,
        alignSelf: 'flex-start',
        height: '100%',
        width: '50%',
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
    },
    viewSingleLineEmpty: {
        backgroundColor: 'transparant',
        flex: 0.5,
        alignSelf: 'flex-start',
        height: '100%',
        width: '50%',
    },
    viewSingleLineRight: {
        backgroundColor: 'rgb(246, 205, 74)',
        flex: 0.5,
        alignSelf: 'flex-end',
        height: '100%',
        width: '50%',
        right: '1%',
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
    },
    viewSingleLineCell: {
        width: '100%',
        height: '0.3%',
        backgroundColor: 'lightgray',
        marginBottom: '2%',
        marginTop: '2%'
    },

    optionButton: {

    },
    scrollView: {
        width: '100%',
        paddingLeft: 10,
        //height: 64,
        backgroundColor: 'transparant',
        // justifyContent: 'center',
        // alignSelf:'center'
    },
    flatListCurrentActivity: {
        flex: 0.75,
        marginTop: '2%',
        // backgroundColor: '#ffffff',
    },
    flatlistNotification: {
        marginTop: '2%',
        flex: 0.95,
    },
    viewInner: {

        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderWidth: 0.4,
        // borderLeftWidth: 0.5,
        shadowColor: 'lightGray',
        // shadowOffset:
        //  { width: 1.0, 
        //     height: 2 },

        shadowOpacity: 0.4,
        shadowRadius: 1.5,
        elevation: 3,
        borderColor: 'rgba(0, 0,0, 0.3)',

    },
    viewOuter: {
        padding: 10,
    },
    viewContainNumber: {
        right: 20,
        top: 20,
        position: 'absolute',
    },

    titleBookConfirmation: {
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        marginTop: 30
    },


    textTimeAndDate: {
        color: '#656565',
        fontSize: 13,
    },
    textButton: {

        padding: 10,

        //fontSize: 13,
    },
    textTopBtn: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        //   paddingTop: 10
    },
    buttonLeft: {
        borderRadius: 20,
        height: 55,
        width: 155,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        // shadowOffset: {
        //     width: .4,
        //     height: .11
        // },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        backgroundColor: 'white',
        // alignSelf: 'center',
        //alignSelf:'flex-start'
        marginTop: '1%',
        marginBottom: '1%',
        borderColor: 'black',
        borderWidth: 1,
    },
    buttonCenter: {
        borderRadius: 20,
        height: 55,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        // shadowOffset: {
        //     width: .4,
        //     height: .11
        // },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        backgroundColor: 'white',
        // alignSelf: 'center',
        marginTop: '1%', marginBottom: '1%',
        borderColor: 'lightgray',
        borderWidth: 1,
    },
    buttonRight: {
        borderRadius: 20,
        height: 55,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        // shadowOffset: {
        //     width: .4,
        //     height: .11
        // },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        backgroundColor: 'white',
        marginTop: '1%', marginBottom: '1%',
        borderColor: 'lightgray',
        borderWidth: 1,

        // alignSelf: 'center',
        // marginLeft: '2%',
        //alignSelf:'flex-end',
    },
    buttonChange: {
        justifyContent: 'center',
        // backgroundColor:'green', 

        height: '100%', width: '100%', alignItems: 'center', borderRadius: 5,
    },

    viewButtonChange: {
        borderRadius: 5,
        height: 35,
        alignItems: 'center',
        shadowColor: 'rgba(0,0,0)',
        shadowOffset: {
            width: .4,
            height: .11
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        // backgroundColor: 'red',
        borderWidth: 1,
        width: 15,
        borderColor: 'gray',
        marginTop: '2%',

    },
    buttonNotSelected: {
        borderRadius: 5,
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
        flex: 0.3
        // paddingLeft: 10,
        // paddingRight: 10,
        // width: "auto",
        // marginRight:10,
        // alignSelf: 'center',
        // marginLeft: '2%',
        //alignSelf:'flex-end',

    },

    buttonSelected: {
        borderRadius: 5,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderColor: 'black',
        borderWidth: 1,
        flex: 0.3,
        backgroundColor: 'black',
        // marginRight:10,
        // alignSelf: 'center',
        //alignSelf:'flex-start'
        // width: 'auto',
        // paddingLeft: 10,
        // paddingRight: 10,
        // shadowOffset: {
        //     width: .4,
        //     height: .11
        // },

    },

    buttonBigSelected: {
        borderRadius: 5,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderColor: 'black',
        borderWidth: 1,
        width: '60%',
        backgroundColor: 'black',
        alignSelf: 'center',
        marginTop: '5%'
    },

    textSelected: {
        color: 'white',
    },

    textNotSelected: {
        color: 'black'
    },
    viewIconAndText: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap'
    },
    iconStyle: {
        fontSize: 15,
        paddingTop: 2,
        color: 'black'
    },
    buttonMakePayment: {
        borderRadius: 10,
        height: 30,
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(32, 179,9)',
        marginRight: '2%',
        paddingLeft: 5,
        paddingRight: 5,

    },
    buttonRequestPickup: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: 30,
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 5,
       // paddingRight: 5,
       // marginRight: '5%',
    },
    viewRow: {
        flexDirection: 'row',
        marginRight: '2%',
        marginLeft: '2%',
        marginTop: '1%'
    },
    buttonPaid: {
        borderRadius: 10,
        height: 30,
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        marginRight: '2%',
        paddingLeft: 5,
        paddingRight: 5,
    },
    viewPaidButton: {
        flexDirection: 'row',
        flex: 0.38,
        marginRight: '5%',
    },
    viewPackageDetail: {
        flexDirection: 'row',
        marginTop: '1%'
    },
    viewBottomButtons: {
        flexDirection: 'row',
        marginTop: '1%',
        marginLeft: '2%',

        //alignSelf: 'center', 
        justifyContent: 'space-between',
        width: '96%',
        height: '40%',

    },
    viewBox: {
        backgroundColor: 'rgb(233, 232, 229)',
        width: 30,
        height: 30,
        margin: '1%'
    },

}