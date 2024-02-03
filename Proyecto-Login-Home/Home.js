import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

const ProductItem = ({ name, price, onPress, image }) => (
  <View style={styles.productItem}>
    <Image source={image} style={styles.productImage} />
    <Text style={styles.productName}>{name}</Text>
    <Text style={styles.productPrice}>{price}</Text>
    <TouchableOpacity style={styles.buyButton} onPress={onPress}>
      <Text style={styles.buyButtonText}>Comprar</Text>
    </TouchableOpacity>
  </View>
);

const Home = ({ navigation }) => {
  // Función para manejar el clic en el botón "Cerrar Sesión"
  const handleLogout = () => {
    // Aquí puedes agregar la lógica para cerrar la sesión
    console.log('Cierre de Sesión Exitoso'); // Imprime el mensaje en la consola
    // En este ejemplo, regresamos a la pantalla de inicio de sesión
    navigation.navigate('YourApp'); 
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Home</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Cerrar Sesión</Text> 
        </TouchableOpacity>
      </View>
      <ProductItem 
        name="AUDIFONOS GAMER" 
        price="$499.00" 
        image={require('./assets/audifonos-gamer.png')}
      />
      <ProductItem 
        name="MONITOR SAMSUNG" 
        price="$3,499.00" 
        image={require('./assets/monitor-samsung.png')}
      />
      <ProductItem 
        name="TARJETA GRÁFICA RTX 4090" 
        price="$24,999.00" 
        image={require('./assets/tarjeta-grafica.png')}
      />
      <ProductItem 
        name="PROCESADOR RYZEN 9" 
        price="$9,899.00" 
        image={require('./assets/procesador-ryzen9.png')}
      />
      {/* Agrega más productos aquí si es necesario */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Alinea el botón de Cerrar Sesión a la derecha
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#2D2D2D',
  },
  title: {
    fontSize: 24,
    color: '#DE3DFA',
    fontWeight: 'bold'
  },
  logoutButton: {
    padding: 10,
    backgroundColor: '#DE3DFA', // Color de fondo del botón
    borderRadius: 5,
  },
  logoutButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 10,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  productName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  productPrice: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: '#DE3DFA',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buyButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
