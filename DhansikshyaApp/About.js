import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';

const About = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>About Dhanasikshya Application</Text>
      <Text style={styles.paragraph}>
        Our Application Dhanasikshya is dedicated to everyone willing to learn financial literacy and tends to teach financial literacy to all the users. Dhanasikshya has inbuilt sections for financial literacy as well as development projects planned by the local government.
      </Text>
      <Text style={styles.heading}>How to Use Dhanasikshya Application</Text>
      <Text style={styles.paragraph}>
        After being logged in to Dhanasikshya, one can navigate to different pages from the hamburger icon, the first one is Home page where user can browse through financial news, under which Gold and Silver prices are displayed, and Exchange rate is also displayed.
      </Text>
      <Text style={styles.paragraph}>
        User can navigate to About page where user can find information on how to use application, what to expect from Dhanasikshya, the approach of the project.
      </Text>
      <Text style={styles.paragraph}>
        User can navigate to Debt section which calculates the amount of interest to be paid after taking a debt for t number of years with r rate of interest. For example, if a person borrows NPR. 100,000 for 3 years with rate of interest of 12%, then Dhanasikshya calculates the amount of interest to be paid each month.
      </Text>
      <Text style={styles.paragraph}>
        User can navigate to Trading section where one can learn regarding shares and investment, Stock market, Risk and return, Diversification, Research, and Long term perspective in brief which would build foundation for beginners.
      </Text>
      <Text style={styles.paragraph}>
        User can navigate to Ward plan where one can find the development projects of the local government as well as plans and strategies that local bodies take to provide trainings and seminars to educate locals on financial literacy.
      </Text>
      <Text style={styles.paragraph}>
        User can navigate to Contact from where one can raise any issues or query regarding financial knowledge, then the issue will be received at the database. From the end point, the development team will respond to the person via mail within one or two business day.
      </Text>
      <Text style={styles.heading}>Who are we?</Text>
      <Text style={styles.paragraph}>
        We the students of BCs Computing at IIMS College are tending to focus on educate people on financial literacy and let people know about the plans strategies that ward has planned to implement, the development projects from the local government.
      </Text>
      <Text style={styles.heading}>What are the problems we are trying to solve?</Text>
      <Text style={styles.paragraph}>
        Focusing on people willing to learn financial literacy and letting people know about the local government projects through Dhanasikshya is our prime goal. In the society, still there are people who does not know how to calculate the amount of interest to be paid and they rely on the lender and often get scammed. So, in order to minimize such circumstances, our app has a feature to calculate the debt amount. In modern society, people are getting greedy and to earn money quick people tend to invest in share market and face a huge loss due to lack of knowledge. Considering this issue, Dhanasikshya tends to educate people on what share market is and how to invest in the right platform. Furthermore, users can directly communicate with the development team regarding financial literacy.
      </Text>
      <Text style={styles.heading}>Our Approach</Text>
      <Text style={styles.paragraph}>
        Our approach to spread financial literacy among everyone is through the application called Dhanasikshya, where users can get plenty of information on how to invest wisely and where to invest so that they can get maximum profit. In addition to just educational blog, we also incorporated with local government bodies to let the users know about development projects along with the plans and strategies. The additional features in the application are debt calculator, financial news, and contact us sections, where user can calculate the amount of interest to be paid to the lender, browse gold/silver prices, money exchange rates, and directly communicate with the development team.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default About;


