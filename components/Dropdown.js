import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/DropdownStyles';

export default function Dropdown({ selectedValue, onValueChange, options = [] }) {
  return (
    <View style={styles.pickerContainer}>
      <Picker selectedValue={selectedValue} onValueChange={onValueChange} style={styles.picker}>
        {options.map((opt) => (
          <Picker.Item key={opt.value} label={opt.label} value={opt.value} />
        ))}
      </Picker>
    </View>
  );
}
