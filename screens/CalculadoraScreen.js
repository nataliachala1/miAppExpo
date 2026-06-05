import { useState } from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/CalculatorStyles';
import { TouchableOpacity } from 'react-native';
import CalcButton from '../components/CalcButton';

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

  // Use reusable CalcButton component

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
            <CalcButton texto="C" onPress={limpiar} tipo="limpiar" />
            <CalcButton texto="÷" onPress={() => presionarOperacion('÷')} tipo="operacion" />
            <CalcButton texto="×" onPress={() => presionarOperacion('×')} tipo="operacion" />
            <CalcButton texto="-" onPress={() => presionarOperacion('-')} tipo="operacion" />
          </View>
        <View style={styles.fila}>
          <CalcButton texto="7" onPress={() => presionarNumero('7')} />
          <CalcButton texto="8" onPress={() => presionarNumero('8')} />
          <CalcButton texto="9" onPress={() => presionarNumero('9')} />
          <CalcButton texto="+" onPress={() => presionarOperacion('+')} tipo="operacion" />
        </View>
        <View style={styles.fila}>
          <CalcButton texto="4" onPress={() => presionarNumero('4')} />
          <CalcButton texto="5" onPress={() => presionarNumero('5')} />
          <CalcButton texto="6" onPress={() => presionarNumero('6')} />
        </View>
        <View style={styles.fila}>
          <CalcButton texto="1" onPress={() => presionarNumero('1')} />
          <CalcButton texto="2" onPress={() => presionarNumero('2')} />
          <CalcButton texto="3" onPress={() => presionarNumero('3')} />
        </View>
        <View style={styles.fila}>
          <CalcButton texto="0" onPress={() => presionarNumero('0')} />
          <CalcButton texto="." onPress={() => presionarNumero('.')} />
          <CalcButton texto="=" onPress={calcular} tipo="igual" />
        </View>
      </View>
    </View>
  );
}