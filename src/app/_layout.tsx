import 'expo-dev-client'

import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SplashScreen } from 'expo-router'
import { useCallback } from 'react'
import { useSetupTrackPlayer } from '@/lib/hooks/use-setup-track-player'
import { useLogTrackPlayerState } from '@/lib/hooks/use-log-track-player-state'

SplashScreen.preventAutoHideAsync()
export default function App() {
	const handleTrackPlayerLoaded = useCallback(() => {
		SplashScreen.hideAsync()
	}, [])
	useSetupTrackPlayer({
		onLoad: () => handleTrackPlayerLoaded(),
	})
	useLogTrackPlayerState()
	return (
		<SafeAreaProvider>
			<RootNavigation />
			<StatusBar style="auto" />
		</SafeAreaProvider>
	)
}

function RootNavigation() {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen
				name="player"
				options={{
					presentation: 'card',
					gestureEnabled: true,
					gestureDirection: 'vertical',
					animationDuration: 400,
					headerShown: false,
				}}
			/>
		</Stack>
	)
}
