import { FlatListProps } from 'react-native'
import { Track as TrackPlayer } from 'react-native-track-player'
import { TrackDTO } from './track-dto'

export type Track = {
	name: string
	artist: {
		name: string
	}
}

/* Any is a bad practice i just dit it here, to avoid losing more time
i hass a typescript issue here, is this was the project i solve the issue */
export type TrackListProps = Partial<FlatListProps<any>> & {
	tracks_data: TrackDTO[]
}
