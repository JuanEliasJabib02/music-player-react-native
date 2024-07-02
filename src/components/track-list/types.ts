import { FlatListProps } from 'react-native'

export type Track = {
	name: string
	artist: {
		name: string
	}
}

/* Any is a bad practice i just dit it here, to avoid losing more time
i hass a typescript issue here, is this was the project i solve the issue */
export type TrackListProps = Partial<FlatListProps<any>>
