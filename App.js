import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// COMPONENTS
import PeoplePage from './src/pages/PeoplePage'

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{
				headerStyle: {
					backgroundColor: '#292929',
					height: '13%',
					alignItems: 'flex-start',
					justifyContent: 'flex-end'
				},
				headerTintColor: '#E3E3E3',
				headerTitleStyle: {
					fontSize: 30,
					fontFamily: 'sans-serif-thin',
					padding: '5%'
				}
			}}>
				<Stack.Screen
					name='people'
					component={PeoplePage}
					options={{ title: 'People' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
