import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './BatLogoStyles';
import Batlogo from '../../../assets/images.png'

export function BatLogo() {
  return (
    <View >
    <Text style={styles.title}>BAT PASSS GENERATOR</Text>
    <Image 
    source={Batlogo}
    style={{
        resizeMode:'contain',
        height:180
        
    }} />
        
    
         
    </View>
  );
}