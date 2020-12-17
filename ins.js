import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class InsScreen extends React.Component{
    render(){
        return(
            <View>
          <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png',
          }}
        />
             <Text style={{textAlign:'center',fontWeight:'bold',fontSize:50,color:'pink',marginTop:65}}>Instagram</Text>
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
