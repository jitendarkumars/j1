import React, {Component} from 'react';
import {Header,Left,Body,Icon,Title,Button,Thumbnail} from 'native-base';
import  HomeScreen from '../screens/HomeScreen';
const HomeHeader = (props)=>
{
  const {navigation} =props;
    return (
      
        <Header  style={{backgroundColor:'white'}} hasTabs='true'>
          <Left>
          
            <Button transparent  onPress={() => navigation.navigate('DrawerOpen',{})}>
            <Thumbnail source={require("../images/jeet.jpg") }/>
            </Button>
          </Left>
          <Body>
            <Title style={{color:'black'}}>Home</Title>
          </Body>

        </Header>

    );   

}
export default HomeHeader;
