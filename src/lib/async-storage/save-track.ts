import { TrackDTO } from '@/components/track-list/track-dto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Track } from 'react-native-track-player'

export const saveTrack = async (track: Track) => {
	if (!track || !track.mbid || !track.name) {
		console.error('Invalid track object', track)
		return
	}

	try {
		const jsonValue = await AsyncStorage.getItem('recentTracks')
		const recentTracks = jsonValue != null ? JSON.parse(jsonValue) : []

		console.log('async', recentTracks.length)
		const filteredTracks = recentTracks.filter(
			(t: TrackDTO) => t.mbid !== track.mbid && t.title !== track.title,
		)

		const updatedTracks = [track, ...filteredTracks].slice(0, 10)

		await AsyncStorage.setItem('recentTracks', JSON.stringify(updatedTracks))
	} catch (e) {
		console.error('Error saving track', e)
	}
}
