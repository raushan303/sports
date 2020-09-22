import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MyProfile from './profile';


const Stack = createStackNavigator()

function ProfileNavigator(props) {
	return (
		<Stack.Navigator initialRouteName='Profile' >
			<Stack.Screen name='Profile' component={MyProfile} />
		</Stack.Navigator>
	);
}

export default ProfileNavigator;