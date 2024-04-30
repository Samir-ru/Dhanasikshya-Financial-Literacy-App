import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking} from 'react-native';


const SharesComponent = () => {
  RefereceLink =() =>{
    Linking.openURL('https://www.youtube.com/watch?v=dpsdrZikbMI')
  }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Types of Shares:</Text>
      <Text style={styles.subHeading}>1. Ordinary Shares:</Text>
      <Text>- Represent ownership in a company. Owners have voting rights and may receive dividends.</Text>
      <Text style={styles.subHeading}>2. Preferred Shares:</Text>
      <Text>- Pays fixed dividends, no voting rights but higher claim on assets and earnings.</Text>
      <Text style={styles.subHeading}>3. Convertible Shares:</Text>
      <Text>- Can be converted into a predetermined number of common shares.</Text>
      <Text style={styles.subHeading}>4. Cumulative and Non-cumulative Shares:</Text>
      <Text>- Cumulative shares ensure missed dividends are paid later; non-cumulative shares don't offer this.</Text>
      <Text style={styles.subHeading}>5. Restricted Shares:</Text>
      <Text>- Subject to restrictions on sale or transfer imposed by the issuing company or regulatory authorities.</Text>
      <Text style={styles.subHeading}>6. Bonus Shares:</Text>
      <Text>- Additional shares given to existing shareholders free of charge.</Text>
      <Text style={styles.subHeading}>7. Rights Issue:</Text>
      <Text>- Offers existing shareholders the right to buy additional shares at a discounted price.</Text>

      <Text style={styles.heading}>How to Buy Shares:</Text>
      <Text>- Create a bank account and Demat account for electronic holding of shares.</Text>
      <Text>- Set up a trading account with a stockbroker.</Text>
      <Text>- Transfer funds from the bank account to the trading account.</Text>
      <Text>- Conduct research on potential investments.</Text>
      <Text>- Select a suitable stock and place an order through the trading account.</Text>

      <Text style={styles.heading}>Stock Market:</Text>
      <Text>- Platform for buying and selling shares of publicly listed companies.</Text>
      <Text>- Operates through exchanges like the Nepal Stock Exchange (NEPSE).</Text>
      <Text>- Companies raise capital via IPOs, and investors trade shares.</Text>

      <Text style={styles.heading}>Dividends:</Text>
      <Text>- Portions of company earnings distributed to shareholders.</Text>
      <Text>- Paid out regularly (quarterly, semi-annually, or annually) as a reward for investing.</Text>


      <Text style={styles.heading}>Nepse tutorial:</Text>
      <Text>For Nepse tutorial you please click  here : </Text>
      <TouchableOpacity onPress={RefereceLink}><Text style={styles.blue}>NEPSE tutorial</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=> Linking.openURL('https://www.youtube.com/@IdeapreneurNepal')}><Text style={styles.margin}>Source: IdeapreneurNepal</Text></TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    marginBottom: 0,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  subHeading: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  margin:{
    marginBottom:50,
    color: 'blue',
  },
  blue:{
    color: 'blue'
  }
});

export default SharesComponent;
