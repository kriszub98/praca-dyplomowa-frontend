import { StyleSheet, View } from 'react-native';
import React from 'react';

import TitleText from '../TitleText';
import DefaultText from '../DefaultText';
import Colors from '../../constans/Colors';

const AllergyContainer = ({ allergies }) => {
	return (
		<View style={styles.container}>
			<TitleText style={styles.sectionTitle}>Alergeny:</TitleText>
			<View style={styles.allergyWrapper}>
				{allergies.map((a) => (
					<View style={styles.allergyItem} key={a._id}>
						<DefaultText>{a.shortName}</DefaultText>
					</View>
				))}
			</View>
		</View>
	);
};

export default AllergyContainer;

const styles = StyleSheet.create({
	container: {
		paddingLeft: 12
	},
	sectionTitle: {
		color: Colors.secondaryText
	},
	allergyWrapper: {
		flexDirection: 'row',
		marginBottom: 6
	},
	allergyItem: {
		paddingVertical: 6,
		paddingRight: 8
	}
});
