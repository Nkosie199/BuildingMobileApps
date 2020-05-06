import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBxO_Iln2c_Li9Q1ygCN-wmZN2ovW5sXVw",
  authDomain: "dinder-717eb.firebaseapp.com",
  databaseURL: "https://dinder-717eb.firebaseio.com",
  projectId: "dinder-717eb",
  storageBucket: "dinder-717eb.appspot.com",
  messagingSenderId: "1014745069034",
  appId: "1:1014745069034:web:0ae21b45f8b2272cacee93",
  measurementId: "G-5SPTMVS5LD"
};


export default class ConfigStore {
  constructor() {
    firebase.initializeApp(config)
    this.splashTime = 1000
    this.splashImg = require('../../images/splash.jpg')
    this.loginBG = require('../../images/login.jpg')
  }
  get SplashImg() {
    return this.splashImg
  }
  get SplashTime() {
    return this.splashTime
  }
  get LoginBG() {
    return this.loginBG
  }
}