
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
      page: 1,
      refreshing: false
    }
    
  }

  
  

  //JSONPlaceholder
  getData = async () => {
    console.log('------------------------')
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=20&_page='+this.state.page);
    //console.log(res)
    //console.log(res.data)
    

    this.setState({
      page: this.state.page + 1, //2page
      data: this.state.data.concat(res.data) 
    })
    console.log(this.state.page)
    console.log(this.state.data)
    console.log('------------------------')
  }

  
  componentDidMount() {
    this.getData();

  }
  onEndReached = () => {
    this.getData();
  }
  
  handleRefresh = () => {
    this.setState({ refreshing: true, page: 1 }, this.getData );
  }
  renderItem = ({ item, index }) => {
    
    let width = Dimensions.get('window').width;
    let height = Dimensions.get('window').height;
    
    return (
      <View style={{ flex: 1, flexDirection:'row', backgroundColor:'pink' }}>
        <TouchableOpacity>
          <Image
            source={{uri : `${item.url}`}}
            style={{flexWrap:'wrap',width:width / 4, height: height / 6}}
          />
        </TouchableOpacity>
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
          onEndReached={this.onEndReached}
          onEndReachedThreshold={1}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          
          
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