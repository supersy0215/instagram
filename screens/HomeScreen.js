import React from 'react';

import { FlatList } from 'react-native';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  
} from 'react-native';
//import { StackNavigationOptions } from '@react-navigation/stack';
//import {Header} from 'react-native-elements';


import { TOUCHABLE_STATE } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';

import Icon from 'react-native-vector-icons/Ionicons';
import AppHeader from '../component/AppHeader';

//import HomeInfinite from '../component/HomeInfinite';
import CollapsibleView from '../component/CollapsibleView';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    
  }

  // static navigationOptions = {
  //   title: 'Instagram',
  //   headerStyle: {
  //     backgroundColor: '#f4511e',
  //   },
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //   },
  // };
  // onClickSignin = () => {
  //   //this.props.navigation.popToTop();
  //   this.props.navigation.navigate('Login');
  // };
  

  render() {
    return (
      <ScrollView>
        
        <View style={{flex: 1, backgroundColor:'#fff'}}>
          {/* <Header
            leftComponent={{  text: 'INSTARGRAM', style: { color: '#fff' }  }}
            
            rightComponent={{ icon: 'home', color: '#fff' }}/> */}
            <AppHeader
              lefttitle="INSTAGRAM"
              rightIcon={<Icon name="paper-plane-outline" size={25} />}
              rightIcon2={<Icon name="heart-outline" size={26} />}
              rightIcon3={<Icon name="add-circle-outline" size={27} />}
            
            />
            
            <View style={{ padding:10, flexDirection:'row'}}>
              <Image
                source={require('../img/jenny.jpeg')}
                style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: '#222' }}

              />
              <View style={{ justifyContent: 'center',marginLeft:10 }}>
                <Text style={{fontSize:18, fontWeight:'bold'}}>supersy</Text>
              </View>
            </View>

            <View style={{ width:'100%',height:'100%'}}>
              <Image
                source={require('../img/Nam.jpeg')}
                style={{ width: '100%',height:'100%' }}
              />
            </View>

            <View style={{ paddingVertical:10, flexDirection: 'row',width:'100%',justifyContent:'space-between',backgroundColor:'#fff'}}>
              <View style={ {flexDirection:'row'}}>
                <TouchableOpacity style={styles.iconpadding}>
                  <Icon name="heart-outline" size={25} />
                </TouchableOpacity>
                <TouchableOpacity  style={styles.iconpadding}>
                  <Icon name="chatbubble-outline" size={24} />
                </TouchableOpacity>
                <TouchableOpacity  style={styles.iconpadding}>
                  <Icon name="paper-plane-outline" size={24} />
                </TouchableOpacity>

              </View>
              <View style={{paddingHorizontal:10}}>

                <TouchableOpacity >
                  <Icon name="bookmark-outline" size={24} />
                </TouchableOpacity>
              </View>
            </View>
              
            <CollapsibleView/>
              
          </View>
        
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  iconpadding :{
    paddingHorizontal: 6,
  
    }

})
export default HomeScreen;
