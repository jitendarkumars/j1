import React from 'react';
import {Footer, FooterTab,Button,Text,Right,Icon} from 'native-base';
const HomeFooter =()=>
{
  return (
    <Footer style={{backgroundColor:'white',}}>
    <FooterTab>
    <Button style={{backgroundColor:'white'}}>
    <Text style={{color:'black',fontSize:12,fontWeight:'bold'}}>All</Text>
    </Button>
    <Button style={{backgroundColor:'white',}}>
    <Text style={{color:'black',fontSize:12,fontWeight:'bold'}}>Mentions</Text>
    </Button>

    </FooterTab>
    <Right>
    <Icon name="settings"/>
    </Right>
    </Footer>
  );
}
export default HomeFooter;
