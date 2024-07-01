import React from 'react'
import { Text, View, FlatList, ActivityIndicator, StyleSheet } from 'react-native'
import useSWR from 'swr'

/* Only because this is a interview i gonna keep this apikey visible

sensitive data must be saved in .env(scripted env)
*/
const API_KEY = 'c19c47264b0dfd0973d63aa54cb6788c'
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=colombia&api_key=${API_KEY}&format=json`

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function TrackList() {
	const { data, error } = useSWR(URL, fetcher)

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
				data={data.tracks.track}
				keyExtractor={(item) => item.mbid || item.name}
				renderItem={({ item }) => (
					<View style={styles.trackItem}>
						<Text style={styles.trackName}>{item.name}</Text>
						<Text style={styles.trackArtist}>{item.artist.name}</Text>
					</View>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
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
