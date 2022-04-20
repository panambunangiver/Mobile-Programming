import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import { Team, Header, TextInput, Label, Button} from '../../components';
import { HomeButton, List, ProfilePic } from '../../assets';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.page}>

        <Header style={{flex:1}} title={"Money Tracker"} subTitle={"Track your money"} />
        <View style={styles.container}>
          <ProfilePic />
        </View>

        <Team height={20} />
        <View style={styles.contentWrapper}>
          <View style={styles.head}>
            <Label title="Your Balance" fontsize={16} />
            <View style={styles.border}>
              <View style={styles.balanceWrapper}>
                <Label
                  title="Rp. 10.000.000"
                  fontsize={24}
                  fontfamily={'Poppins-SemiBold'}
                />
              </View>
            </View>

            <Team  height={20} />

            <View style={{flexDirection: 'row'}}>
              <View style={{paddingRight: 20}}>
                <Label title="Cash On Hand" fontfamily="Poppins-Regular" />
                <Team height={11} />
                <Label title="Cash On Bank" fontfamily="Poppins-Regular" />
              </View>
              <View>
                <Label title="Rp. 4.000.000" fontfamily="Poppins-Medium" />
                <Team height={11} />
                <Label title="Rp. 6.000.000" fontfamily="Poppins-Medium" />
              </View>
            </View>
            

          </View>
        </View>

        <Team height={20} />        
        <View style={styles.contentWrapper}>
          <View style={styles.transactionWrapper}>
            
            <Label title="Add Transaction" fontsize={16} />

            <Team height={9} />
            <Button
              title="Cash On Hand"
              onPress={() => navigation.navigate('CashOnHand')}
            />
          <Team height={18} />
            <Button
              title="Cash On Bank"
              onPress={() => navigation.navigate('CashOnBank')}
            />
          </View> 
        </View>

        <Team height={25} />
        <View style={styles.contentWrapper}>
        <View style={styles.footer}>
          <View style={styles.footer2}>
            <HomeButton />
            <List style={styles.listStyle} />
          </View>
        </View>
        </View>

      </View>
    </ScrollView>
    );
  };
  
  export default Home;
  
  const styles = StyleSheet.create({
    page: {
      flex: 1,
    },
    contentWrapper: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 24,
      paddingTop: 16,
      paddingBottom: 40,
    },
    container: {
      height: 237,
      position: 'absolute',
      left: 310,
      top: 40,
    },
    head: {
      flex: 1,
      marginHorizontal: 24,
    },
    balanceWrapper: {
      alignItems: 'center',
      marginRight: 24,
      paddingBottom: 18,
    },
    border: {
      borderBottomWidth: 1,
    },
    transactionWrapper: {
      flex: 1,
      paddingHorizontal: 20,
    },
    footer: {
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
    },
    footer2: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 30,
    },
    listStyle: {
      paddingLeft: 300,
    },
  });