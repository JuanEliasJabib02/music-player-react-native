import { defaultStyles } from '@/styles'
import { useHeaderHeight } from '@react-navigation/elements'
import { Text, View } from 'react-native'

export default function SongsScreen() {
	const headerHeight = useHeaderHeight()

	return (
		<View style={[defaultStyles.container, { marginTop: headerHeight }]}>
			<Text style={defaultStyles.text}>Hi This is a Text</Text>
		</View>
	)
}
