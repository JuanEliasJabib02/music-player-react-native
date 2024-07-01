import unknown_artist from '@/assets/unknown_artist.png'
import unknown_track from '@/assets/unknown_track.png'

import { Image } from 'react-native'

const unknown_image_track_uri = Image.resolveAssetSource(unknown_track).uri
const unknown_image_artist_uri = Image.resolveAssetSource(unknown_artist).uri

export const assets = {
	unknown_image_track_uri,
	unknown_image_artist_uri,
}
