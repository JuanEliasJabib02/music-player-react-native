import { colors, fontSize } from '@/constants/tokens'
import { BlurView } from 'expo-blur'
import { Tabs } from 'expo-router'
import { StyleSheet } from 'react-native'

export default function TabsNavigation() {
	return (
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
					borderTopLeftRadius: 100,
					borderTopRightRadius: 100,
					borderTopWidth: 0,
					paddingTop: 8,
				},
				tabBarBackground: () => (
					<BlurView
						intensity={92}
						style={{
							...StyleSheet.absoluteFillObject,
							overflow: 'hidden',
						}}
					/>
				),
			}}
		>
			<Tabs.Screen name="(songs)" />
			<Tabs.Screen name="profile" />
		</Tabs>
	)
}
