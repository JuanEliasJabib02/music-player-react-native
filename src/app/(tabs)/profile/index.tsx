import { TrackDTO } from '@/components/track-list/track-dto'
import TrackList from '@/components/track-list/track-list'
import { defaultStyles } from '@/styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useHeaderHeight } from '@react-navigation/elements'
import { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function ProfileScreen() {
	const headerHeight = useHeaderHeight()
	const [recentTracks, setRecentTracks] = useState<TrackDTO[]>([])

	useEffect(() => {
		const fetchRecentTracks = async () => {
			try {
				const jsonValue = await AsyncStorage.getItem('recentTracks')
				const tracks = jsonValue != null ? JSON.parse(jsonValue) : []
				setRecentTracks(tracks)
			} catch (e) {
				console.error('Error fetching recent tracks', e)
			}
		}

		fetchRecentTracks()
	}, [])

	if (!recentTracks) {
		return (
			<View style={styles.container}>
				<ActivityIndicator size="large" color="#0000ff" />
			</View>
		)
	}

	console.log(recentTracks, '')
	return (
		<View style={[defaultStyles.container, { marginTop: headerHeight }]}>
			<ScrollView contentInsetAdjustmentBehavior="automatic">
				<TrackList scrollEnabled={false} tracks_data={recentTracks} />
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
