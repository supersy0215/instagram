
import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

//import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
//import Accordion from 'react-native-collapsible/Accordion';

// class CollapsibleView extends React.Component{
  
// }


export default class CollapsibleView extends Component {
  state = {
    collapsed: true,
  }; 

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };


  render() {
    const { container, header, headerText, content } =styles

    return (
      <View style={container}>
        <ScrollView contentContainerStyle={{ paddingTop: 5 }}>
       
          <TouchableOpacity onPress={this.toggleExpanded}>
            <View style={header}>
              <Text style={{ fontSize:16 }}>supersy</Text>
              <Text style={headerText}>더보기</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed} align="center">
            <View style={content}>
              <Text style={{fontSize: 17}}>
                Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                ribs Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                ribsBacon ipsum dolor amet chuck turducken landjaeger tongue spare
                ribsBacon ipsum dolor amet chuck turducken landjaeger tongue spare
                ribs
              </Text>
            </View>
          </Collapsible> 
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: 50,
    width: "100%", paddingHorizontal:10
  },
  header: {
    backgroundColor: '#fff',
    padding: 10,
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  headerText: {
    //textAlign: 'right',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 12,
    backgroundColor: '#fff',
  }

})
// export default CollapsibleView;
