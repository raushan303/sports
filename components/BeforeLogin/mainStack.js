import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './main';
import SignIn from './SignIn';
import SignUp from './SignUp';

const MainStack = createStackNavigator();

const MainStackScreen = ({navigation}) => (
	<MainStack.Navigator headerMode='none'>
		<MainStack.Screen name="MainScreen" component={MainScreen} />
		<MainStack.Screen name="SignInScreen" component={SignIn} />
		<MainStack.Screen name="SignUpScreen" component={SignUp} />
	</MainStack.Navigator>
)

export default MainStackScreen;