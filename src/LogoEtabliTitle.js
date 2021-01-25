import React from 'react'
import { Image } from 'react-native';
export const LogoEtabliTitle = () => {
    return (
        <Image style={{ width: 60, height: 60 }}
        resizeMode="contain"
        source={require('../assets/img/outils.png')}/>
    )
}
