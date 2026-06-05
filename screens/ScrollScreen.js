import { useState, useEffect } from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import styles from '../styles/ScrollStyles';

export default function ScrollScreen() {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const items = Array.from({ length: 20 }, (_, i) => ({
        id: String(i + 1),
        titulo: `Elemento ${i + 1}`,
        descripcion: `Esta es la descripción del elemento número ${i + 1}`,
      }));
      setDatos(items);
      setCargando(false);
    }, 2000);
  }, []);

  if (cargando) {
    return (
      <View style={styles.cargando}>
        <ActivityIndicator size="large" color="#e74c3c" />
        <Text style={styles.cargandoTexto}>Cargando datos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Parte 5 - Scroll Loading</Text>
      <FlatList
        data={datos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitulo}>{item.titulo}</Text>
            <Text style={styles.itemDescripcion}>{item.descripcion}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}