import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TestComponent from './src/components/test-compontent';
import CounterScren from './src/screens/counter-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const stack = createStackNavigator();

const App = () => {
  return (
    // <View style={styles.container}>
    //     {/* <TestComponent/> */}
    //     <CounterScren/>
    // </View>
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Counter" component={CounterScren}/>
        <stack.Screen name="Quiz-1" component={CounterScren}/>
      </stack.Navigator>

    </NavigationContainer>
    
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
