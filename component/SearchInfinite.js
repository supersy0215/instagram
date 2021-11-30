
import React, { Component, useCallback } from 'react';
import { FlatList } from 'react-native';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  Dimensions
} from 'react-native';

import axios from 'axios';
class SearchInfinite extends React.Component{
  constructor(props) {
    super(props);

    //let { width, height } = Dimensions.get('window');
    //console.log(width, height)

    // console.log({
    //   width: Dimensions.get('window').width,
    //   height: Dimensions.get('window').height
    // })

    
    this.state = {
      data: [],
    }
    
  }

  
  

  //JSONPlaceholder
  getData = async () => {
    console.log('------------------------')
    //fetch('https://jsonplaceholder.typicode.com/photos')
      // .then(res => res.json())
      // .then(json => {
      //   this.setState({ data: json })
      //   console.log(this.state.data)
      // })
    
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
    console.log(res.data)
    
    const photos = res.data;
    this.setState({ data: photos })
    console.log(this.state.data)
  }

  
  componentWillMount() {
    this.getData();

  }
  onEndReached = () => {
    
  }
  
  renderItem = ({ item, index }) => {
    
    let width = Dimensions.get('window').width;
    let height = Dimensions.get('window').height;
    
    return (
      <View style={{ flex: 1, flexDirection:'row', backgroundColor:'pink' }}>
        
        <Image
          source={{uri : `${item.url}`}}
          style={{flexWrap:'wrap',width:width / 4, height: height / 6}}
        />
        
      </View>
    );
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          numColumns = {4}
          keyExtractor={(item) => item.id} 
          onEndReached={this.onEndReached()}
          onEndReachedThreshold={1}
          
          
        />
      </View>
    );
  }
}

export default SearchInfinite;

// const SearchInfinite = () => {
//   const size = useWindowDimensions();
//   const width = size.width;
//   const height = size.height;

//   return (
//     <View style={styles.container}>
//       <Text>{`Window Dimensions: height - ${height}, width - ${width}`}</Text>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor:'pink'
//   }
// });

// export default SearchInfinite;