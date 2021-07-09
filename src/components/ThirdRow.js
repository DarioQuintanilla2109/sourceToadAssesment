import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function ThirdRow() {
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
        <Text>4</Text>
      </View>
      <View>
        <Text>5</Text>
      </View>
      <View>
        <Text>6</Text>
      </View>
      <View>
        <Text> &minus;</Text>
      </View>
    </View>
  )
}

// const styles = StyleSheet.create({
//   style,
// })

export default ThirdRow
