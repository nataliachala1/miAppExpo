import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

//Aqui se importan las pantallas que se mostrarán en la aplicación. 
import HomeScreen from './screens/HomeScreen';
import BotonesScreen from './screens/BotonesScreen';
import ModalScreen from './screens/ModalScreen';
import DropdownScreen from './screens/DropdownScreen';
import CalculadoraScreen from './screens/CalculadoraScreen';
import ScrollScreen from './screens/ScrollScreen';
import PerfilScreen from './screens/PerfilScreen';
import ConfiguracionScreen from './screens/ConfiguracionScreen';
import DetalleScreen from './screens/DetalleScreen';

//Aqui se crean los navegadores de stack y tabs para la aplicación, definiendo las pantallas que se mostrarán en cada uno.
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//Aquí se define el navegador de tabs, que contiene las pantallas de Home, Perfil y Configuración, cada una con su respectivo ícono. El navegador de stack se encarga de mostrar el navegador de tabs como pantalla principal y las demás pantallas como secundarias.
function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#3498db',
        tabBarInactiveTintColor: '#999',
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{ title: 'Inicio', tabBarIcon: () => <Text style={{ fontSize: 20 }}>🏠</Text> }}
      />
      <Tab.Screen
        name="PerfilTab"
        component={PerfilScreen}
        options={{ title: 'Perfil', tabBarIcon: () => <Text style={{ fontSize: 20 }}>👤</Text> }}
      />
      <Tab.Screen
        name="ConfigTab"
        component={ConfiguracionScreen}
        options={{ title: 'Configuración', tabBarIcon: () => <Text style={{ fontSize: 20 }}>⚙️</Text> }}
      />
    </Tab.Navigator>
  );
}

// Aquí se define el componente principal de la aplicación, que envuelve el navegador de stack dentro del contenedor de navegación. El navegador de stack contiene el navegador de tabs como pantalla principal y las demás pantallas como secundarias, cada una con su título correspondiente.
//headerShown: false se utiliza para ocultar el encabezado de la pantalla principal (TabsNavigator) y mostrarlo solo en las pantallas secundarias.

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={TabsNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Botones" component={BotonesScreen} options={{ title: 'Parte 1 - Botones' }} />
          <Stack.Screen name="Modal" component={ModalScreen} options={{ title: 'Parte 2 - Modal' }} />
          <Stack.Screen name="Dropdown" component={DropdownScreen} options={{ title: 'Parte 3 - Dropdown' }} />
          <Stack.Screen name="Calculadora" component={CalculadoraScreen} options={{ title: 'Parte 4 - Calculadora' }} />
          <Stack.Screen name="Scroll" component={ScrollScreen} options={{ title: 'Parte 5 - Scroll' }} />
          <Stack.Screen name="Detalle" component={DetalleScreen} options={{ title: 'Detalle' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}