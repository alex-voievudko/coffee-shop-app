import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { Sora_400Regular, Sora_600SemiBold } from '@expo-google-fonts/sora';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	const [loaded, error] = useFonts({
		Sora_400Regular,
		Sora_600SemiBold,
	});

	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
};

const RootLayoutNav = () => {
	return (
		<SafeAreaProvider>
			<Stack>
				<Stack.Screen name='index' options={{ headerShown: false }} />
				<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
			</Stack>
		</SafeAreaProvider>
	);
};

export default RootLayout;
