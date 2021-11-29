
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
    const { } = this.state;
    const { container, header, headerText, content } =styles

    return (
      <View style={container}>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
       

          <TouchableOpacity onPress={this.toggleExpanded}>
            <View style={header}>
              <Text style={headerText}>더보기</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed} align="center">
            <View style={content}>
              <Text>
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
    backgroundColor: '#F5FCFF',
    paddingTop: 50,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  }

})
// export default CollapsibleView;
