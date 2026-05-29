import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CalculadoraScreen() {
  const [pantalla, setPantalla] = useState('0');
  const [primerNumero, setPrimerNumero] = useState('');
  const [operacion, setOperacion] = useState('');
  const [nuevaEntrada, setNuevaEntrada] = useState(false);

  const presionarNumero = (num) => {
    if (nuevaEntrada) {
      setPantalla(String(num));
      setNuevaEntrada(false);
    } else {
      setPantalla(pantalla === '0' ? String(num) : pantalla + num);
    }
  };

  const presionarOperacion = (op) => {
    setPrimerNumero(pantalla);
    setOperacion(op);
    setNuevaEntrada(true);
  };

  const calcular = () => {
    if (!primerNumero || !operacion) return;
    const a = parseFloat(primerNumero);
    const b = parseFloat(pantalla);
    let resultado;
    switch (operacion) {
      case '+': resultado = a + b; break;
      case '-': resultado = a - b; break;
      case '×': resultado = a * b; break;
      case '÷': resultado = b !== 0 ? a / b : 'Error'; break;
    }
    setPantalla(String(resultado));
    setPrimerNumero('');
    setOperacion('');
    setNuevaEntrada(true);
  };

  const limpiar = () => {
    setPantalla('0');
    setPrimerNumero('');
    setOperacion('');
    setNuevaEntrada(false);
  };

  const Boton = ({ texto, onPress, tipo }) => (
    <TouchableOpacity
      style={[
        styles.boton,
        tipo === 'operacion' && styles.botonOperacion,
        tipo === 'igual' && styles.botonIgual,
        tipo === 'limpiar' && styles.botonLimpiar,
      ]}
      onPress={onPress}
    >
      <Text style={styles.botonTexto}>{texto}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Parte 4 - Calculadora</Text>

      <View style={styles.pantalla}>
        <Text style={styles.pantallaOperacion}>
          {primerNumero} {operacion}
        </Text>
        <Text style={styles.pantallaNumero} numberOfLines={1} adjustsFontSizeToFit>
          {pantalla}
        </Text>
      </View>

      <View style={styles.teclado}>
        <View style={styles.fila}>
          <Boton texto="C" onPress={limpiar} tipo="limpiar" />
          <Boton texto="÷" onPress={() => presionarOperacion('÷')} tipo="operacion" />
          <Boton texto="×" onPress={() => presionarOperacion('×')} tipo="operacion" />
          <Boton texto="-" onPress={() => presionarOperacion('-')} tipo="operacion" />
        </View>
        <View style={styles.fila}>
          <Boton texto="7" onPress={() => presionarNumero('7')} />
          <Boton texto="8" onPress={() => presionarNumero('8')} />
          <Boton texto="9" onPress={() => presionarNumero('9')} />
          <Boton texto="+" onPress={() => presionarOperacion('+')} tipo="operacion" />
        </View>
        <View style={styles.fila}>
          <Boton texto="4" onPress={() => presionarNumero('4')} />
          <Boton texto="5" onPress={() => presionarNumero('5')} />
          <Boton texto="6" onPress={() => presionarNumero('6')} />
        </View>
        <View style={styles.fila}>
          <Boton texto="1" onPress={() => presionarNumero('1')} />
          <Boton texto="2" onPress={() => presionarNumero('2')} />
          <Boton texto="3" onPress={() => presionarNumero('3')} />
        </View>
        <View style={styles.fila}>
          <Boton texto="0" onPress={() => presionarNumero('0')} />
          <Boton texto="." onPress={() => presionarNumero('.')} />
          <Boton texto="=" onPress={calcular} tipo="igual" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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