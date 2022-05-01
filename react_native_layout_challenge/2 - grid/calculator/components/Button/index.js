import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native'

export default button => {
  const styleButton = [styles.button]
  if (button.double)
    styleButton.push(styles.doubleButton)
  if (button.triple)
    styleButton.push(styles.tripleButton)
  if (button.operator)
    styleButton.push(styles.operationButton)

  return (
    <TouchableHighlight onPress={() => button.onClick(button.label)}>
      <Text style={styleButton}>
        {button.label}
      </Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 3,
    padding: 20,
    backgroundColor: '#f0f0f0',
    color: '#000',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },

  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },

  doubleButton: {
    width: (Dimensions.get('window').width / 4) * 2,
  },

  tripleButton: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
})