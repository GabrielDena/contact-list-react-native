import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(props) {
   	return (
		<View style={style.container}>
			<Text style={style.title}>{props.title}</Text>
		</View>
   	)
}

const style = StyleSheet.create({
	container: {
		height: '13%',
		alignItems: 'flex-start',
		justifyContent: 'flex-end'
	},
	title: {
		fontSize: 30,
		fontFamily: 'sans-serif-thin',
		color: '#E3E3E3',
		padding: "5%"
	}
})
