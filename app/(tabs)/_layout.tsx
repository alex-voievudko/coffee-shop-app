import { Tabs } from 'expo-router';

const TabLayout = () => {
	return (
		<Tabs>
			<Tabs.Screen name='index' />
			<Tabs.Screen name='favorite' />
			<Tabs.Screen name='cart' />
			<Tabs.Screen name='notifications' />
		</Tabs>
	);
};

export default TabLayout;
