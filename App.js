import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ShopFrontPage from './components/ShopFrontPage';
import ShopItemPage from './components/ShopItemPage';

export default function App() {
	return (
		// <ShopFrontPage/>
		<ShopItemPage/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
