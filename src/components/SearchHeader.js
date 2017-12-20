import React from 'react';
import {Text,Header, Left,Button, Body,Item,Right,Input,Icon,Thumbnail} from 'native-base';
import {} from 'react-navigation';
const SearchHeader =(props)=>
{
  const {navigation}=props;
  return(
    <Header searchBar  style={{backgroundColor:'white'}}>
    <Left>
    <Button style={{backgroundColor:'white'}} onPress={()=>navigation.navigate("DrawerOpen")}>
    <Thumbnail source={require("../images/jeet.jpg") }/>
    </Button>
    </Left>
    <Body>
    <Item>
    <Input placeholder='Search'
  />
  </Item>
  </Body>
  <Right>
  <Button  style={{backgroundColor:'white'}}>
    <Icon  style={{color:'black'}}name="add"/>
    </Button></Right>
  </Header>
);
};
export default SearchHeader;
