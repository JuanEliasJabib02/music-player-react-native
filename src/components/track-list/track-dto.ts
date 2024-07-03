import { Track } from './types'

export type TrackDTO = {
	title: string
	artist: string
	url: string
	mbid: string
	name: string
}

/* Just using any for a typescript error to avoid losing more time 

in a real project this must be fixed.
 */
export function convertToTrackDTO(track: any): TrackDTO {
	return {
		title: track.name,
		artist: track.artist.name,
		/* Mock some propertis just to avoid errors and focus in the requeriment */
		mbid: track.name,
		name: track.name,
		/* Api song that will be reproduted, actually i dont fint it in the respose so i mockeit */
		url: track.name,
	}
}
