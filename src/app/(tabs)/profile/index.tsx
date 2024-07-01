import { defaultStyles } from '@/styles'
import { useHeaderHeight } from '@react-navigation/elements'
import { Text, View } from 'react-native'

export default function ProfileScreen() {
	const headerHeight = useHeaderHeight()

	return (
		<View style={[defaultStyles.container, { marginTop: headerHeight }]}>
			<Text style={defaultStyles.text}>Profile Screen</Text>
		</View>
	)
}
