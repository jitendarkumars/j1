import React, {Component} from 'react';
import {Text} from 'react-native';
import HomeFooter from '../components/Footer';
import {Container,View, Header,Icon, } from 'native-base';
class NotificationsScreen extends Component {
  static navigationOptions={
    tabBarIcon: ({ tintColor }) => (
      <Icon name="notifications" style={{color: tintColor}} />
    ),
  }
  render(){
    return(
      <Container>
      <View style={{flex:1}}>
      </View>
      <HomeFooter/>
      </Container>
    );
  }
}
export default NotificationsScreen;
