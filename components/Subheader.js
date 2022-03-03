import React, { Component } from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';

export default class Subheader extends Component {

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.txtSubHeader}>{this.props.subtitle}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#798A93',
        height: 40,
        padding: 10
    },
    txtSubHeader: {
        color: '#ffffff',
        fontWeight: 'bold'
    }
})