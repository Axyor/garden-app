import React from 'react'
import { Image } from 'react-native';
export const LogoHomeTitle = () => {
    return (
        <Image style={{ width: 80, height: 80 }}
            resizeMode="contain"
            source={require('../assets/img/gardener.png')}/>
            
        
    )
}
