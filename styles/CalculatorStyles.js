import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  pantalla: {
    width: '100%',
    backgroundColor: '#2c2c2e',
    borderRadius: 16,
    padding: 20,
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  pantallaOperacion: {
    fontSize: 16,
    color: '#888',
    marginBottom: 4,
  },
  pantallaNumero: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
  },
  teclado: {
    width: '100%',
    gap: 10,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  boton: {
    backgroundColor: '#3a3a3c',
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonTexto: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  botonOperacion: {
    backgroundColor: '#ff9f0a',
  },
  botonIgual: {
    backgroundColor: '#30d158',
  },
  botonLimpiar: {
    backgroundColor: '#ff453a',
  },
});