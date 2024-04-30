import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView} from 'react-native'
import FinancialNewsFeed from './FinancialNewsFeed'
import ImageSlider from './ImageSlider'

export default function Home  (){
    return (
      <ScrollView>
        <View style={styles.SliderCon}>
        <ImageSlider/>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>What is Dhanasikshya?</Text>
          <Text style={styles.text}>Dhanasikshya is a financial literacy app designed to empower users with real-time financial news updates, SIP and debt calculators, insights into entering the share market in Nepal, and comprehensive tools for financial education and empowerment.</Text>
      <Text style={styles.title}>What is Financial Literacy?</Text>
      <Text style={styles.text}>
        Financial literacy refers to the ability to understand and effectively use various financial skills, including personal financial management, budgeting, and investing. When you are financially literate, you have the essential foundation of a smart relationship with money that will start a lifelong journey of learning about the financial aspects of your life. Financial literacy is important because:
      </Text>
      <Text style={styles.point}>1. It equips you with the knowledge to make informed decisions, leading to greater monetary stability, less stress, and a higher quality of life.</Text>
      <Text style={styles.point}>2. Financial literacy empowers you to take control of your finances and navigate the challenges and opportunities that arise.</Text>
      <Text style={styles.point}>3. It is a crucial element in achieving financial health.</Text>
    </View>
        <FinancialNewsFeed />
      </ScrollView>
    )
  }

  const styles = StyleSheet.create({
SliderCon:{
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
},
container: {
  paddingHorizontal: 20,
  paddingVertical: 15,
  backgroundColor: '#fff',
  borderRadius: 10,
  marginHorizontal: 10,
  marginVertical: 5,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
},
title: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 10,
},
text: {
  fontSize: 16,
  marginBottom: 10,
},
point: {
  fontSize: 16,
  marginLeft: 20,
  marginBottom: 5,
},
  });



