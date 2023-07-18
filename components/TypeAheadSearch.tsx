import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import makes from './makes';

const TypeAheadSearch = () => {
    const [searchText, setSearchText] = useState('');
    const [results, setResults] = useState<any>([]);


    useEffect(() => {
        const arr: any = [];
        let i = 0;
        makes.forEach(make => {
            arr.push({ id: i, name: make });
        })
        setResults(arr);
    }, [])

    useEffect(() => {
        // Make sure you have your API or search functionality set up properly
        // Here, we are assuming you have a searchAPI function that returns the matching results
        const fetchResults = async () => {
            if (searchText.length > 0) {
                /*
                const arr: any = [];
                let i = 0;
                makes.forEach(make => {
                    arr.push({ id: i, name: make });
                })
                setResults(arr);
                */
            } else {
                // setResults([]);
            }
        };

        fetchResults();
    }, [searchText]);

    return (
        <View>
            <TextInput
                value={searchText}
                onChangeText={setSearchText}
                placeholder="Type to search..."
            />

            <FlatList
                data={results}
                keyExtractor={item => item.id} // Replace with suitable key
                renderItem={({ item }) => <Text>{item.name}</Text>} // Replace with suitable rendering
            />
        </View>
    );
};

export default TypeAheadSearch;
