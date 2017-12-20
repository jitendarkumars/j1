import React from 'react';
import {CardItem,Card,Left,Thumbnail,Body,Text,Icon,Button,Right,RefreshControl} from 'native-base';
import {Image,ScrollView }from 'react-native';

const HomeBody= ()=>
{
 
  return(
    <ScrollView
      >
    <Card >
      <CardItem style={{flexDirection:'row'}}>
             <Left >
               <Thumbnail source={require('../images/jeet.jpg')} />
               <Body style={{alignSelf:'flex-start'}}>
               <Text >Jeet  @JeetKumar </Text>
               <Text >Hello Everyone This is my FirstPost</Text>
             </Body>
               </Left> 
              
                  
      </CardItem>
    <CardItem  style={{flexDirection:'column',paddingTop:0}}>
<Image source={require('../images/jeet.jpg')}  style={{width:300, height:200,alignSelf:'flex-end',}}></Image>  
    </CardItem>
<CardItem style={{alignSelf:'flex-end'}}>
<Icon  name='md-cloud'/>
<Text  style={styles.icontext}>10</Text>
<Icon  name="git-compare" />
<Text  style={styles.icontext}>2</Text>
<Icon  name='heart'/>
<Text style={styles.icontext}>10</Text>
<Icon name='mail'/>
<Text  style={styles.icontext}>10</Text>
  </CardItem>
  <CardItem style={{flexDirection:'row'}}>
             <Left >
               <Thumbnail source={require('../images/jeet.jpg')} />
               <Body style={{alignSelf:'flex-start'}}>
               <Text >Jeet  @JeetKumar </Text>
               <Text >Hello Everyone This is my FirstPost</Text>
             </Body>
               </Left> 
              
                  
      </CardItem>
    <CardItem  style={{flexDirection:'column',paddingTop:0}}>
<Image source={require('../images/jeet.jpg')}  style={{width:300, height:200,alignSelf:'flex-end',}}></Image>  
    </CardItem>
<CardItem style={{alignSelf:'flex-end'}}>
<Icon  name='md-cloud'/>
<Text  style={styles.icontext}>10</Text>
<Icon  name="git-compare" />
<Text  style={styles.icontext}>2</Text>
<Icon  name='heart'/>
<Text style={styles.icontext}>10</Text>
<Icon name='mail'/>
<Text  style={styles.icontext}>10</Text>
  </CardItem>
</Card>
</ScrollView>
  );
}
const styles = {
  icontext: {
    padding:10,
    paddingLeft:0,
    color: '#000'
  }
};
export default  HomeBody;
