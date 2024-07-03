import { StackScreenWithSearchBar } from '@/constants/layout'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { View } from 'react-native'

export default function ProfileScreenLayout() {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						headerTitle: 'Mi perfil',
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
