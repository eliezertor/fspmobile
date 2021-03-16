import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { Formik } from 'formik';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import FspButton from '../compnents/FspButton';

function LoginScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(true);

  const secureTextDisplay = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };

  return (
    <ImageBackground
      blurRadius={3}
      source={require('../assets/movie-back.jpg')}
      style={styles.background}
    >
      <Formik
        style={styles.form}
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          // <View style={styles.container}>
          <View style={styles.inputContainer}>
            <View style={styles.textContainer}>
              <MaterialCommunityIcons
                name="account"
                size={20}
                color={colors.gunmetal}
              />
              <TextInput
                style={styles.TextInput}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>

            <View style={styles.textContainer}>
              <MaterialCommunityIcons
                name="lock"
                size={20}
                color={colors.gunmetal}
              />
              <TextInput
                style={styles.TextInput}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={showPassword}
              />
              <TouchableOpacity onPress={() => secureTextDisplay()}>
                <MaterialCommunityIcons
                  name="eye"
                  size={20}
                  color={colors.blue}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <FspButton style={styles.button} title="Login" color="Primary" />
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
    justifyContent: 'center',
    alignContent: 'center',
  },
  inputContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    // flex: 1,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    borderRadius: 15,
    height: 50,
    backgroundColor: 'white',
    borderColor: colors.Primary,
    borderRadius: 15,
    borderWidth: 2,
    color: colors.gunmetal,
  },
  TextInput: {
    color: colors.gunmetal,
    width: '85%',
    marginVertical: 10,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
