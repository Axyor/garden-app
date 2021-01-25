import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from './src/Home';
import { Etabli } from './src/Etabli';
import { LogoHomeTitle } from './src/LogoHomeTitle';
import { LogoEtabliTitle } from './src/LogoEtabliTitle';
import { LogoSeedTitle } from './src/LogoSeedTitle';
import { LogoPlantsTitle } from './src/LogoPlantsTitle';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Dimensions } from 'react-native';
import {Seed} from "./src/Seed"
import {Plants} from "./src/Plants"
const Stack = createStackNavigator();


export default function App() {
  const HomeTitle = () => {
    return (
      <View
        style={{ marginRight: vw/12}}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: "bold" }}> Bienvenue au coin vert !  🌱</Text>
      </View>
    )
  }

  const EtabliTitle = () => {
    return (
      <View
        style={{ marginRight: 15}}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: "bold" }}> Qu'avez-vous en stock ? </Text>
      </View>
    )
  }

  const SeedTitle = () => {
    return (
      <View
        style={{ marginRight: 15}}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: "bold" }}> Où en est votre grainier ? </Text>
      </View>
    )
  }

  const PlantsTitle = () => {
    return (
      <View
        style={{ marginRight: 15}}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: "bold" }}> Où en sont vos plants ? </Text>
      </View>
    )
  }
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#005C4A',
            height: 111,
          },
          headerTintColor: '#fff',
          headerTitleAlign: "left"
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => <LogoHomeTitle />,
            headerRight: () => <HomeTitle />
          }}
        />
        <Stack.Screen 
        name="Etabli" 
        component={Etabli}
        options={{
          headerTitle: () => <LogoEtabliTitle />,
          headerRight: () => <EtabliTitle />
        }}
         />
        <Stack.Screen 
        name="Seed" 
        component={Seed}
        options={{
          headerTitle: () => <LogoSeedTitle />,
          headerRight: () => <SeedTitle />
        }} 
        />
        <Stack.Screen 
        name="Plants" 
        component={Plants}
        options={{
          headerTitle: () => <LogoPlantsTitle />,
          headerRight: () => <PlantsTitle />
        }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const vw = Dimensions.get('screen').width;
const vh = Dimensions.get('screen').height;