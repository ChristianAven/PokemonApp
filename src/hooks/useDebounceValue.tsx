import { useEffect } from 'react';
import { useState } from 'react';


const useDebounceValue = (input: string = '', time: number = 500) => {

    const [debaunceValue, setDebaunceValue] = useState(input);
    
    useEffect(() => {
        
        const timeout = setTimeout(() => {
            setDebaunceValue( input );    
        }, time);

        return () => {
            clearTimeout( timeout );
        }

    }, [input])


    return debaunceValue;
}

export default useDebounceValue
