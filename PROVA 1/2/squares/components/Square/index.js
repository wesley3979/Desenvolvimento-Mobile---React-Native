import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PropTypes from 'prop-types';

export default class Square extends Component {

  static propTypes = {
    name: PropTypes.string,
  }

  static defaultProps = {
    name: 'Square',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#FFF',
  },
});