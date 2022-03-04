import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// LIBRARIES
import { capitalizeFirstLetter } from '../functions'

export default function PersonListItem(props) {
	const { person } = props
	const name = capitalizeFirstLetter(person.name.first)
	const surname = capitalizeFirstLetter(person.name.last)
	const navigation = useNavigation()
	
	return (
		<TouchableHighlight onPress={() => navigation.navigate('person', {
			person: person,
			fullName: name + ' ' + surname
		})}>
			<View style={styles.option}>
				<Image style={styles.image} source={{ uri: person.picture.medium }} />
				<Text style={styles.name}> {name} {surname}</Text>
			</View>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	option: {
		backgroundColor: '#5C5C5C',
		margin: '2%',
		padding: '2%',
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center'
	},
	name: {
		fontSize: 25,
		color: '#E3E3E3',
		fontFamily: 'sans-serif-thin',
		flex: 3
	},
	image: {
		flex: 1,
		aspectRatio: 1,
		marginRight: 20,
		borderRadius: 50
	}
});

