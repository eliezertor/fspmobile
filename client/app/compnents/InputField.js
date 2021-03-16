import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as yup from 'yup';
import { Formik, Field, Form } from 'formik';

let schema = yup.object.create({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .password()
    .min(8, 'Password should be of minimum 8 characters length')
    .string()
    .required(),
});

function InputField() {
  return <View style={styles.container}>
      <Formik>
          
      </Formik>
  </View>;
}
const styles = StyleSheet.create({
  container: {},
});

export default InputField;
