import { Tabs } from 'expo-router'

export default function TabsNavigation() {
	return (
		<Tabs>
			<Tabs.Screen name="home" />
			<Tabs.Screen name="profile" />
		</Tabs>
	)
}
