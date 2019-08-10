import {Dimensions } from "react-native";

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default {
    container: {
        //paddingTop: 20,
        flex: 1
    },
    navItemStyle: {
        alignItems:'center',
        padding: 10,
        paddingLeft: 10,
        fontSize: 16,
        flexDirection:'row'
    },
    header:{
        backgroundColor: "rgb(246, 205, 74)",
        height:200,
    },
    close:{
        fontSize:25,right:5, 
        top:5, 
        position:'absolute', 
        color:'#262626',
    },
    avatar: {
        width:90,
        height:90,
        borderRadius: 45,
        borderWidth: 4,
        borderColor: "black",
        borderStyle: 'dashed',
       marginLeft:'5%',
       marginRight:'2%',
        
         alignItems: 'center',
        // position: 'absolute',
        marginTop:'20%'
    },
    viewSingleLine:{
        // marginLeft: '10%',
        // marginRight: '15%',
        backgroundColor:'rgb(211,211,211)', 
        height:1,
        width: deviceWidth-190,
        alignSelf:'center',
        marginTop:'1%',
        marginBottom:'1%',
        alignSelf:'center'
    }, 
    name:{
        //alignSelf:'center',
        fontSize:14,
        color:'black',
       
       // position: 'absolute',
        // bottom:"8%"
    },
    emailText:{
        fontSize:14,
        color:'black',
    },
    icon: {
        color:"#262626",
        marginLeft: 5,
        marginRight: 0,
        fontSize: 20
    },
    text:{
        paddingLeft:5,
       color:'#262626'
    },

    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
    },
   

};
  