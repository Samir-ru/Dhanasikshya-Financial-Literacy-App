import React, { useState } from 'react';
import { View, TextInput, Button, Text , TouchableOpacity} from 'react-native';

const DebtCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [term, setTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  const calculateMonthlyPayment = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(term) * 12;

    const monthlyPayment = (p * r) / (1 - Math.pow(1 + r, -n));
    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Debt Calculator</Text>
      <TextInput
        style={{ marginTop: 10, marginBottom: 10, padding: 10, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Principal amount"
        keyboardType="numeric"
        value={principal}
        onChangeText={text => setPrincipal(text)}
      />
      <TextInput
        style={{ marginTop: 10, marginBottom: 10, padding: 10, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Interest rate (%)"
        keyboardType="numeric"
        value={interestRate}
        onChangeText={text => setInterestRate(text)}
      />
      <TextInput
        style={{ marginTop: 10, marginBottom: 10, padding: 10, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Term (years)"
        keyboardType="numeric"
        value={term}
        onChangeText={text => setTerm(text)}
      />
      <TouchableOpacity style={{backgroundColor: '#148A9A', padding: 5, marginTop: 10, justifyContent: 'center', alignItems: 'center'}} onPress={calculateMonthlyPayment}><Text style={{color: 'white', fontSize: 20}}>Calculate</Text></TouchableOpacity>
      {monthlyPayment !== '' && (
        <Text style={{ marginTop: 20 }}>
          Monthly Payment: Rs.{monthlyPayment}
        </Text>
      )}
    </View>
  );
};

export default DebtCalculator;
