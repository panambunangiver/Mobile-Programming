import React, { Component } from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';

export default class Header extends Component {

    render(){
        const { title } = this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.txtHeader}>{title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00a1dd',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtHeader: {
        color: '#ffffff',
        fontWeight: 'bold'
    }
})