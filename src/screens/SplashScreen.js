import React, { useEffect } from 'react'
import {
  View, StyleSheet, Image, Dimensions,
} from 'react-native'
import LottieView from 'lottie-react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { StackActions } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'
import { useDispatch } from 'react-redux'
import { loading } from '../../assets/animations'
import { background1 } from '../../assets/images'
import { weatherActions } from '../redux/actions'

const { width, height } = Dimensions.get('window')
const SplashScreenn = (props) => {
  const { navigation } = props
  const dispatch = useDispatch()
  useEffect(() => {
    getDataFromAsyncStorage()
  }, [])

  const getDataFromAsyncStorage = async () => {
    dispatch(weatherActions.getWeather('da lat'))
    SplashScreen.hide()
    navigation.replace('MainScreen')
  }

  return (
    <View style={styles.container}>
      <Image
        source={background1}
        style={{ width, height }}
        resizeMode="cover"
      />
    </View>
  )
}

export default SplashScreenn

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
