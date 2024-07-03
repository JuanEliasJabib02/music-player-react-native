import unknown_track from '@/assets/unknown_track.png'

import { Image } from 'react-native'

const unknown_image_track_uri = Image.resolveAssetSource(unknown_track).uri

export const assets = {
	unknown_image_track_uri,
}
