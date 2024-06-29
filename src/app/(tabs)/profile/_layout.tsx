import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { View } from 'react-native'

export default function ProfileScreenLayout() {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen name="index" options={{ headerTitle: 'Profile' }} />
			</Stack>
		</View>
	)
}
