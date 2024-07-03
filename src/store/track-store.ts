import { create } from 'zustand'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TrackDTO } from '@/components/track-list/track-dto'

type RecentTracksStore = {
	recentTracks: TrackDTO[]
	fetchRecentTracks: () => Promise<void>
	clearRecentTracks: () => Promise<void>
}

export const useRecentTracksStore = create<RecentTracksStore>((set) => ({
	recentTracks: [],
	fetchRecentTracks: async () => {
		try {
			const jsonValue = await AsyncStorage.getItem('recentTracks')
			const tracks = jsonValue != null ? JSON.parse(jsonValue) : []
			set({ recentTracks: tracks })
		} catch (e) {
			console.error('Error fetching recent tracks', e)
		}
	},
	clearRecentTracks: async () => {
		try {
			await AsyncStorage.removeItem('recentTracks')
			set({ recentTracks: [] })
		} catch (e) {
			console.error('Error clearing recent tracks', e)
		}
	},
}))
