import { StatusBar } from 'expo-status-bar';
import React, { Fragment, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const [name, setName] = useState('')
  const [isValidName, setIsValidName] = useState(true)


  const sayHello = () => {
    if (name.length < 1)
      setIsValidName('')
    else {
      setIsValidName(true)
      Alert.alert(`Hello ${name}`)
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.label}>What is your name?</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter name'
        onChangeText={(val) => setName(val)}
      />

      {isValidName ? null :
        <Text style={{ color: 'red' }}>Name is required</Text>
      }

      <TouchableOpacity onPress={sayHello}>
        <Text style={styles.button}> Say Hello</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#777',
    width: 200,
    margin: 10,
    padding: 8,
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#777',
    borderColor: '#777',
    color: '#e5e5e5',
    width: 200,
    margin: 10,
    padding: 8,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
