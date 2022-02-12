import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import CustomColors from './src/constans/Colors';

import Navigation from './src/navigation/Navigation';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Navigation />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: CustomColors.rootBackgroundColor
	}
});
