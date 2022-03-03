import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./components/Header";
import Subheader from "./components/Subheader";
import Body from "./components/Body";

export default class App extends Component{

  render(){
    return (
      <View style={styles.container}>
        <Header title="EXERCISE-06" color="#00a1dd"/>
        <Subheader subtitle="MOBILE - PROGRAMMING"/>
        <Body/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})