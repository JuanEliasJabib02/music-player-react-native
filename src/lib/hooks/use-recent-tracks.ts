import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TrackDTO } from '@/components/track-list/track-dto'

export const useRecentTracks = () => {
	const [recentTracks, setRecentTracks] = useState<TrackDTO[]>([])

	const fetchRecentTracks = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem('recentTracks')
			const tracks = jsonValue != null ? JSON.parse(jsonValue) : []
			setRecentTracks(tracks)
		} catch (e) {
			console.error('Error fetching recent tracks', e)
		}
	}

	useEffect(() => {
		fetchRecentTracks()
	}, [])

	const updateRecentTracks = async () => {
		try {
			await fetchRecentTracks()
		} catch (e) {
			console.error('Error updating recent tracks', e)
		}
	}

	useEffect(() => {
		fetchRecentTracks()
	}, [])

	const clearRecentTracks = async () => {
		try {
			await AsyncStorage.removeItem('recentTracks')
			setRecentTracks([])
		} catch (e) {
			console.error('Error clearing recent tracks', e)
		}
	}

	return { recentTracks, updateRecentTracks, clearRecentTracks }
}
