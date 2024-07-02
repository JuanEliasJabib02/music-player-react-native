import { assets } from '@/constants/assets'
import { defaultStyles } from '@/styles'
import { useRouter } from 'expo-router'
import { Image, StyleSheet, Text, TouchableOpacity, View, ViewProps } from 'react-native'
import { useActiveTrack } from 'react-native-track-player'
import { PlayPauseButton } from './play-pause-button'
import { useLastActiveTrack } from '@/hooks/use-last-active-track'
/* import { MovingText } from './MovingText'
 */
export default function FloatingPlayer({ style }: ViewProps) {
	const activeTrack = useActiveTrack()

	const lastActiveTrack = useLastActiveTrack()

	const displayedTrack = activeTrack ?? lastActiveTrack
	return (
		<TouchableOpacity activeOpacity={0.9} style={[styles.container, style]}>
			<>
				<Image style={styles.trackArtworkImage} source={{ uri: assets.unknown_image_track_uri }} />
				<View style={styles.trackTitleContainer}>
					<Text style={styles.trackTitle}>{displayedTrack ? displayedTrack?.title : ''}</Text>
				</View>
				<View style={styles.trackControlsContainer}>
					<PlayPauseButton />
				</View>
			</>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#252525',
		padding: 8,
		borderRadius: 12,
		paddingVertical: 10,
	},
	trackArtworkImage: {
		width: 40,
		height: 40,
		borderRadius: 8,
	},
	trackTitleContainer: {
		flex: 1,
		overflow: 'hidden',
		marginLeft: 10,
	},
	trackTitle: {
		...defaultStyles.text,
		fontSize: 18,
		fontWeight: '600',
		paddingLeft: 10,
	},
	trackControlsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 20,
		marginRight: 16,
		paddingLeft: 16,
	},
})
