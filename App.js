import React, {PureComponent} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HexAdder from './src/hex-adder';

export default class App extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <HexAdder />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
