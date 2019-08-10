export default {
    viewSingleLineCell: {
        marginTop: '2%',
        width: '100%',
        height: '1%',
        backgroundColor: 'lightgray',
        marginBottom: '2%'
    },
    topBlackView: {
        backgroundColor: 'black',
        flexDirection: 'row',
        height: 100,
        width: '100%',
        justifyContent:'center',
        // flex: 1,
    },
    viewSingleLine: {
        marginTop:'5%',
        width: '100%',
        height: '0.4%',
        backgroundColor: 'lightgray',
        marginBottom: '5%'

    },
    viewAddImage: {
        alignSelf: 'center',
        width: '90%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        borderRadius: 20, 
        borderColor:'lightgray', 
        borderWidth:1
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
        flex:0.45
       
       
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
        flex:0.45,
        backgroundColor: 'black',
       
       
    },
    viewBottomButtons:{
        flexDirection: 'row', 
        marginTop:'5%',
        alignSelf: 'center', 
        justifyContent: 'space-between',
         width:'90%' ,
         marginBottom:'5%'
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
        width:'40%',
        backgroundColor: 'black',
        alignSelf:'center',
        marginTop:'5%'
    },

}
