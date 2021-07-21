import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props{
    pokemon: PokemonFull;
}

const PokemonDetails = ({pokemon}: Props) => {


    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                ...StyleSheet.absoluteFillObject,
            }}>
            {/* Types and weight*/}
            <View style={{
                ...styles.container,
                marginTop: 370
            }}>
                <Text style={styles.title}>Type</Text>
                <View style={{flexDirection:'row'}}>
                    {
                        pokemon.types.map(({type}) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}
                                key={type.name}
                            >
                                {type.name}
                            </Text>
                        ))
                    }
                </View>

                {/* weight */}
                <Text style={styles.title}>weight</Text>
                <Text style={styles.regularText}>{pokemon.weight}lb</Text>

            </View>

            {/* Sprites */}
            <View style={styles.container}>
                <Text style={styles.title}>Sprites</Text>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprites}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_default}
                    style={styles.basicSprites}
                />
                <FadeInImage
                    uri={pokemon.sprites.front_shiny}
                    style={styles.basicSprites}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={styles.basicSprites}
                />
            </ScrollView>
            {/* skils */}
            <View style={styles.container}>
                <Text style={styles.title}>Basic Abilities</Text>
                <View style={{flexDirection:'row'}}>
                    {
                        pokemon.abilities.map(({ability}) => (
                            <Text
                            style={{
                                ...styles.regularText,
                                marginRight: 10,
                            }}
                            key={ability.name}
                            >
                                {ability.name}
                            </Text>
                        ))
                    }
                </View>
            </View>

            {/* Moves */}
            <View style={styles.container}>
                <Text style={styles.title}>All moves</Text>
                <View
                    style={{flexDirection:'row', flexWrap: 'wrap'}}>
                    {
                        pokemon.moves.map(({move}) => (
                            <Text
                            style={{
                                ...styles.regularText,
                                marginRight: 10,
                            }}
                            key={move.name}
                            >
                                {move.name}
                            </Text>
                        ))
                    }
                </View>
            </View>

            {/* Stats */}
            <View style={styles.container}>
                <Text style={styles.title}>Stats</Text>
                <View>
                    {
                        pokemon.stats.map( (stat, i) => (
                            <View
                                style={{flexDirection:'row'}}
                                key={stat.stat.name + i}
                            >
                                <Text
                                    style={{
                                        ...styles.regularText,
                                        marginRight: 10,
                                        width: 150
                                    }}>
                                        {stat.stat.name}
                                </Text>
                                <Text
                                    style={{
                                        ...styles.regularText,
                                        fontWeight: 'bold'
                                    }}>
                                        {stat.base_stat}
                                </Text>
                            </View>
                        ))
                    }
                </View>
            </View>

            {/* last sprite and margin */}
            <View
                style={{
                    alignItems: 'center',
                    marginBottom: 50
                }}
            >
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprites}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20
    },
    regularText: {
        fontSize: 19,

    },
    basicSprites: {
        width: 100,
        height: 100
    }
});
export default PokemonDetails
