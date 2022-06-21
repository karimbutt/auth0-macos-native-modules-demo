/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Auth0 from 'react-native-auth0';

const Auth0ClientOpts = {
  domain: 'dev-v-kek6e3.us.auth0.com',
  clientId: 'com.hypernova.os://dev-v-kek6e3.us.auth0.com/macos/com.hypernova.os/callback',
}

const App: () => JSX.Element = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: Colors.darker
  };

  const load = async () => {
  //   console.log('process.env.AUTH0_DOMAIN', AUTH0_DOMAIN)
  //   console.log('process.env.AUTH0_CLIENT_ID', AUTH0_CLIENT_ID)
    const auth0 = new Auth0(Auth0ClientOpts);
  
    auth0.webAuth
    .authorize({scope: 'openid email profile'})
    .then(credentials => console.log(credentials))
    .catch(error => console.log(error));

  }
  
  useEffect(() => {
    load()
  }, [])

  return (
    <SafeAreaView style={backgroundStyle}>
      
    </SafeAreaView>
  );
};

export default App;
