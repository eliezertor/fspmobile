import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Formik } from 'formik';

import colors from '../config/colors';

function LoginScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={3}
      source={require('../assets/movie-back.jpg')}
      style={styles.background}
    >
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.TextInput}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <TextInput
              style={styles.TextInput}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
                title="Submit"
              >
                <View style={styles.textContainer}>
                  <Text style={styles.text}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  logoContainer: { justifyContent: 'center', alignItems: 'center' },
  logo: { width: '100%' },

  inputContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  TextInput: {
    color: colors.gunmetal,
    width: '90%',
    borderColor: colors.Primary,
    height: 50,
    borderWidth: 2,
    marginVertical: 10,
    borderRadius: 15,
    top: 150,
    backgroundColor: 'white',
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    width: '70%',
  },
  textContainer: {
    height: 50,
    top: 140,
    backgroundColor: colors.Primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 40,
  },

  text: {
    color: 'white',
    fontSize: 18,
  },
});

export default LoginScreen;
