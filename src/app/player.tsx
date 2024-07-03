import { assets } from '@/constants/assets'
import { colors, fontSize, screenPadding } from '@/constants/tokens'

import { defaultStyles, utilsStyles } from '@/styles'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useActiveTrack } from 'react-native-track-player'

export default function PlayerScreen() {
	const activeTrack = useActiveTrack()

	const { top, bottom } = useSafeAreaInsets()
	if (!activeTrack) {
		return (
			<View style={[defaultStyles.container, { justifyContent: 'center' }]}>
				<ActivityIndicator color={colors.icon} />
			</View>
		)
	}

	return (
		<View style={styles.overlayContainer}>
			<View style={{ flex: 1, marginTop: top + 70, marginBottom: bottom + 70 }}>
				<View style={styles.artworkImageContainer}>
					<Image
						source={{ uri: assets.unknown_image_track_uri }}
						style={styles.artworkImage}
						resizeMode="cover"
					/>
				</View>
				<View style={{ flex: 1 }}>
					<View style={{ marginTop: 'auto' }}>
						<View style={{ height: 60 }}>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									alignItems: 'center',
								}}
							>
								<View style={styles.trackTitleContainer}>
									<Text style={styles.trackTitleText}>{activeTrack?.title}</Text>
									{activeTrack.artist && (
										<Text numberOfLines={1} style={[styles.trackArtistText]}>
											{activeTrack.artist}
										</Text>
									)}
								</View>
							</View>
						</View>
					</View>
				</View>
				<View>
					<Text style={{ color: 'red' }}>
						Podria implementar mas features y mejorar esta vista pero por tiempo pasare a resolver
						directamente el ultimo punto ya que aqui queda listo este requerimento de navegacion.
					</Text>
				</View>
			</View>
		</View>
	)
}

const DismissPlayerSymbol = () => {
	const { top } = useSafeAreaInsets()

	return (
		<View
			style={{
				position: 'absolute',
				top: top + 8,
				left: 0,
				right: 0,
				flexDirection: 'row',
				justifyContent: 'center',
			}}
		>
			<View
				accessible={false}
				style={{
					width: 50,
					height: 8,
					borderRadius: 8,
					backgroundColor: '#fff',
					opacity: 0.7,
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	overlayContainer: {
		...defaultStyles.container,
		paddingHorizontal: screenPadding.horizontal,
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
	artworkImageContainer: {
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.44,
		shadowRadius: 11.0,
		flexDirection: 'row',
		justifyContent: 'center',
		height: '45%',
	},
	artworkImage: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		borderRadius: 12,
	},
	trackTitleContainer: {
		flex: 1,
		overflow: 'hidden',
	},
	trackTitleText: {
		...defaultStyles.text,
		fontSize: 22,
		fontWeight: '700',
	},
	trackArtistText: {
		...defaultStyles.text,
		fontSize: fontSize.base,
		opacity: 0.8,
		maxWidth: '90%',
	},
})
