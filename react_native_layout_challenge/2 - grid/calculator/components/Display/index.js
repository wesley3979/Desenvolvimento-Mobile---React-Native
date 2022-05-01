import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { Component } from 'react';

export default (props) => {
  return (
    <View style={styles.display}>
      <Text style={{ fontSize: 60, color: '#FFF' }}>{props.result}</Text>
      <Text style={{ fontSize: 30, color: '#FFF' }}>{props.endResult}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    backgroundColor: 'grey',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderWidth: 1,
    borderColor: '#888',
  },

});
