import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function LastRow() {
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
        <Text>0</Text>
      </View>
      <View>
        <Text>.</Text>
      </View>
      <View>
        <Text>=</Text>
      </View>
    </View>
  )
}

// const styles = StyleSheet.create({
//   style,
// })

export default LastRow
