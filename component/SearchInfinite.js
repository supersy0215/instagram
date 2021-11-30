
import React, { Component } from 'react';
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
      // data: [
      //   { img: require('../img/jenny.jpeg') },
      //   { img: require('../img/lee.jpeg') },
      //   { img: require('../img/Nam.jpeg') },
      //   { img: require('../img/jenny.jpeg') },
      //   { img: require('../img/park.jpeg') },
      //   { img: require('../img/song.jpeg') },
      //   { img: require('../img/jenny.jpeg') },
      //   { img: require('../img/lee.jpeg') },
      //   { img: require('../img/Nam.jpeg') },
      //   { img: require('../img/jenny.jpeg') },
      //   { img: require('../img/park.jpeg') },
      //   { img: require('../img/song.jpeg') },
      //   { img: require('../img/jenny.jpeg') },
      //   { img: require('../img/lee.jpeg') },
      //   { img: require('../img/Nam.jpeg') },
      //   { img: require('../img/jenny.jpeg') },
      //   { img: require('../img/park.jpeg') },
      //   { img: require('../img/song.jpeg') },
      //   { img: require('../img/jenny.jpeg') },
      //   { img: require('../img/lee.jpeg') },
      //   { img: require('../img/Nam.jpeg') },
      //   { img: require('../img/jenny.jpeg') },
      //   { img: require('../img/park.jpeg') },
      //   { img: require('../img/song.jpeg') },
      //   { img: require('../img/jenny.jpeg') },
      //   { img: require('../img/lee.jpeg') },
      //   { img: require('../img/Nam.jpeg') },
      //   { img: require('../img/jenny.jpeg') },
      //   { img: require('../img/park.jpeg') },
      //   { img: require('../img/song.jpeg') } ],
      data:[],
    }
    
  }

  
  componentWiiMount() {
    this.getData();

  }

  //JSON
  getData = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(json => console.log(json))
      // .then(json => {
      //   this.setState({data: json})
      // })
  }

  onEndReached = () => {
    
  }
  
  renderItem = ({ item }) => {
    
    let width = Dimensions.get('window').width;
    let height = Dimensions.get('window').height;
    

    return (
      <View style={{ flex: 1, flexDirection:'row', backgroundColor:'pink' }}>
        
        <Image
          source={item.img}
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