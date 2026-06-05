import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Button({ text, texto, onPress, color = '#3498db', width = 220 }) {
    const label = text ?? texto ?? '';
    return (
        <TouchableOpacity
            style={[styles.boton, { backgroundColor: color, width }]}
            onPress={onPress}
        >
            <Text style={styles.botonTexto}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  boton: {
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
  },
  botonTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
