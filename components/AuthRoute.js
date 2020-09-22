import React, {useState, useEffect, useMemo, useReducer} from 'react'
import {View, AsyncStorage, StyleSheet} from 'react-native';

import { ActivityIndicator, Colors } from 'react-native-paper';

import { AuthContext } from './BeforeLogin/redux';
import MainStack from './BeforeLogin/mainStack';
import BottomTab from './Store/BottomTab'



function DrawNavigator(props) {

      const initialStates = {
            isLoading: true, 
            number: null, 
            userToken: null
      }; 

      const loginReducer = (prevState, action) => {
            switch(action.type) {
                  case 'TOKEN': 
                  return {
                        ...prevState, 
                        userToken: action.token,
                        isLoading: false
                  }
                  case 'LOGIN': 
                  return {
                        ...prevState,
                        userToken: action.token, 
                        isLoading: false
                  }
                  case 'REGISTER': 
                  return {
                        ...prevState, 
                        userToken: action.token,
                        isLoading: false
                  }
                  case 'LOGOUT': 
                  return {
                        ...prevState, 
                        userToken: null,
                        isLoading: false
                  }
            }
      };


      const [loginState, dispatch] = useReducer(loginReducer, initialStates);

      const Auth = useMemo(() => ({
            Login: async (token) => {
                  await AsyncStorage.setItem('Token',token);
                  dispatch({type: 'LOGIN', token})
            },
            SignUp: async (token) => {
                  await AsyncStorage.setItem('Token',token);
                  dispatch({type: 'REGISTER', token})
            },
            Logout: async () => {
                  await AsyncStorage.removeItem('Token')
                  dispatch({type: 'LOGOUT'})
            }
      }), [])

      useEffect(() => {
            setTimeout(async () => {
                  let userToken = null 
                  userToken = await AsyncStorage.getItem('Token');
                  dispatch({type: 'TOKEN', token: userToken})
            },1000)
      }, [])

      if(loginState.isLoading ) {
            return (
                  <View style={styles.loading}>
                        <ActivityIndicator animating={true} color={Colors.red800}  size="large" />
                  </View>
            );
      }

      return (
      <AuthContext.Provider value={Auth}>
            {
                  loginState.userToken === null ? (
                        <MainStack />
                  ) : (
                        <BottomTab/>
                  ) 
            } 
      </AuthContext.Provider>
      );
}

const styles = StyleSheet.create({
      loading: {
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center'
      }
})

export default DrawNavigator;