type Streamable = {
	'#text': string
	fulltrack: string
}

type Image = {
	'#text': string
	size: 'small' | 'medium' | 'large' | 'extralarge'
}

type Artist = {
	name: string
	mbid: string
	url: string
}

export type TrackType = {
	name: string
	duration: string
	listeners: string
	mbid: string
	url: string
	streamable: Streamable
	artist: Artist
	image: Image[]
	'@attr': {
		rank: string
	}
}
