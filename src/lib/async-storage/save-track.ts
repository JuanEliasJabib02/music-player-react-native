import { TrackDTO } from '@/components/track-list/track-dto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Track } from 'react-native-track-player'

export const saveTrack = async (track: Track) => {
	try {
		const jsonValue = await AsyncStorage.getItem('recentTracks')
		const recentTracks = jsonValue != null ? JSON.parse(jsonValue) : []

		console.log('async', recentTracks)

		const filteredTracks = recentTracks.filter(
			(t: TrackDTO) => t.mbid !== track.mbid && t.name !== track.name,
		)

		const updatedTracks = [track, ...filteredTracks].slice(0, 10)

		await AsyncStorage.setItem('recentTracks', JSON.stringify(updatedTracks))
	} catch (e) {
		console.error('Error saving track', e)
	}
}
