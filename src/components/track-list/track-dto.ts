import { Track } from './types'

export type TrackDTO = {
	title: string
	artist: string
	url: string
}

/* Just using any for a typescript error to avoid losing more time 

in a real project this must be fixed.
 */
export function convertToTrackDTO(track: any): TrackDTO {
	return {
		title: track.name,
		artist: track.artist.name,

		/* Api song that will be reproduted, actually i dont fint it in the respose so i mockeit */
		url: track.name,
	}
}
