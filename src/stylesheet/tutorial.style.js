export default {
    container: {
        flex: 1,
    },
    buttonSelected: {
        borderRadius: 10,
        height: 55,
         flex:0.4,
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
       
       
    },
    buttonNotSelected:{
        borderRadius: 10,
        height: 55,
         flex:0.4,
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
       
        borderColor: 'black',
        borderWidth: 1,
    },
    textSelected:{
      color:'white',
      fontSize: 13,
    },

    textNotSelected:{
      color:'black',
      fontSize: 13,
    },

textDescription:{
    color:'black',
    fontSize: 13,
     marginLeft:'5%',
     marginRight: '5%',
    lineHeight: 20
}, 
image:{
   alignSelf:'center'
}

}