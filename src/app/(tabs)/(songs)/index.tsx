import TrackList from '@/components/track-list/track-list'
import { defaultStyles } from '@/styles'
import { useHeaderHeight } from '@react-navigation/elements'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SongsScreen() {
	const headerHeight = useHeaderHeight()

	return (
		<View style={[defaultStyles.container, { marginTop: headerHeight }]}>
			<ScrollView style={{ flex: 1 }}>
				<TrackList scrollEnabled={false} />
			</ScrollView>
		</View>
	)
}
