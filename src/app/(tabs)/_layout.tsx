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
				tabBarBackground: () => (
					<BlurView
						intensity={95}
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
