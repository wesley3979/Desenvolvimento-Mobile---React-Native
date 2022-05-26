import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableHighlight, TextInput, Alert } from 'react-native';

import Axios from 'axios';
import Items from './components/Item';

export default class extends Component {
  state = { word: '', result: '' }

  getBooks = async () => {
    let returnAPI
    if (!this.state.word) {
      Alert.alert('Você precisa digitar algo para ser buscado.')
      return;
    }
    else {
      returnAPI = await Axios.get(`https://hn.algolia.com/api/v1/search?query=${this.state.word}`)
      this.setState({ result: returnAPI.data.hits })
    }
  }

  render() {
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="Digite Algo"
          onChangeText={(text) => this.setState({ word: text })}
        />
        <TouchableHighlight
          onPress={this.getBooks}
          style={styles.button}
        >
          <Text>
            Buscar
          </Text>
        </TouchableHighlight>
        <Items items={this.state.result} />

      </SafeAreaView>
    );

  }


}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 50,
    margin: 20,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: '#6495ED',
    border: 0,
    height: 40,
    margin: 20,
    marginTop: 0,
    borderWidth: 1,
    padding: 10,
  }
});
