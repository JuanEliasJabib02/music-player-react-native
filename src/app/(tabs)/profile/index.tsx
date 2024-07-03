import TrackList from '@/components/track-list/track-list'
import { useRecentTracks } from '@/lib/hooks/use-recent-tracks'
import { useRecentTracksStore } from '@/store/track-store'
import { defaultStyles } from '@/styles'
import { useHeaderHeight } from '@react-navigation/elements'
import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default function ProfileScreen() {
	const headerHeight = useHeaderHeight()

	const { fetchRecentTracks, recentTracks, clearRecentTracks } = useRecentTracksStore()

	useEffect(() => {
		fetchRecentTracks()
	}, [])

	console.log('executed')
	if (!recentTracks) {
		return (
			<View style={styles.container}>
				<Text>There not are recent tracks</Text>
			</View>
		)
	}

	const handleClearTracks = async () => {
		await clearRecentTracks()
	}

	console.log(recentTracks, 'dsads-xxx')
	return (
		<View style={[defaultStyles.container, { marginTop: headerHeight }]}>
			<ScrollView contentInsetAdjustmentBehavior="automatic">
				<Text style={{ color: 'red', marginBottom: 20 }} onPress={handleClearTracks}>
					Clear Recent Tracks
				</Text>
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
