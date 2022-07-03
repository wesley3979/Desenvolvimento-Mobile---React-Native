import React, { Component, useState, useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

import { UserContext } from '../../App'

export default () => {

  const bookslist = useContext(UserContext);
  return (
    <View>
      <FlatList
        data={bookslist}
        keyExtractor={item => item.objectID}
        renderItem={({ item }) =>
          <View
            style={styles.flatList}>
            <Text style={styles.text}>AUTHOR: {item.author}</Text>
            <Text style={styles.text}>TITLE: {item.title}</Text>
            <Text style={styles.text}>URL: {item.url}</Text>
            <Rating
              type='star'
              count={5}
              startingValue={0}
              imageSize={25}
              fractions={2}
            />
          </View>}
      />
    </View >
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


