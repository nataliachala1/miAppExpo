import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
  },
  picker: {
    width: '100%',
  },
  resultado: {
    marginTop: 24,
    fontSize: 16,
    color: '#555',
  },
  resaltado: {
    fontWeight: 'bold',
    color: '#e67e22',
  },
});