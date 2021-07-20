import React from 'react';

import { 
    ActivityIndicator,
    FlatList, 
    Image,
    Text,
    View
} from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PokemonCard from '../components/PokemonCard';

import usePokemonPagnated from '../hooks/usePokemonPagnated';

import { styles } from '../theme/appTheme';


const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { simplePokemonList, loadPokemons } = usePokemonPagnated();

    return (
        <>
            <Image
                source={ require('../assets/pokebola.png') }
                style={styles.pokebolaBG}
            />
            <View style={{alignItems: 'center'}}>

                <FlatList
                    data={simplePokemonList}
                    keyExtractor={ ({id}) => id}
                    showsVerticalScrollIndicator={false}
                    numColumns={ 2 }
                    // header
                    ListHeaderComponent={(
                        <Text style={{
                            ...styles.tittle,
                            ...styles.globalMargin,
                            top: top + 20,
                            marginBottom: 30

                        }}
                        >Pokedex</Text>
                    )}
                    renderItem={({item}) =><PokemonCard pokemon={item} />}
                    
                    // infinite scroll
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}

                    ListFooterComponent={ 
                        <ActivityIndicator 
                            style={{height: 100}}
                            size={20}
                            color='grey'
                        /> 
                    }
                />
            </View>

            
            
        </>
    )
}

export default HomeScreen;
