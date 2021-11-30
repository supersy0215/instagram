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
import { SearchBar } from 'react-native-elements';

import SearchInfinite from '../component/SearchInfinite';

import Icon from 'react-native-vector-icons/Ionicons';
class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search:'',
    }
    
  }

  updateSearch = (search)=> {
    this.setState({search});
  }
  render() {
    const {search} = this.state;

    return (
      <View style={{ flex: 1}}>
        <SearchBar
          placeholder="검색"
          onChangeText={this.updateSearch}
          value={search}
          containerStyle={{backgroundColor:'white'}}
          inputContainerStyle={{backgroundColor:'white'}}
        />
        <SearchInfinite/>
        
      </View>
    )
  }
}

export default SearchScreen;