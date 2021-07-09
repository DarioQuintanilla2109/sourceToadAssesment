import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native'
import HomeScreen from './src/home/Home'
import { createStackNavigator } from '@react-navigation/stack'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import sourceToad from './assets/sourcetoad-loader.png'
import DT from './darkTheme'
import myDarkTheme from './darkTheme'

const HomeStack = createStackNavigator()

function HomeScrenStack({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'SourceToad Calculator',
          headerLeft: () => (
            <Image
              style={{ height: 50, width: 50, borderRadius: 100 }}
              source={require('./assets/sourcetoad-loader.png')}
            />
          ),
        })}
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  )
}

function App() {
  const scheme = useColorScheme()
  const MyDarkTheme = DT()

  return (
    <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme : DefaultTheme}>
      <HomeScrenStack />
    </NavigationContainer>
  )
}

export default App
