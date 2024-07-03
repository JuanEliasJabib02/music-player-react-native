import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import TrackListItem from './track-list-item'
import { TrackListProps } from './types'
import ItemDivider from '../common/item-divider'
import TrackPlayer, { Track } from 'react-native-track-player'
import { saveTrack } from '@/lib/async-storage/save-track'

export default function TrackList({ tracks_data, ...flatlistProps }: TrackListProps) {
	const handleTrackSelect = async (track: Track) => {
		await TrackPlayer.load(track)
		await saveTrack(track)
		await TrackPlayer.play()
	}
	return (
		<View style={styles.container}>
			<FlatList
				ItemSeparatorComponent={ItemDivider}
				/* I use 15 insteand 10 just to show the scroll */
				data={tracks_data}
				keyExtractor={(item) => item.mbid || item.name}
				renderItem={({ item: track }) => (
					<TrackListItem track={track} onTrackSelect={handleTrackSelect} />
				)}
				{...flatlistProps}
			/>
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
