import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import Home from './Home.js'; 

const Stack = createStackNavigator();

function YourApp({ navigation }) {
  const handleLogin = () => {
    console.log('Inicio de Sesión Exitoso'); // Imprime el mensaje en la consola al hacer clic en "Iniciar Sesión"
    navigation.navigate('Home.js'); // También navega a la pantalla "Home.js"
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logogametech.png')}
        style={styles.topImage}
      />
      <Text style={styles.slogan}>Explora el mundo de los juegos y la tecnología con GameTech</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Correo Electrónico*</Text>
        <TextInput style={styles.input} keyboardType="email-address" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Contraseña*</Text>
        <TextInput style={styles.input} secureTextEntry />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin} // Llama a la función handleLogin al hacer clic en "Iniciar Sesión"
      >
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>-----Inicia Sesión o Registrate con-----</Text>

      <View style={styles.socialMediaContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={{ uri: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' }}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={{ uri: 'https://www.facebook.com/images/fb_icon_325x325.png' }}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  topImage: {
    width: 100, 
    height: 100, 
    marginBottom: 20, 
  },
  slogan: {
    fontSize: 14,
    color: '#FFF',
    textAlign: 'center',
    paddingHorizontal: 50,
    marginBottom: 30,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 10,
  },
  inputLabel: {
    color: '#DE3DFA',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#9C9898',
    padding: 15,
    borderRadius: 5,
    color: 'black',
  },
  button: {
    width: '80%',
    backgroundColor: '#DE3DFA',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    color: '#FFF',
    marginTop: 20,
    marginBottom: 20,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  socialButton: {
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
});

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="YourApp">
        <Stack.Screen name="YourApp" component={YourApp} options={{ title: 'Bienvenido' }}/>
        <Stack.Screen name="Home.js" component={Home} options={{ title: 'Inicio' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
