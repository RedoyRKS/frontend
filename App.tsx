import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TestComponent from './src/components/test-compontent';
import CounterScren from './src/screens/counter-screen';

const App = () => {
  return (
    <View style={styles.container}>
        {/* <TestComponent/> */}
        <CounterScren/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
