import React from "react";
import { Image } from "react-native";
import { Header,Footer,Left,Right,Card,CardItem,Text,Body,Container,Thumbnail,List,ListItem,Content,View,Icon} from "native-base";

import NavPage from '../screens/NavPage';
 class SideBar extends React.Component {
   constructor(){
    super();
  }
  render() {
    const routes=[{name:'Profile',icon:'contact'},{name:'Lists',icon:'list-box'},{name:'Moments',icon:'thunderstorm'},{name:'Highlights',icon:'pricetags'}];
    return (
      <Container>
        <Content> 
        <Card>
            <CardItem > 
              <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'flex-end',padding:20}}>
              <Thumbnail  style={{width:75, height:75}}source={require('../images/jeet.jpg')} />
              <Text style={{fontWeight: 'bold', fontSize:22}}>Jeet</Text>
              <Text note>@jeetKumar</Text>
            <View style = {{flexDirection: 'row',}} >
              <Text style={{fontWeight:'bold', fontSize:16}}>700 Following </Text>
              <Text  style={{fontWeight:'bold', fontSize:16}}>770 Followers</Text>
              </View>
              </View>
             </CardItem>
          <CardItem style={{elevation: 2,borderBottomWidth: 2,borderTopWidth: 2,  }}>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data.name)}
                >
                 <Icon name={data.icon} />
                  <Text style={{paddingLeft:10}}>{data.name}</Text>
                 
                </ListItem>
              );
            }}
          />
          </CardItem>
          <CardItem >
            <List>
              <ListItem>
                  <Text>Settings and Privacy</Text>               
              </ListItem>
              <ListItem>
                  <Text>Help Center</Text>               
              </ListItem>
            </List>
          </CardItem>
          </Card>
         
        </Content>
        <Footer style={{backgroundColor:'white'}}>
            <Left>
             <Icon style={{ marginLeft: 10, }} name='moon'></Icon>
           </Left>
            <Right>
            <Icon style={{ marginRight: 10 }} name='qr-scanner'></Icon>
            </Right>
          </Footer>
      </Container>
    );
  }
}
export default SideBar;