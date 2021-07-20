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


const screenWidth = Dimensions.get('window').width;

const SearchScreen = () => {

    const {top} = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();

    if (isFetching) {
        return ( <Loading/> )
    }

    return (
        <View style={{
            flex: 1,
            marginHorizontal: 20
        }}>

            <SearchInput style={{
                position: 'absolute',
                zIndex: 999,
                width: screenWidth - 40,
                top: (Platform.OS === 'ios') ? top : top + 25,
            }}/>
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
                            marginTop: (Platform.OS === 'ios') ? top + 60 : top + 80,
                        }}
                        >Pokedex</Text>
                    )}
                    renderItem={({item}) =><PokemonCard pokemon={item} />}

                />
        </View>
    )
}

export default SearchScreen
