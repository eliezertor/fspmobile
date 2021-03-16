import React from 'react';
import { View, StyleSheet, TextInput, ImageBackground } from 'react-native';

import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import SafeAreaScreen from '../compnents/SafeAreaScreen';
import AppForm from '../compnents/forms/Form';
import colors from '../config/colors';

function RegisterScreen({ navigation }) {
  let validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().email().required().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
  });


  


  return (
    // <SafeAreaScreen style={styles.container}>
    <ImageBackground
      blurRadius={3}
      source={require('../assets/movie-back.jpg')}
      style={styles.background}
    >
      <AppForm
        // onSubmit={onSubmit}
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
      >
        <View style={styles.input}>
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
        </View>
        <View style={styles.input}>
          <MaterialCommunityIcons size={20} style={styles.icon} name="email" />
          <TextInput
            placeholder="Email"
            name="email"
            placeholderTextColor={colors.gunmetal}
          />
        </View>
        <View style={styles.input}>
          <MaterialCommunityIcons size={20} style={styles.icon} name="lock" />
          <TextInput
            placeholder="password"
            name="password"
            placeholderTextColor={colors.gunmetal}
          />
        </View>
      </AppForm>
    </ImageBackground>
    // {/* </SafeAreaScreen> */}
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
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: '90%',
    borderRadius: 10,
    height: 50,
    marginVertical: 20,
    backgroundColor: 'white',
    borderColor: colors.Primary,
  },
});

export default RegisterScreen;
