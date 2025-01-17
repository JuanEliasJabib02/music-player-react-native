import { colors, fontSize } from '@/constants/tokens'
import { BlurView } from 'expo-blur'
import { Tabs } from 'expo-router'
import { StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import FloatingPlayer from '@/components/floating-player/floating-player'
import { useActiveTrack } from 'react-native-track-player'

export default function TabsNavigation() {
	const activeTrack = useActiveTrack()
	return (
		<>
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: colors.primary,
					tabBarLabelStyle: {
						fontSize: fontSize.xs,
						fontWeight: '500',
					},
					headerShown: false,
					tabBarStyle: {
						position: 'absolute',
						borderTopLeftRadius: 20,
						borderTopRightRadius: 20,
						borderTopWidth: 0,
						paddingTop: 8,
					},
					tabBarBackground: () => (
						<BlurView
							intensity={30}
							style={{
								...StyleSheet.absoluteFillObject,
								overflow: 'hidden',
								borderTopLeftRadius: 20,
								borderTopRightRadius: 20,
							}}
						/>
					),
				}}
			>
				<Tabs.Screen
					name="(songs)"
					options={{
						title: 'Songs',
						tabBarIcon: () => <FontAwesome name="music" size={20} color={colors.text} />,
					}}
				/>
				<Tabs.Screen
					name="profile"
					options={{
						title: 'Mi perfil',
						tabBarIcon: () => <FontAwesome name="user" size={20} color={colors.text} />,
					}}
				/>
			</Tabs>
			{activeTrack && (
				<FloatingPlayer style={{ position: 'absolute', left: 6, right: 8, bottom: 60 }} />
			)}
		</>
	)
}
