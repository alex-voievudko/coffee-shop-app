import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '~/theme';
import backgroundImage from '~/assets/images/cover.jpg';

const GetStarted = () => {
	const { top, bottom } = useSafeAreaInsets();
	return (
		<>
			<StatusBar style='light' />
			<View style={styles.container}>
				<Image source={backgroundImage} style={styles.image} contentFit='fill' />
				<View
					style={[
						styles.content,
						{
							paddingTop: top,
							paddingBottom: bottom,
						},
					]}
				>
					<Text style={styles.title}>Coffee so good, your taste buds will love it.</Text>
					<Text style={styles.subtitle}>The best grain, the finest roast, the powerful flavor.</Text>
					<Link href='/(tabs)' asChild replace>
						<TouchableHighlight style={styles.button} underlayColor={theme.colors.primaryDark} activeOpacity={1}>
							<Text style={styles.buttonLabel}>Get Started</Text>
						</TouchableHighlight>
					</Link>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		flex: 1,
		width: '100%',
		height: '100%',
	},
	content: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: 1,
		paddingHorizontal: 30,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	title: {
		marginBottom: 8,
		color: theme.colors.white,
		fontFamily: theme.fonts.semibold,
		fontSize: 34,
		lineHeight: 41,
		textAlign: 'center',
	},
	subtitle: {
		maxWidth: 300,
		color: '#A9A9A9',
		fontFamily: theme.fonts.regular,
		fontSize: 14,
		lineHeight: 21,
		textAlign: 'center',
	},
	button: {
		width: '100%',
		height: 62,
		marginTop: 24,
		marginBottom: 10,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 16,
		backgroundColor: theme.colors.primary,
	},
	buttonLabel: {
		color: theme.colors.white,
		fontFamily: theme.fonts.semibold,
		fontSize: 16,
	},
});

export default GetStarted;
