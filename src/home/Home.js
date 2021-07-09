import React, { useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from 'react-native'
import FirstRow from '../components/FirstRow'
import SecondRow from '../components/SecondRow'
import ThirdRow from '../components/ThirdRow'
import FourthRow from '../components/FourthRow'
import LastRow from '../components/LastRow'
import { widthPercentageToDP, heightPercentageToDP } from '../../utils/scaler'

function Home() {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>X</Text>
            </Pressable>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <View style={{ flex: 2, backgroundColor: '#1c1c1c' }}>
                <Text>hey</Text>
              </View>
              <FirstRow />
              <SecondRow />
              <ThirdRow />
              <FourthRow />
              <LastRow />
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Open Calculator</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '90%',
    height: '80%',
    margin: 20,
    backgroundColor: '#1c1c1c',
    borderRadius: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#648c1c',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginRight: 'auto',
    marginBottom: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

export default Home
