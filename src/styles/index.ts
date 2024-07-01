import { colors, fontSize } from '@/constants/tokens'
import { StyleSheet } from 'react-native'

export const defaultStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		paddingHorizontal: 16,
		paddingVertical: 16,
	},
	text: {
		fontSize: fontSize.base,
		color: colors.text,
	},
})

export const utilsStyles = StyleSheet.create({})
