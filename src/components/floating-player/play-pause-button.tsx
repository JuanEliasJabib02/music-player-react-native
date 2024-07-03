import { Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import TrackPlayer, { useIsPlaying } from 'react-native-track-player'
import { FontAwesome } from '@expo/vector-icons'
import { colors } from '@/constants/tokens'
type PlayerControlsProps = {
	style?: ViewStyle
}

type PlayerButtonProps = {
	iconSize?: number
	style?: ViewStyle
}

export const PlayPauseButton = ({ style, iconSize }: PlayerButtonProps) => {
	const { playing } = useIsPlaying()
	return (
		<View style={[{ height: iconSize }, style, { padding: 20 }]}>
			<TouchableOpacity onPress={playing ? TrackPlayer.pause : TrackPlayer.play}>
				<FontAwesome name={playing ? 'pause' : 'play'} size={iconSize} color={colors.text} />
			</TouchableOpacity>
		</View>
	)
}
