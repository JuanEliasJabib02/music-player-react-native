import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { colors, fontSize } from './tokens'
import { View } from 'react-native'

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
	headerTitleStyle: {
		fontSize: fontSize.lg,
		color: colors.text,
		fontWeight: '700',
	},
	headerTransparent: true,
}
