import React from 'react';
import { View, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tailwind from 'tailwind-react-native-classnames';
import TypeAheadSearch from './TypeAheadSearch';

const MyForm = () => {
    return (
        <ScrollView nestedScrollEnabled={true}>
            <View style={tailwind`w-full max-w-lg px-3`}>
                <View style={tailwind`flex-row -mx-3 mb-6`}>
                    <View style={tailwind`w-1/2 px-3 mb-2 `}>
                        <Text style={tailwind` uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}>Year</Text>
                        <TextInput
                            style={tailwind` w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  `}
                            placeholder="e.g. 2009"
                        />
                    </View>
                    <View style={tailwind`w-1/2 px-3`}>
                        <Text style={tailwind` uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}>Make</Text>
                        <TextInput
                            style={tailwind` w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  `}
                            placeholder="e.g. Ford"
                        />
                    </View>
                </View>
                <View style={tailwind`flex-row -mx-3 mb-2`}>
                    <View style={tailwind`w-full px-3 mb-6 `}>
                        <Text style={tailwind` uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}>Model</Text>
                        <TextInput
                            style={tailwind` w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  `}
                            placeholder="e.g. Fusion"
                        />
                    </View>
                </View>
            </View>
        </ScrollView>

    );
};

export default MyForm;
