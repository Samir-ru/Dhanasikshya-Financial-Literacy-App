import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [annualInterestRate, setAnnualInterestRate] = useState('');
  const [investmentPeriod, setInvestmentPeriod] = useState('');
  const [futureValue, setFutureValue] = useState('');

  const calculateFutureValue = () => {
    const monthlyRate = (annualInterestRate / 12) / 100;
    const periods = investmentPeriod * 12;

    const futureVal = monthlyInvestment * ((Math.pow(1 + monthlyRate, periods) - 1) / monthlyRate) * (1 + monthlyRate);
    setFutureValue(futureVal.toFixed(2));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>SIP Calculator</Text>
      <TextInput
        style={{ marginTop: 10, marginBottom: 10, padding: 10, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Monthly Investment (₹)"
        keyboardType="numeric"
        value={monthlyInvestment}
        onChangeText={text => setMonthlyInvestment(text)}
      />
      <TextInput
        style={{ marginTop: 10, marginBottom: 10, padding: 10, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Annual Interest Rate (%)"
        keyboardType="numeric"
        value={annualInterestRate}
        onChangeText={text => setAnnualInterestRate(text)}
      />
      <TextInput
        style={{ marginTop: 10, marginBottom: 10, padding: 10, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Investment Period (years)"
        keyboardType="numeric"
        value={investmentPeriod}
        onChangeText={text => setInvestmentPeriod(text)}
      />
      <TouchableOpacity style={{ backgroundColor: '#148A9A', padding: 5, marginTop: 10, justifyContent: 'center', alignItems: 'center' }} onPress={calculateFutureValue}><Text style={{ color: 'white', fontSize: 20 }}>Calculate</Text></TouchableOpacity>
      {futureValue !== '' && (
        <Text style={{ marginTop: 20 }}>
          Future Value: ₹{futureValue}
        </Text>
      )}
    </View>
  );
};

export default SIPCalculator;
