import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import * as Yup from 'yup';

import { Formik } from 'formik';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import FspButton from '../component/FspButton';
import AppForm from '../component/forms/Form';

import signIn from '../auth/auth';
import getToken from '../auth/authStorage';

function LoginScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(true);
  const [user, setUser] = useState();

  let validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
  });

  const secureTextDisplay = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };

  const handleSubmit = (email, password) => {
    signIn.signIn(email, password);
  };

  const restoreUser = async () => {
    let user = await getToken.getUser();
    if (user) setUser(user);
  };

  console.log(user, 'This is me ');

  return (
    <ImageBackground
      blurRadius={3}
      source={require('../assets/movie-back.jpg')}
      style={styles.background}
    >
      <Formik
        initialValues={{ email: '', password: '' }}
        // onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, values }) => (
          <>
            <View style={styles.inputContainer}>
              <View style={styles.textContainer}>
                <MaterialCommunityIcons
                  name="account"
                  size={20}
                  color={colors.gunmetal}
                />
                <TextInput
                  name="email"
                  style={styles.TextInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="Email"
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
                  name="password"
                  placeholder="Password"
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
                <FspButton
                  style={styles.button}
                  title="Login"
                  color="Primary"
                  onPress={() => {
                    handleSubmit(values), restoreUser();
                  }}
                />
              </View>
              <FspButton
                style={styles.button}
                title="Sign Out"
                color="secondary"
                onPress={() => signIn.signOut()}
              />
            </View>
          </>
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
    width: '80%',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
