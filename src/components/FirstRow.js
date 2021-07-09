import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function FirstRow() {
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
        <Text style={{ width: 50 }}>A/C</Text>
      </View>
      <View>
        <Text>+/-</Text>
      </View>
      <View>
        <Text>%</Text>
      </View>
      <View>
        <Text> &#247;</Text>
      </View>
    </View>
  )
}

// const styles = StyleSheet.create({
//   style,
// })

export default FirstRow
