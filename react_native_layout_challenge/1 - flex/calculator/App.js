import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Display from './components/Display';
import Button from './components/Button'

export default class App extends Component {
  state = { result: '0', endResult: '0' }

  clean = () => {
    this.setState({ result: '0' })
  }

  add = x => {
    try {
      const operations = '/*-+=.'
      if (this.state.result === '0' && !operations.includes(x)) {
        this.setState({ result: x })
        return
      }

      if (isNaN(this.state.result.slice(-1)) && operations.includes(x))
        return

      this.setState({ result: this.state.result + x, endResult: '' })

    }
    catch {
      return
    }
  }

  EndOperation = () => {
    try {
      let endResult = eval(this.state.result)
      this.setState({ endResult: '= ' + endResult })

      if (isNaN(this.state.endResult))
        this.setState({ endResult: 'Erro' })
    }
    catch {
      this.setState({ endResult: 'Erro' })
    }
  }

  render() {

    return (
      <View style={styles.container}>

        <Display result={this.state.result} endResult={this.state.endResult} />

        <View style={styles.buttons}>
          <Button style={styles.button} label='AC' triple onClick={this.clean} />
          <Button style={styles.button} label='/' operator onClick={this.add} />

          <Button style={styles.button} label='7' onClick={this.add} />
          <Button style={styles.button} label='8' onClick={this.add} />
          <Button style={styles.button} label='9' onClick={this.add} />
          <Button style={styles.button} label='*' operator onClick={this.add} />

          <Button style={styles.button} label='4' onClick={this.add} />
          <Button style={styles.button} label='5' onClick={this.add} />
          <Button style={styles.button} label='6' onClick={this.add} />
          <Button style={styles.button} label='-' operator onClick={this.add} />

          <Button style={styles.button} label='1' onClick={this.add} />
          <Button style={styles.button} label='2' onClick={this.add} />
          <Button style={styles.button} label='3' onClick={this.add} />
          <Button style={styles.button} label='+' operator onClick={this.add} />

          <Button style={styles.button} label='0' double onClick={this.add} />
          <Button style={styles.button} label='.' onClick={this.add} />
          <Button style={styles.button} label='=' operator onClick={this.EndOperation} />

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },

  display: {
    flex: 1,
    backgroundColor: 'grey'
  },

  buttons: {
    backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

});
