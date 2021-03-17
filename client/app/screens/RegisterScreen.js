import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import * as Yup from 'yup';
import { Formik, Field, Form, useFormikContext } from 'formik';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppForm from '../compnents/forms/Form';
import colors from '../config/colors';
import FspButton from '../compnents/FspButton';

import createUser from '../auth/auth';

function RegisterScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(true);

  let validationSchema = Yup.object().shape({
    // name: Yup.string().required().label('Name'),
    email: Yup.string().email().required().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
  });

  const secureTextDisplay = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };

  const handleSubmit = (email, password) => {
    createUser.newUser(email, password);
  };

  // const {
  //   setFieldTouched,
  //   setFieldValue,
  //   errors,
  //   touched,
  //   values,
  // } = useFormikContext();

  return (
    <ImageBackground
      blurRadius={3}
      source={require('../assets/movie-back.jpg')}
      style={styles.background}
    >
      <Formik
        // onSubmit={(values) => console.log(values)}
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, values }) => (
          <>
            {/* <View style={styles.input}>
              <MaterialCommunityIcons
                size={20}
                style={styles.icon}
                name="account-box"
              />
              <TextInput
                placeholder="Name"
                name="name"
                placeholderTextColor={colors.gunmetal}
              />
            </View> */}
            <View style={styles.input}>
              <MaterialCommunityIcons
                size={20}
                style={styles.icon}
                name="email"
              />
              <TextInput
                placeholder="Email"
                name="email"
                placeholderTextColor={colors.gunmetal}
                value={values.email}
                onBlur={handleBlur('email')}
                onChangeText={handleChange('email')}
              />
            </View>
            <View style={styles.input}>
              <MaterialCommunityIcons
                size={20}
                style={styles.icon}
                name="lock"
              />
              <TextInput
                style={styles.passwordInput}
                placeholder="password"
                name="password"
                placeholderTextColor={colors.gunmetal}
                secureTextEntry={showPassword}
                value={values.password}
                onBlur={handleBlur('password')}
                onChangeText={handleChange('password')}
              />
              <TouchableOpacity onPress={() => secureTextDisplay()}>
                <MaterialCommunityIcons
                  name="eye"
                  size={20}
                  color={colors.blue}
                />
              </TouchableOpacity>
            </View>
            <FspButton
              title="Register"
              color="Primary"
              onPress={() => handleSubmit(values)}
            />
          </>
        )}
      </Formik>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: { marginHorizontal: 10, color: colors.gunmetal },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    width: '90%',
    borderRadius: 10,
    height: 50,
    marginVertical: 20,
    backgroundColor: 'white',
    borderColor: colors.Primary,
  },
  passwordInput: { width: '80%' },
});

export default RegisterScreen;
