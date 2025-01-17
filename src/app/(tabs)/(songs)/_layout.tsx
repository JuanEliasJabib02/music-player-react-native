import { StackScreenWithSearchBar } from '@/constants/layout'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { View } from 'react-native'

export default function SongsScreenLayout() {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						headerTitle: 'Top 15 Songs',
						contentStyle: {
							backgroundColor: '#000',
						},
						...StackScreenWithSearchBar,
					}}
				/>
			</Stack>
		</View>
	)
}
