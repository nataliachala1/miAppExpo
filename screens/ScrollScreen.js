import { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from '../styles/ScrollStyles';
import ListItem from '../components/ListItem';
import LoadingView from '../components/LoadingView';

export default function ScrollScreen() {
  const [datos, setDatos] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [cargando, setCargando] = useState(false);

  const cargarMas = () => {
    if (cargando) return;

    setCargando(true);

    setTimeout(() => {
      const nuevosItems = Array.from({ length: 10 }, (_, i) => {
        const numero = (pagina - 1) * 10 + i + 1;

        return {
          id: String(numero),
          titulo: `Elemento ${numero}`,
          descripcion: `Esta es la descripción del elemento número ${numero}`,
        };
      });

      setDatos((prev) => [...prev, ...nuevosItems]);
      setPagina((prev) => prev + 1);
      setCargando(false);
    }, 1000);
  };

  useEffect(() => {
    cargarMas();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Parte 5 - Scroll Loading</Text>

      <FlatList
        data={datos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem titulo={item.titulo} descripcion={item.descripcion} />}
        onEndReached={cargarMas}
        onEndReachedThreshold={0.5}
        ListFooterComponent={cargando ? <LoadingView /> : null}
      />
    </View>
  );
}