import React, { useState, useEffect, useRef } from 'react';

import { 
    Dimensions, 
    Image, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View 
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import ImageColors from 'react-native-image-colors';

import { SimplePokemon } from '../interfaces/pokemonInterfaces';

import { FadeInImage } from './FadeInImage';


interface Props {
    pokemon: SimplePokemon;
}

const windowWidth = Dimensions.get('window').width;

const PokemonCard = ({ pokemon }: Props) => {

    const [bgColor, setBgColor] = useState('grey')
    const isMounted = useRef(true);
    const { navigate } = useNavigation();

    const getColors = async () => {
        const result = await ImageColors.getColors(pokemon.picture, {fallback: 'grey'});
        if (!isMounted) return;
            ( result.platform === 'android')
            ? setBgColor(result.dominant || 'grey')
            : setBgColor(result.background || 'grey')
    }

    useEffect(() => {
        getColors();
        return () => {isMounted.current = false};
    }, []);

    return (
        <TouchableOpacity 
            activeOpacity={0.9}
            onPress={ () => navigate('PokemonScreen', {simplePokemon: pokemon, color: bgColor} ) }    
        >
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4,
                backgroundColor: bgColor
            }}>
                {/* Nombre del Pokemon y ID */}
                <View>
                    <Text style={styles.name}>
                        {pokemon.name}
                        {'\n#'+ pokemon.id}    
                    </Text>
                </View>

                <View style={styles.pokebolaContainer}>
                    <Image
                        source={ require('../assets/pokebola-blanca.png') }
                        style={styles.pokebola}
                    />
                </View>
                
                <FadeInImage
                    uri={ pokemon.picture }
                    style={ styles.pokemonImage }
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    },
    pokebolaContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        opacity: .5,
        overflow: 'hidden'
    },
    pokebola: {
        position: 'absolute',
        width: 100,
        height: 100,
        right: -25,
        bottom: -25
    },
    pokemonImage: {
        position: 'absolute',
        width: 120,
        height: 120,
        right: -8,
        bottom: -6
    }
});

export default PokemonCard
