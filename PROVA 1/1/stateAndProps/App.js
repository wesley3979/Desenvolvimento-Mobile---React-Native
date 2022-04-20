import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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

        <Text style={styles.title}>You've pressed the button: {this.state.count} time(s)</Text>

        <TouchableOpacity style={styles.button} onPress={this.clicked}>
          <Text> CLICK FOR +1</Text>
        </TouchableOpacity>

        <StatusBar style="light" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
  },

  button: {
    backgroundColor: '#FFF',
    color: '#282c34',
    padding: 12,
    borderRadius: 3,
  },

});
