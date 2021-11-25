import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

class ProductScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <View style={{flex:1}}>
          <View style={{}}>
            <Text>Product</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default ProductScreen;