import Axios from 'axios'
import {
  call, put, takeEvery, takeLatest,
} from 'redux-saga/effects'
import axios from 'axios'
import { weatherTypes } from '../types'
import { weatherActions } from '../actions'

function* getWeatherSaga(action) {
  try {
    console.log('================================================')
    console.log('action', action)
    console.log('================================================')
    const weather = yield call(
      () => axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${action.payload.data}&appid=5a946fa5e49dfe52dca7c9e3e78e9463&units=metric`)
    )
    console.tron.log({ weather })
    yield put({ type: weatherTypes.GET_WEATHER_SUCCESS, payload: { data: weather.data } })
  } catch (error) {
    console.tron.log({ error })
    yield put({ type: weatherTypes.GET_WEATHER_FAILED, payload: { error } })
  }
}

function* weatherSaga() {
  yield takeLatest(weatherTypes.GET_WEATHER, getWeatherSaga)
}

export default weatherSaga
