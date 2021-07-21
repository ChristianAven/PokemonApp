import React from "react";

import { createStackNavigator } from '@react-navigation/stack';

import { SimplePokemon } from '../interfaces/pokemonInterfaces';

import PokemonScreen from '../screen/PokemonScreen';
import SearchScreen from "../screen/SearchScreen";


export type RootStackParams = {
    SearchScreen: undefined; 
    PokemonScreen: { simplePokemon: SimplePokemon, color: string }
}

const Stack = createStackNavigator<RootStackParams>();

const StackNavigatorSearch = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white',
                }
            }}
        >
            <Stack.Screen name="SearchScreen"    component={SearchScreen} />
            <Stack.Screen name="PokemonScreen"   component={PokemonScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigatorSearch;
