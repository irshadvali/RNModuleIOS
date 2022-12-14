/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  NativeModules,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          backgroundColor: '#d0d0d0',
          height: '100%',
          width: '100%',
        }}>
        <TouchableOpacity
          onPress={() => {
            // eslint-disable-next-line no-alert
            //alert('hhhhhh');
            NativeModules.RNHello.getDataFromJS('Irshad ', 'Vali');
          }}>
          <Text>Click, Send Data to Native IOS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            // eslint-disable-next-line no-alert
            //alert('hhhhhh');
            NativeModules.RNHello.findEvent(res => {
              // eslint-disable-next-line no-alert
              alert(res);
            });
          }}>
          <Text>Click, Data from Native IOS</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
