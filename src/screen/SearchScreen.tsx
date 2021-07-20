import React from 'react';
import { Dimensions } from 'react-native';

import { 
    FlatList, 
    Platform, 
    Text, 
    View 
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Loading from '../components/Loading';
import PokemonCard from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';

import usePokemonSearch from '../hooks/usePokemonSearch';

import { styles } from '../theme/appTheme';
import { useState } from 'react';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { useEffect } from 'react';


const screenWidth = Dimensions.get('window').width;

const SearchScreen = () => {

    const {top} = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();
    const [term, setTerm] = useState('');
    const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([])


    useEffect(() => {
        if (term.length === 0) return setPokemonFiltered([]);

        setPokemonFiltered(
            simplePokemonList.filter( (poke) => poke.name.toLowerCase().includes(term.toLowerCase()) )
        )
    }, [term])


    if (isFetching) {
        return ( <Loading/> )
    }
    
    return (
        <View style={{
            flex: 1,
            marginHorizontal: 20
        }}>

            <SearchInput 
                onDebounce={ (value) => setTerm(value) }
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: (Platform.OS === 'ios') ? top : top + 25,
                }}
            />
            <FlatList
                    data={pokemonFiltered}
                    keyExtractor={ ({id}) => id}
                    showsVerticalScrollIndicator={false}
                    numColumns={ 2 }
                    // header
                    ListHeaderComponent={(
                        <Text style={{
                            ...styles.tittle,
                            ...styles.globalMargin,
                            marginTop: (Platform.OS === 'ios') ? top + 60 : top + 80,
                        }}
                        >{ term }</Text>
                    )}
                    renderItem={({item}) =><PokemonCard pokemon={item} />}

                />
        </View>
    )
}

export default SearchScreen
