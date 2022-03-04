import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

// LIBRARIES
import { capitalizeFirstLetter } from '../functions'

export default function PersonDetail({ route }) {
	const { person } = route.params
	const name = capitalizeFirstLetter(person.name.first)
	const surname = capitalizeFirstLetter(person.name.last)

	return (
		<View style={styles.background}>
			<View style={styles.container}>
				<Image style={styles.avatar} source={{ uri: person.picture.large }} />
				<View style={styles.detailContainer}>
					<View style={styles.line}>
						<Text style={styles.cellLabel}>Email: </Text>
						<Text style={styles.cellContent}>{ person.email }</Text>
					</View>
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
	detailContainer: {
		marginTop: '10%',
		alignItems: 'center'
	},
	line: {
		flexDirection: 'row',
		paddingTop: 3,
		paddingBottom: 3
	},
	cellLabel: {
		fontSize: 20,
		color: '#E3E3E3',
		fontFamily: 'sans-serif-thin',
		fontWeight: 'bold'
	},
	cellContent: {
		fontSize: 20,
		color: '#E3E3E3',
		fontFamily: 'sans-serif-thin',
		paddingLeft: 5
	},
	avatar: {
		aspectRatio: 1,
		borderRadius: 50
	}
});
