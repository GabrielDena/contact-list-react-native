import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

// LIBRARIES
import axios from 'axios';

// COMPONENTS
import PersonList from '../components/PersonList';

export default function PeoplePage() {

	const [people, setPeople] = useState([])
	const [loading, setLoading] = useState([false])
	const [error, setError] = useState([false])

	useEffect(async () => {
		setLoading(true)
		await setTimeout(() => {
			axios
				.get('https://randomuser.me/api?nat=us&results=15')
				.then(response => {
					const { results } = response.data
					setPeople(results)
					setLoading(false)
				}).catch(error => {
					// Error handling
					setError(true)
					setLoading(false)
				})
		}, 1500)
	}, [])

   return (
	   <View style={styles.container}>
			{loading
				? < ActivityIndicator size='large' color='#FFF' />
			   	: error
				   ? <Text styles={styles.error}>Something went wrong</Text>
				   : < PersonList people={people} />
			}
		</View>
   );
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#292929',
		height: '100%',
		flex: 1,
		justifyContent: 'center',
	},
	error: {
		color: 'red',
		alignSelf: 'center'
	}
});
