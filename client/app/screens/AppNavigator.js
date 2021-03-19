import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FspButton from '../component/FspButton';
import signIn from '../auth/auth';
import loginOut from '../auth/loginOut';

function AppNavigator(props) {
  let auth = loginOut();

  return (
    <View style={styles.container}>
      <Text>You Made it here !</Text>
      <FspButton
        style={styles.button}
        title="Sign Out"
        color="secondary"
        onPress={() => {
          signIn.signOut();
          auth.logoutUser();
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppNavigator;
