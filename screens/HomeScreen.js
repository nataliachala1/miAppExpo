import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/HomeStyles';

//Aquí se define la pantalla principal de la aplicación, muestra cada bóton con su respectivo color y nombre. Al presionar cada botón, se navega a la pantalla correspondiente utilizando la función navigation.navigate() con el nombre de la ruta definida en el navegador de stack.
export default function HomeScreen({ navigation }) {
  const secciones = [
    { nombre: 'Parte 1 - Botones', ruta: 'Botones', color: '#3498db' },
    { nombre: 'Parte 2 - Modal', ruta: 'Modal', color: '#9b59b6' },
    { nombre: 'Parte 3 - Dropdown', ruta: 'Dropdown', color: '#e67e22' },
    { nombre: 'Parte 4 - Calculadora', ruta: 'Calculadora', color: '#2ecc71' },
    { nombre: 'Parte 5 - Scroll', ruta: 'Scroll', color: '#e74c3c' },
  ];

  //Aqui el map recorre el array y por cada elemento crea un botón automaticamente
  //Key es un identificador unico para cada elemento del array.
  //backgroundColor: s color, toma el color definido en el array.
  //El array navigation.navigate(s.ruta) lleva al usuario a la pantalla correspondiente. 
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Taller Móvil</Text>
      <Text style={styles.subtitulo}>Selecciona una sección</Text>
      {secciones.map((s) => (
        <TouchableOpacity
          key={s.ruta}
          style={[styles.boton, { backgroundColor: s.color }]}
          onPress={() => navigation.navigate(s.ruta)}
        >
          <Text style={styles.botonTexto}>{s.nombre}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}