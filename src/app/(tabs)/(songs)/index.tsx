import { convertToTrackDTO, TrackDTO } from '@/components/track-list/track-dto'
import TrackList from '@/components/track-list/track-list'
import { fetcher } from '@/lib/utils'
import { defaultStyles } from '@/styles'
import { useHeaderHeight } from '@react-navigation/elements'
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Track } from 'react-native-track-player'
import useSWR from 'swr'

/* Only because this is a interview i gonna keep this apikey visible

sensitive data must be saved in .env(scripted env)
*/
const API_KEY = 'c19c47264b0dfd0973d63aa54cb6788c'
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=colombia&api_key=${API_KEY}&format=json`

export default function SongsScreen() {
	const headerHeight = useHeaderHeight()

	const { data, error } = useSWR<{ tracks: { track: Track[] } }>(URL, fetcher)

	if (error) {
		return (
			<View style={styles.container}>
				<Text>Error fetching data</Text>
			</View>
		)
	}

	if (!data) {
		return (
			<View style={styles.container}>
				<ActivityIndicator size="large" color="#0000ff" />
			</View>
		)
	}

	const transformedTracks: TrackDTO[] = data.tracks.track.slice(0, 15).map(convertToTrackDTO)

	return (
		<View style={[defaultStyles.container, { marginTop: headerHeight }]}>
			<ScrollView contentInsetAdjustmentBehavior="automatic">
				<TrackList scrollEnabled={false} tracks_data={transformedTracks} />
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	trackItem: {
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	trackName: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	trackArtist: {
		fontSize: 16,
		color: '#666',
	},
})
