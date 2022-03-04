import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';

// LIBRARIES
import axios from 'axios';

// COMPONENTS
import PersonList from '../components/PersonList';

export default function PeoplePage() {

   	const [people, setPeople] = useState([])

	useEffect(async () => {
		await axios
			.get('https://randomuser.me/api?nat=br&results=15')
			.then(response => {
				const { results } = response.data
				setPeople(results)
			})
	}, [])

   return (
		<View style={styles.container}>
			<PersonList people={people} />
		</View>
   );
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#292929',
		height: '100%'
	}
});
