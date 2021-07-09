import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function FourthRow() {
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
        <Text>1</Text>
      </View>
      <View>
        <Text>2</Text>
      </View>
      <View>
        <Text>3</Text>
      </View>
      <View>
        <Text> &#x2B;</Text>
      </View>
    </View>
  )
}

// const styles = StyleSheet.create({
//   style,
// })

export default FourthRow
