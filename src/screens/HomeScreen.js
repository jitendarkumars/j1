import React, {Component} from 'react';
import getTheme,{Icon, Container,Fab,Content,} from 'native-base';
import {StyleSheet} from 'react-native';
import HomeHeader from '../components/Header';
import HomeBody from '../components/HomeBody';
import HomeFooter from '../components/Footer';
import HomeScreenTab from '../../App';
import { NavigationActions } from 'react-navigation'

class HomeScreen extends Component {
  static navigationOptions={
    tabBarIcon:({tintColor})=>
    (
      <Icon name='home' style={{color: tintColor}}/>
    ),
  }
  constructor(){
    super();
    this.state={active:true};
  }
  render(){
     return(
      <Container>
   
      <Content>
       
      <HomeBody/>
      </Content>
      <Fab active={this.state.active}
      style={{backgroundColor: 'blue',marginBottom: 30}}
      position='bottomRight'
      onPress={()=> this.setState({acive:!this.state.active})}>
      <Icon name='create'/>
      </Fab>
      <HomeFooter/>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  }
});




export default HomeScreen;
