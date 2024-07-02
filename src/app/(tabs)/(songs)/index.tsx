import TrackList from '@/components/track-list/track-list'
import { screenPadding } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import { useHeaderHeight } from '@react-navigation/elements'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SongsScreen() {
	const headerHeight = useHeaderHeight()

	return (
		<View style={[defaultStyles.container, { marginTop: headerHeight }]}>
			<ScrollView contentInsetAdjustmentBehavior="automatic">
				<TrackList scrollEnabled={false} />
			</ScrollView>
		</View>
	)
}
