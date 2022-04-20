import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Square from './components/Square'

export default class App extends Component {
  state = {
    count: 0
  }

  clicked = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <View style={styles.container}>

        <Square style={styles.square1} name='Square 1' />
        <Square style={styles.square2} name='Square 2' />
        <Square style={styles.square3} name='Square 3' />

        <StatusBar style="light" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },

  square1: {
    color: '#000',
  },

});
