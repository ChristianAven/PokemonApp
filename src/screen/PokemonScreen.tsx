import { StackScreenProps } from "@react-navigation/stack";
import React from "react";

import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Icon from "react-native-vector-icons/Ionicons";

import { RootStackParams } from "../navigation/StackNavigatorHome";

import { FadeInImage } from "../components/FadeInImage";
import usePokemon from '../hooks/usePokemon';
import PokemonDetails from "../components/PokemonDetails";

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

const PokemonScreen = ({ navigation, route }: Props) => {

    const {top} = useSafeAreaInsets();
    const {simplePokemon, color} = route.params;
    const {isLoading, pokemon} = usePokemon(simplePokemon.id);

    return (
        <View style={{flex:1}}>
            <View style={{
                ...styles.headerContainer,
                backgroundColor: color,
            }}>

                {/* Back Button */}
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={ () => navigation.pop() }
                    style={{
                        ...styles.backButton,
                        marginTop: top
                    }}
                >
                    <Icon
                        name='chevron-back-outline'
                        size={50}
                        color='white'
                    />
                </TouchableOpacity>
                
                {/* Pokemon Name */}
                <Text style={{
                    ...styles.pokemonName,
                    top: top + 50
                }}>
                    {simplePokemon.name+ '\n'}#{simplePokemon.id}
                </Text>

                {/* Pokebola blanca */}
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={ styles.pokebola }
                />

                {/* Imagen de Pokemon */}
                <FadeInImage
                    uri={simplePokemon.picture}
                    style={styles.pokemonImage}
                />
            </View>

            {/* Detalles y Loading */}
            {
                isLoading ? (
                    <View style={styles.loadingIndicator}>
                        <ActivityIndicator
                            color={simplePokemon.color}
                            size={50}
                        />
                    </View>
                )
                : <PokemonDetails pokemon={pokemon} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000
    },
    backButton: {
        position:'absolute', 
        left: 10,
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,
    },
    pokebola: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7
    },
    pokemonImage: {
        position: 'absolute',
        width: 250,
        height: 250,
        bottom: -16
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default PokemonScreen
