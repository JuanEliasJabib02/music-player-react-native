import React from 'react'
import { Text, View, FlatList, ActivityIndicator, StyleSheet, FlatListProps } from 'react-native'
import useSWR from 'swr'
import TrackListItem from './track-list-item'
import { Track, TrackListProps } from './types'

/* Only because this is a interview i gonna keep this apikey visible

sensitive data must be saved in .env(scripted env)
*/
const API_KEY = 'c19c47264b0dfd0973d63aa54cb6788c'
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=colombia&api_key=${API_KEY}&format=json`

const fetcher = (url: string) => fetch(url).then((res) => res.json())

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

	return (
		<View style={styles.container}>
			<FlatList
				/* I use 15 insteand 10 just to show the scroll */
				data={data.tracks.track.slice(0, 15)}
				keyExtractor={(item) => item.mbid || item.name}
				renderItem={({ item: track }) => <TrackListItem track={track as Track} />}
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
