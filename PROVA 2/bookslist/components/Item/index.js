import React, { Component, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default (props) => {
  return (
    <View>
      <FlatList
        data={props.items}
        keyExtractor={item => item.objectID}
        renderItem={({ item }) =>
          <View
            style={styles.flatList}>
            <Text style={styles.text}>AUTHOR: {item.author}</Text>
            <Text style={styles.text}>TITLE: {item.title}</Text>
            <Text style={styles.text}>URL: {item.url}</Text>
          </View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatList: {
    backgroundColor: '#0088',
    height: 130,
    margin: 10,
    marginTop: 0,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    marginBottom: 5,
  },
});


