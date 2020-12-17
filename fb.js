import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class FbScreen extends React.Component{
    render(){
        return(
            <View>
        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://www.facebook.com/images/fb_icon_325x325.png',
          }}
        />
             <Text style={{textAlign:'center',fontWeight:'bold',fontSize:50,color:'blue',marginTop:65}}>Facebook</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
imageIcon: {
    width: 300,
    height: 300,
    marginTop:100,
    marginLeft:650
  },
  
});

            