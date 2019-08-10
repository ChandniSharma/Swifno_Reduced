import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';
import styles from '../stylesheet/tutorial.style'

console.disableYellowBox = true;
export default class Tutorial extends Component {

    render() {
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>

                <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                    <Image style={styles.image} source={require('../../src/assets/Images/mobile.png')} />

                    <Text style={styles.textDescription}>
                        Lorem ipsum dolor sit er elit lamet, consectetaur cillium adipisicing pecu, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TouchableOpacity underlayColor="#25b6ad" style={[styles.buttonNotSelected]}>
                            <Text style={styles.textNotSelected}>Previous</Text>
                        </TouchableOpacity>

                        <TouchableOpacity underlayColor="#25b6ad" style={[styles.buttonSelected]} onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={styles.textSelected}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>

        )
    }
}