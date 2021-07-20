import React, { useState, useEffect } from 'react';

import { StyleSheet, TextInput, View, StyleProp, ViewStyle } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import useDebounceValue from '../hooks/useDebounceValue';



interface Props {
    style?: StyleProp<ViewStyle>;
    onDebounce: (value: string) => void;
}

const SearchInput = ({style, onDebounce}: Props) => {

    const [textValue, setTextValue] = useState('')
    const debounceValue = useDebounceValue( textValue );


    useEffect(() => {
        onDebounce(debounceValue);
    }, [debounceValue])


    return (
        <View style={{
            ...styles.container,
            ...style as any
        }}>
            <View style={styles.texBackground}>
                <TextInput
                    placeholder='Search Pokemon'
                    style={styles.textInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />
                <Icon
                    name='search-outline'
                    size={30}
                    color='grey'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    texBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        top: 2
    }
});

export default SearchInput
