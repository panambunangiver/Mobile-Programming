import React, { Component } from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';

export default class Body extends Component {

    render(){
        return(
            <View style={styles.container}>
                <Text>1. PANAMBUNAN GIVER G.A (Ketua)</Text>
                <Text>2. HALID MUHAMMAD (Anggota)</Text>
                <Text>3. NOVRANDO NATANAEL HIZKIA (Anggota)</Text>
                <Text>4. MICHAEL DANIEL JEFFERSON (Anggota)</Text>   
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})