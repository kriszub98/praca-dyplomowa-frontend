import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import CustomColors from './src/constans/Colors';
import authReducer from './src/store/reducers/auth';
import Navigation from './src/navigation/Navigation';

const rootReducer = combineReducers({
	auth: authReducer
});

const store = createStore(rootReducer);

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Provider store={store}>
				<Navigation />
			</Provider>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: CustomColors.rootBackgroundColor
	}
});
