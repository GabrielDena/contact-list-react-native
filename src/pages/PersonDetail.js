import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

// LIBRARIES
import { capitalizeFirstLetter } from '../functions'

// COMPONENTS
import Line from '../components/Line';

export default function PersonDetail({ route }) {
	const { person } = route.params
	const name = capitalizeFirstLetter(person.name.first)
	const surname = capitalizeFirstLetter(person.name.last)

	return (
		<View style={styles.background}>
			<View style={styles.container}>
				<Image style={styles.avatar} source={{ uri: person.picture.large }} />
				<View style={styles.detailContainer}>
					<Line label='Email:' content={person.email} />
					<Line label='City:' content={person.location.city} />
					<Line label='State:' content={person.location.state} />
					<Line label='Phone Number:' content={person.phone} />
					<Line label='Cellphone:' content={person.cell} />
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#292929',
		height: '100%',
		padding: '2%'
	},
	container: {
		padding: '5%',
		backgroundColor: '#5C5C5C',
		borderRadius: 30,
		height: '100%'
	},
	avatar: {
		aspectRatio: 1,
		borderRadius: 50
	},
	detailContainer: {
		marginTop: '10%',
		alignItems: 'center'
	},
})
