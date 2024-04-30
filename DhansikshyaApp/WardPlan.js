import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const ProgramDetails = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style ={styles.heading}>Ward level budget planing of Gokarneswor municipality</Text>
      <Text style ={styles.title}>Capacity Training for women healthworker</Text>
        <Text style ={styles.category}>Category:</Text>
        <Text style ={styles.normal}>Gender equality and inclusive community</Text>
        <Text style ={styles.category}>Funding source:</Text>
        <Text>internal source through cash</Text>
          <Text>{'\n'}</Text>
      <Text style ={styles.title}>Financial upliftment program and skill training for Women and undeserved community</Text>
        <Text style ={styles.category}>Category:</Text>
        <Text style ={styles.normal}>Gender equality and inclusive community</Text>
        <Text style ={styles.category}>Funding source:</Text>
        <Text>internal source through cash</Text>
        <Text>{'\n'}</Text>
        <Text style ={styles.title}>Occupation Training for Women, undeserved community and elderly people</Text>
        <Text style ={styles.category}>Category:</Text>
        <Text style ={styles.normal}>Gender equality and inclusive community</Text>
        <Text style ={styles.category}>Funding source:</Text>
        <Text>internal source through cash</Text>
        <Text>{'\n'}</Text>
        <Text style ={styles.title}>Financial upliftment program and skill development for different community</Text>
        <Text style ={styles.category}>Category:</Text>
        <Text style ={styles.normal}>Industrial</Text>
        <Text style ={styles.category}>Funding source:</Text>
        <Text>Tax distribution and internal government funds</Text>



    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  normal: {
    fontSize: 16,
    marginTop: 10,
  },
  category: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  }
});

export default ProgramDetails;
