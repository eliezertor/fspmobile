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
import signIn from '../auth/auth';
import getToken from '../auth/authStorage';
import FspButton from '../component/FspButton';
import loginOut from '../auth/loginOut';
import colors from '../config/colors';

function LoginScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(true);
  const [user, setUser] = useState();

  let validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required')
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
    signIn.signIn(email, password);
  };

  const auth = loginOut();

  const restoreUser = async () => {
    let user = await getToken.getUser();
    if (user) setUser(user);
  };
  // console.log(user, 'This is me ');

  return (
    <ImageBackground
      blurRadius={Platform.OS === 'ios' ? 8 : 2}
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

            <View style={styles.textContainer}>
              <MaterialCommunityIcons
                style={styles.icon}
                name="account"
                size={20}
                color={
                  !touched
                    ? colors.gunmetal
                    : errors.email
                    ? '#FF5A5F'
                    : colors.gunmetal
                }
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
                style={styles.TextInput}
                textContentType="emailAddress"
                touched={touched.email}
                value={values.email}
              />
            </View>

            <ErrorMessage name="password">
              {(msg) => <Text style={styles.error}>{msg}</Text>}
            </ErrorMessage>

            <View style={styles.textContainer}>
              <MaterialCommunityIcons
                style={styles.icon}
                name="lock"
                size={20}
                color={
                  !touched
                    ? colors.gunmetal
                    : errors.password
                    ? '#FF5A5F'
                    : colors.gunmetal
                }
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
                style={styles.TextInput}
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

            <View style={styles.buttonContainer}>
              <FspButton
                style={styles.button}
                title="Login"
                color="Primary"
                onPress={() => {
                  handleSubmit(values);
                  restoreUser();
                  auth.loggedInUser();
                }}
              />
            </View>
            {/* <FspButton
              style={styles.button}
              title="Sign Out"
              color="secondary"
              onPress={() => signIn.signOut()}
            /> */}
          </>
        )}
      </Formik>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 25,
  },

  textContainer: {
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
  icon: { marginHorizontal: 10 },
  TextInput: {
    color: colors.gunmetal,
    width: '80%',
    // marginHorizontal: 10,
    // marginVertical: 10,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
