import TrackList from '@/components/track-list/track-list'
import { defaultStyles } from '@/styles'
import { useHeaderHeight } from '@react-navigation/elements'
import { Text, View } from 'react-native'

export default function SongsScreen() {
	const headerHeight = useHeaderHeight()

	return (
		<View style={[defaultStyles.container, { marginTop: headerHeight }]}>
			<TrackList />
		</View>
	)
}
