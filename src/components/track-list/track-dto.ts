import { Track } from './types'

export type TrackDTO = {
	title: string
	artist: string
	url: string
}

export function convertToTrackDTO(track: any): TrackDTO {
	return {
		title: track.name,
		artist: track.artist.name,
		url: track.name,
	}
}
