import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, } from 'react-native';
import { WebView } from 'react-native-webview';

const FinancialNewsFeed = () => {

  RefereceLink =() =>{
    Linking.openURL('https://www.ashesh.com.np/gold/widget.php?api=922127o062&header_color=0077e5')
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Financial News</Text>
      <Text style={styles.titleTwo}>Today's finance news from different sources</Text>
      <TouchableOpacity onPress={()=> Linking.openURL('https://thehimalayantimes.com/business')}><Text style={{textDecorationLine: 'underline', fontWeight: 800, fontSize: 20}}>The Himalayan Times</Text></TouchableOpacity>
      <WebView
        source={{ uri: 'https://thehimalayantimes.com/business' }}
        style={styles.news}
      />
      <TouchableOpacity onPress={()=> Linking.openURL('https://kathmandupost.com/money')}><Text style={{textDecorationLine: 'underline', fontWeight: 800, fontSize: 20}}>The Kandmandu post</Text></TouchableOpacity>
      <WebView
        source={{ uri: 'https://kathmandupost.com/money' }}
        style={styles.news}
      />
      <TouchableOpacity onPress={()=> Linking.openURL('https://nepalnews.com/s/business')}><Text style={{textDecorationLine: 'underline', fontWeight: 800, fontSize: 20}}>Nepal News</Text></TouchableOpacity>
      <WebView
        source={{ uri: 'https://nepalnews.com/s/business' }}
        style={styles.news}
      />
      <Text style={styles.titleTwo}>Gold & Silver prices</Text>
      <WebView
        source={{ uri: 'https://www.ashesh.com.np/gold/widget.php?api=922127o062&header_color=148A9A' }}
        style={styles.webview}
      />
  <TouchableOpacity onPress={RefereceLink}><Text style={styles.reference}>Source: <Text style={{textDecorationLine: 'underline'}}>Ashesh's Blog</Text></Text></TouchableOpacity>
      <Text style={styles.titleTwo}>Exchange Rates</Text>
      <WebView
        source={{ uri: 'https://www.ashesh.com.np/forex/widget2.php?api=922123o524&header_color=148A9A&background_color=faf8ee&header_title=Nepal%20Exchange%20Rates' }}
        style={styles.webview}
      />
 <TouchableOpacity onPress={RefereceLink}><Text style={styles.reference}>Source: <Text style={{textDecorationLine: 'underline'}}>Ashesh's Blog</Text></Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  titleTwo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
reference:{
  fontSize: 10,
  color: 'blue'
},
  webview: {
    width: "100%",
    height: 100,
    backgroundColor: '#148A9A'
  },

  webShareview:{
    flex: 1,
    width: '100%',
    height: 500,
  },
  news: {
    width: "100%",
    height: 300,
    backgroundColor: '#148A9A',
    margin: 10,
  },
});

export default FinancialNewsFeed;
