import React from'react';
import {View,Text} from 'react-native';
import {Header,Left,Button,Icon,Body,Right,Title,Container} from 'native-base';

export default class NavPage extends React.Component{
    static navigationOptions = {
        title: 'Profile',
        }
    render(){
        return(
            <Container>
            <Header style={{backgroundColor:'white'}}>
          <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{color: 'black'}} />
            </Button>
          </Left>
          <Body>
            <Title style={{color:'black'}}>Profile</Title>
          </Body>
          <Right />
        </Header>
<View>
    <Text style={{alignSelf:'center', fontWeight:'bold',fontSize:32}}>This is profile page</Text>
    </View></Container>
        );
    }
}