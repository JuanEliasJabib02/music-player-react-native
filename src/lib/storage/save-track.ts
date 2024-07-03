import { TrackDTO } from '@/components/track-list/track-dto'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const saveTrack = async (track: TrackDTO) => {
	try {
		console.log(saveTrack, 'save-track')
		/* 	const jsonValue = await AsyncStorage.getItem('recentTracks')
		const recentTracks = jsonValue != null ? JSON.parse(jsonValue) : []

		// Remove track if already exists to avoid duplicates
		const filteredTracks = recentTracks.filter(
			(t: TrackDTO) => t.mbid !== track.mbid && t.name !== track.name,
		)
		const updatedTracks = [track, ...filteredTracks].slice(0, 10) // keep only the last 10 tracks */

		/* 		await AsyncStorage.setItem('recentTracks', JSON.stringify(updatedTracks))
		 */
	} catch (e) {
		console.error('Error saving track', e)
	}
}
