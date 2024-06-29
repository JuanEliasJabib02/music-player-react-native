import { colors, fontSize } from '@/constants/tokens'
import { BlurView } from 'expo-blur'
import { Tabs } from 'expo-router'
import { StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

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
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
					borderTopWidth: 0,
					paddingTop: 8,
				},
				tabBarBackground: () => (
					<BlurView
						intensity={20}
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
	)
}
