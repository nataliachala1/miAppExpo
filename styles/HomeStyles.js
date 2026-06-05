import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  subtitulo: {
    fontSize: 15,
    color: '#777',
    marginBottom: 16,
  },
  boton: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 260,
    alignItems: 'center',
  },
  botonTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});