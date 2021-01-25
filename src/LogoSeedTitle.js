import React from 'react'
import { Image } from 'react-native';
export const LogoSeedTitle = () => {
    return (
        <Image style={{ width: 70, height: 70 }}
        resizeMode="contain"
        source={require('../assets/img/seed.png')}/>
    )
}