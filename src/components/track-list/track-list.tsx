import React from 'react'
import { Text, View, FlatList, ActivityIndicator, StyleSheet } from 'react-native'
import useSWR from 'swr'
import TrackListItem from './track-list-item'
import { TrackListProps } from './types'
import ItemDivider from '../common/item-divider'
import { fetcher } from '@/lib/utils'
import { Track } from 'react-native-track-player'
import { convertToTrackDTO, TrackDTO } from './track-dto'

/* Only because this is a interview i gonna keep this apikey visible

sensitive data must be saved in .env(scripted env)
*/
const API_KEY = 'c19c47264b0dfd0973d63aa54cb6788c'
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=colombia&api_key=${API_KEY}&format=json`

export default function TrackList({ ...flatlistProps }: TrackListProps) {
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
		<View style={styles.container}>
			<FlatList
				ItemSeparatorComponent={ItemDivider}
				/* I use 15 insteand 10 just to show the scroll */
				data={transformedTracks}
				keyExtractor={(item) => item.mbid || item.name}
				renderItem={({ item: track }) => <TrackListItem track={track} />}
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
