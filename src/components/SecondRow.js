import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function SecondRow() {
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-evenly',
        borderWidth: 1,
        borderColor: 'gray',
      }}
    >
      <View>
        <Text>7</Text>
      </View>
      <View>
        <Text>8</Text>
      </View>
      <View>
        <Text>9</Text>
      </View>
      <View>
        <Text> &times; </Text>
      </View>
    </View>
  )
}

// const styles = StyleSheet.create({
//   style,
// })

export default SecondRow
