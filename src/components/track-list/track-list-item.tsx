import { assets } from '@/constants/assets'
import { colors, fontSize } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { Track, useActiveTrack } from 'react-native-track-player'

type TracksListItemProps = {
	track: Track
	onTrackSelect: (track: Track) => void
}

export default function TrackListItem({ track, onTrackSelect }: TracksListItemProps) {
	const activeTrack = useActiveTrack()

	const isActiveTrack = activeTrack?.title === track.title

	return (
		<TouchableHighlight onPress={() => onTrackSelect(track)}>
			<View style={styles.trackItemContainer}>
				<View>
					<Image
						source={{
							uri: assets.unknown_image_track_uri,
						}}
						style={{
							...styles.trackArtworkImage,
							opacity: isActiveTrack ? 0.6 : 1,
						}}
					/>
				</View>

				<View style={{ width: '100%' }}>
					<Text
						numberOfLines={1}
						style={{
							...styles.trackTitleText,
							color: isActiveTrack ? colors.primary : colors.text,
						}}
					>
						{track.title}
					</Text>
					{true && (
						<Text
							numberOfLines={1}
							style={{
								...styles.trackArtistText,
							}}
						>
							{track.artist}
						</Text>
					)}
				</View>
			</View>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	trackItemContainer: {
		flexDirection: 'row',
		columnGap: 14,
		alignItems: 'center',
		paddingRight: 20,
		marginVertical: 8,
	},
	trackPlayingIconIndicator: {
		position: 'absolute',
		top: 18,
		left: 16,
		width: 16,
		height: 16,
	},
	trackPausedIndicator: {
		position: 'absolute',
		top: 14,
		left: 14,
	},
	trackArtworkImage: {
		borderRadius: 8,
		width: 50,
		height: 50,
	},
	trackTitleText: {
		...defaultStyles.text,
		fontSize: fontSize.sm,
		fontWeight: '600',
		maxWidth: '90%',
	},
	trackArtistText: {
		...defaultStyles.text,
		color: colors.textMuted,
		fontSize: 14,
		marginTop: 4,
	},
})
