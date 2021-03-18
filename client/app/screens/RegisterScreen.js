import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import * as Yup from 'yup';
import { Formik, Field, Form, useFormikContext, ErrorMessage } from 'formik';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppForm from '../component/forms/Form';
import colors from '../config/colors';
import FspButton from '../component/FspButton';

import createUser from '../auth/auth';

function RegisterScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(true);

  let validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is Required')
      .label('Email'),
    password: Yup.string()
      .min(4, 'Too short')
      .required('Password is required')
      .label('Password'),
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
  // const validationColor = !touched ? '#223e4b' : error ? '#FF5A5F' : '#223e4b';

  return (
    <ImageBackground
      blurRadius={3}
      source={require('../assets/movie-back.jpg')}
      style={styles.background}
    >
      <Formik
        // onSubmit={(values) => console.log(values)}
        // ErrorMessage={error}
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, values, errors, touched }) => (
          <>
            <ErrorMessage name="email">
              {(msg) => <Text style={styles.error}>{msg}</Text>}
            </ErrorMessage>

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
                error={errors.email}
                touched={touched.email}
                textContentType="emailAddress"
                autoCompleteType="email"
                keyboardType="email-address"
                returnKeyType="next"
                returnKeyLabel="Next"
                autoCapitalize="none"
              />
            </View>

            <ErrorMessage name="password">
              {(msg) => <Text style={styles.error}>{msg}</Text>}
            </ErrorMessage>

            <View style={styles.input}>
              <MaterialCommunityIcons
                size={20}
                style={styles.icon}
                // color={!touched ? '#223e4b' : errors ? '#FF5A5F' : '#223e4b'}
                name="lock"
              />

              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                name="password"
                placeholderTextColor={colors.gunmetal}
                secureTextEntry={showPassword}
                value={values.password}
                onBlur={handleBlur('password')}
                onChangeText={handleChange('password')}
                error={errors.password}
                touched={touched.password}
                autoCompleteType="password"
                autoCapitalize="none"
                returnKeyType="go"
                returnKeyLabel="Go"
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
  error: { color: 'white', alignSelf: 'flex-start', marginLeft: 25 },
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
