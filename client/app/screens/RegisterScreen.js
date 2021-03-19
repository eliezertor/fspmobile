import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ErrorMessage, Formik } from 'formik';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Yup from 'yup';
import createUser from '../auth/auth';
import FspButton from '../component/FspButton';
import colors from '../config/colors';

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
        {({ handleChange, handleBlur, values, errors, touched }) => (
          <>
            <ErrorMessage name="email">
              {(msg) => <Text style={styles.error}>{msg}</Text>}
            </ErrorMessage>

            <View style={styles.input}>
              <MaterialCommunityIcons
                size={20}
                style={styles.icon}
                color={
                  !touched
                    ? colors.gunmetal
                    : errors.email
                    ? '#FF5A5F'
                    : colors.gunmetal
                }
                name="email"
              />
              <TextInput
                autoCapitalize="none"
                autoCompleteType="email"
                error={errors.email}
                keyboardType="email-address"
                name="email"
                onBlur={handleBlur('email')}
                onChangeText={handleChange('email')}
                placeholder="Email"
                placeholderTextColor={colors.gunmetal}
                returnKeyLabel="Next"
                returnKeyType="next"
                textContentType="emailAddress"
                touched={touched.email}
                value={values.email}
              />
            </View>

            <ErrorMessage name="password">
              {(msg) => <Text style={styles.error}>{msg}</Text>}
            </ErrorMessage>

            <View style={styles.input}>
              <MaterialCommunityIcons
                size={20}
                style={styles.icon}
                color={
                  !touched
                    ? colors.gunmetal
                    : errors.password
                    ? '#FF5A5F'
                    : colors.gunmetal
                }
                name="lock"
              />

              <TextInput
                autoCapitalize="none"
                autoCompleteType="password"
                error={errors.password}
                name="password"
                onBlur={handleBlur('password')}
                onChangeText={handleChange('password')}
                placeholder="Password"
                placeholderTextColor={colors.gunmetal}
                returnKeyLabel="Go"
                returnKeyType="go"
                secureTextEntry={showPassword}
                style={styles.passwordInput}
                touched={touched.password}
                value={values.password}
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
  error: { color: 'white', alignSelf: 'flex-start', marginLeft: 25 },
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: { marginHorizontal: 10 },
  input: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: colors.Primary,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    height: 50,
    marginVertical: 10,
    width: '90%',
  },
  passwordInput: { width: '80%' },
});

export default RegisterScreen;
