import { Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');
const deviceHeight = height;
let deviceWidth = width;
let top;

export default {
    container: {
        flex: 1,

    },
    icon: {
        fontSize: 22, marginLeft: '5%', marginRight: '-5%', marginTop: '4%'
    },
    leftView: {
        alignSelf: 'flex-end',

        flex: 0.4,
        // backgroundColor:'red'
    },
    
    imgSideTitle: {
        color: 'white',
        // fontSize: 21,
        margin: '2%',
        alignSelf: 'flex-start',
        //  fontFamily: 'Montserrat-Bold',
        flex: 0.3,
        width: 50,
        height: 40
    },
    textDontHaveAccount: {
        color: 'gray',
        fontFamily: 'Montserrat-Regular',
         //fontWeight:200,
        fontSize: 12,
        marginRight: '1%',
        marginTop:'1%'
    },
   
    loginText: {
        marginTop: '10%',
        marginBottom: '10%',
        alignSelf: 'center',
        fontSize: 40,
        color: 'black',
        fontFamily: 'Montserrat-Regular',
         //fontWeight:100,
    },
    buttonNotSelected: {
        // borderRadius: 5,
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
        // flex:0.3
         // paddingLeft: 10,
        // paddingRight: 10,
        // width: "auto",
        // marginRight:10,
        // alignSelf: 'center',
        // marginLeft: '2%',
        //alignSelf:'flex-end',
       
    },
    inputStyle: {
        marginLeft: '5%',
        marginRight: '5%',
        height: 55,
        backgroundColor: 'white',
        marginTop: '5%',
        shadowColor: 'rgba(0,0,0,0.7)',
        shadowOffset: {
            width: 2,
            height: 4
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderRadius: 8,
        fontFamily: 'Montserrat-Regular',
        //fontWeight: 300,
        fontSize: 18,
        color: '#262626',
        paddingTop: 21,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
    },
    viewForgotPwd: {

    },

    rememberView: {
        flexDirection: 'row',
        flex: 1,
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        height: 30,
        // backgroundColor:'pink'

    },
    tickMarkView: {
        width: 20,
        height: 20,
        flex: 0.05,
        marginRight: '3%',
        borderColor: 'gray',
        borderWidth: .2,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: .5,
            height: .5
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderRadius: .2,
    },
    rememberBtn: {
        flex: 0.45,
        marginTop: '1%',
        height: 20
        //  backgroundColor:'green',
    },
    rememberText: {

    },
    errorText: {
        color: 'red',
        alignSelf: 'center',
        marginTop: '2%',
        marginBottom: '2%'
    },
    forgotPwdBtnView: {
        flex: 0.5,
        alignSelf: 'center',
        margin: '5%',
    },
    forgotPwdBtn: {
        alignSelf: 'center',
    },
    forgotPwdText: {
        alignSelf: 'center',
        height: 20
    },
    fbText: {
        color: 'white',
    },
    signupButton: {
// justifyContent:'center'
//backgroundColor:'red'
    },
    logo: {
        marginTop: '10%',
        marginBottom: '10%',
        alignSelf: 'center',

    },
    signupText: {
        fontSize: 16,
        color: 'red',
        //fontWeight: 500,
       
       
    },
    buttonSelected: {
        borderRadius: 20,
        height: 40,
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        // shadowOffset: {
        //     width: .4,
        //     height: .11
        // },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        marginRight: 10,
        backgroundColor: 'white',
        // alignSelf: 'center',
        //alignSelf:'flex-start'

        paddingLeft: 10,
        paddingRight: 10,
        borderColor: 'black',
        borderWidth: 1,
    },

    buttonNotSelected: {
        borderRadius: 20,
        height: 40,
        width: "auto",
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

        paddingLeft: 10,
        paddingRight: 10,
        borderColor: 'lightgray',
        borderWidth: 1,
        marginRight: 10,
        // alignSelf: 'center',
        // marginLeft: '2%',
        //alignSelf:'flex-end',
    },
    socialMediaLoginView: {
        flexDirection: 'row',
        marginTop: '20%',
        marginBottom: '2%',
        // backgroundColor:'yellow',
        flex: 1,
        height: 60,
        marginLeft: '5%',
        marginRight: '5%',
    },
    facebookBtn: {
        borderRadius: 10,
        height: 55,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowOffset: {
            width: .4,
            height: .11
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        backgroundColor: 'rgb(93, 121, 177)',
        marginRight: '2%',
        alignSelf: 'center'
    },
    viewCenterButton: {
        marginBottom: '10%'
    },
    textSelected: {
        color: 'white',
        fontSize: 18,
    },

    buttonCenter: {
        borderRadius: 22,
        height: 55,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowOffset: {
            width: .4,
            height: .11
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        backgroundColor: 'white',
        alignSelf: 'center',


    },
    buttonRight: {
        borderRadius: 22,
        height: 55,
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowOffset: {
            width: .4,
            height: .11
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        backgroundColor: 'white',
        marginLeft: '2%'
    },
    textButtonTitle: {
        fontSize: 16,
        color: 'white',
        //fontWeight: 500,

    },
    viewSingleLine: {
        marginTop: '3%',
        width: '100%',
        height: '2%',
        backgroundColor: 'lightgray',
        marginBottom: '3%'
    },
    viewShareButtons: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        flex: 0.4,

        height: 50,
        marginBottom: '5%',
        marginLeft: '13%',
        marginRight: '2%'
    },
    textColorTemp: {
        // color: 'white',
    },
    textBottomMark: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 14,
        color: 'white',
        marginLeft: '5%',
        flex: 0.6,
    },
    shareButtons: {
        width: 15,
        height: 15,

    },
    viewBottom: {
        backgroundColor: 'black',
        //alignItems: 'space-between',
        justifyContent: 'center',
        bottom: 1,
        flex: 1,
        flexDirection: 'row'
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
        width:'50%',
        backgroundColor: 'black',
        alignSelf:'center',
        // marginTop:'5%'
    },
    buttonBigNotSelected: {
        borderRadius: 5,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderColor: 'black',
        borderWidth: 1,
        width:'50%',
        backgroundColor: 'white',
        alignSelf:'center',
        // marginTop:'5%'
    },

}