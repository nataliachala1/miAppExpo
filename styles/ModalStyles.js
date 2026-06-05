import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  fondo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 30,
    width: '80%',
    alignItems: 'center',
    gap: 16,
  },
  modalTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  modalMensaje: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
  },
  botonAbrir: {
    backgroundColor: '#9b59b6',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  botonCerrar: {
    backgroundColor: '#e74c3c',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  botonTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});