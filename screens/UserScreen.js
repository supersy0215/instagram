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

import Icon from 'react-native-vector-icons/Ionicons';
import AppHeader from '../component/AppHeader';
class ProductScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <AppHeader
          lefttitle="supersy"
          rightIcon={<Icon name="paper-plane-outline" size={25} />}
          rightIcon2={<Icon name="heart-outline" size={26} />}
        />
      </View>
    )
  }
}

export default ProductScreen;