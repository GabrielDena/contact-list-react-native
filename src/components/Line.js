import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Line({ label = '', content = '' }) {
	
	return (
			<View style={styles.line}>
				<Text style={[
					styles.cell,
					styles.label,
					label.length > 8 ? styles.longText : null
				]}>{label}</Text>
				<Text style={[
					styles.cell,
					styles.content,
					content.length > 10 ? styles.longText : null
				]}>{content}</Text>
			</View>
	)
}

const styles = StyleSheet.create({
	line: {
		flexDirection: 'row',
		paddingTop: 3,
		paddingBottom: 3,
		marginRight: 'auto',
		alignItems: 'center',
	},
	cell: {
		fontSize: 20,
		color: '#E3E3E3',
		fontFamily: 'sans-serif-thin',
	},
	label: {
		fontWeight: 'bold',
		marginRight: 10,
		flex: 1
	},
	content: {
		flex: 3
	},
	longText: {
		fontSize: 17
	}
})
