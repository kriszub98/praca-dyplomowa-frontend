import { StyleSheet, View, Pressable } from 'react-native';
import React, { useState } from 'react';

import DefaultText from '../DefaultText';
import useInput from '../../hooks/useInput';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';

const PreparationCard = ({ step, index, removePreparation, editPreparation }) => {
	const [ stepText, bindStepText, resetStepText ] = useInput(step);
	const [ isExpanded, setIsExpanded ] = useState(false);
	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	// PreparationCard Expanded
	if (isExpanded) {
		const onSavePress = () => {
			editPreparation(index, stepText);
			toggleExpand();
			resetStepText();
		};

		const onRemovePress = () => {
			removePreparation(index);
			toggleExpand();
			resetStepText();
		};

		return (
			<View style={styles.container}>
				<CustomInput {...bindStepText} multiline autoFocus />
				<View style={styles.buttonContainer}>
					<View>
						<CustomButton type="PRIMARY" text="Zapisz zmiany" onPress={onSavePress} />
					</View>
					<View>
						<CustomButton type="TERTIARY" fgColor={'red'} text="Usuń krok" onPress={onRemovePress} />
					</View>
				</View>
			</View>
		);
	}

	// PreparationCard not Expanded
	return (
		<Pressable style={styles.container} onPress={toggleExpand}>
			<DefaultText style={styles.text}>{step}</DefaultText>
		</Pressable>
	);
};

export default PreparationCard;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		marginVertical: 8,
		paddingHorizontal: 18,
		paddingVertical: 10,

		borderRadius: 6,
		elevation: 3,
		backgroundColor: '#fff',
		shadowOffset: {
			width: 1,
			height: 1
		},
		shadowColor: '#333',
		shadowOpacity: 0.3,
		shadowRadius: 2
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});
