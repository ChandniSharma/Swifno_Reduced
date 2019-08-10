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
        fontSize: 22, marginLeft: '5%', marginRight: '-5%', marginTop: '5%'
    },
    iconCheckBox: {
        fontSize: 30
    },
    leftView: {
        alignSelf: 'flex-end',

        flex: 0.4,
        // backgroundColor:'red'
    },
    orText: {
        color: 'gray',
        // fontFamily: 'Montserrat-Regular',
        // fontWeight:'200',
        fontSize: 18,
        alignSelf: 'center',
        marginBottom: '5%'
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
   
    logo: {
        marginTop: '10%',
        marginBottom: '10%',
        alignSelf: 'center',
    },

    viewSingleLineError:{
        // marginLeft: '10%',
        // marginRight: '15%',
        backgroundColor:'red', 
        height:20,
        alignSelf:'center',
        marginTop:'1%',
        marginBottom:'1%'
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
       //  backgroundColor:'pink',

    },
    ViewTickmark:{
       // marginRight: '-3%',
       alignItems: 'center',
       justifyContent:'center',
       backgroundColor:'red',
       height:'100%',
       marginTop:'5%'
    },
    viewRememberText:{
        marginTop: '1%',
        marginLeft:'5%'
    },
    tickMarkView: {
        // backgroundColor:'blue',
        height: 40,
        flex:0.1,
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
        justifyContent:'center',
        // backgroundColor:'green',
    },
    rememberText: {
   // marginLeft:'2%',
     fontSize:16,
     height:20,
   //  marginTop:'2%'

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
        height: 25,
        color: 'gray',
        fontSize:18
    },
    fbText: {
        color: 'white',
        fontSize:13,
        //marginRight:'5%'
    },
    signupButton: {

    },
    signupText: {
        fontSize: 14,
        color: 'red',
        fontWeight: 'bold',
    },
    buttonSelected: {
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
        backgroundColor: 'black',
        alignSelf: 'center',

    },
    errorText: {
        color: 'red',
        alignSelf: 'center',
        marginTop: '2%',
        marginBottom: '2%'
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
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',

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
  
   

}