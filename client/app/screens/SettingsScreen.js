import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SafeAreaScreen from '../component/SafeAreaScreen';
import FspButton from '../component/FspButton';
import signIn from '../auth/auth';
import loginOut from '../auth/loginOut';

function SettingsScreen(props) {
  let auth = loginOut();

  return (
    <SafeAreaScreen>
      <View style={styles.container}>
        <Text>Movies!</Text>
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
    </SafeAreaScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});

export default SettingsScreen;
