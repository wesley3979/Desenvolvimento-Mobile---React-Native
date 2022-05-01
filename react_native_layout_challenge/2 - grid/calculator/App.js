import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Col, Row, Grid } from "react-native-easy-grid";

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
      <Grid style={{
        margin: 0,
        padding: 0,
        border: 0,
        fontSize: "100%",
      }}>
        <Row style={{ backgroundColor: "red" }} size={1.5}>
          <Display result={this.state.result} endResult={this.state.endResult} />
        </Row>

        <Row size={2.5}>
          <Col>
            <Row size={1}>
              <Button label='AC' triple onClick={this.clean} />
              <Button label='/' operator onClick={this.add} />
            </Row>

            <Row size={1}>
              <Button label='7' onClick={this.add} />
              <Button label='8' onClick={this.add} />
              <Button label='9' onClick={this.add} />
              <Button label='*' operator onClick={this.add} />
            </Row>

            <Row size={1}>
              <Button label='4' onClick={this.add} />
              <Button label='5' onClick={this.add} />
              <Button label='6' onClick={this.add} />
              <Button label='-' operator onClick={this.add} />
            </Row>

            <Row size={1}>
              <Button label='1' onClick={this.add} />
              <Button label='2' onClick={this.add} />
              <Button label='3' onClick={this.add} />
              <Button label='+' operator onClick={this.add} />
            </Row>

            <Row size={1}>
              <Button label='0' double onClick={this.add} />
              <Button label='.' onClick={this.add} />
              <Button label='=' operator onClick={this.EndOperation} />
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}
