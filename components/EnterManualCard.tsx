import {
    FlatList,
    Image,
    Platform,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";

import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { selectTravelTimeInfo } from "../app/slices/navigationSlice";
import tailwind from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import MyForm from "./MyForm";

const EnterManualCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState<RidesData[0] | null>(null);
    const travelTimeInformation = useSelector(selectTravelTimeInfo);

    return (
        <SafeAreaView style={tailwind`bg-white flex-1`}>
            <View style={tailwind``}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={tailwind`absolute top-1 left-0 px-5 rounded-full`}
                >
                    <Icon
                        style={{ display: 'none' }}
                        name={Platform.OS === "ios" ? "ios-chevron-back" : "md-arrow-back"}
                        type="ionicon"
                    />
                </TouchableOpacity>
                <Text style={tailwind`text-center mb-5 text-lg`}>
                    Fill out Vehicle Information
                </Text>
            </View>
            <MyForm />
            <View style={tailwind`mt-auto border-t border-gray-200`}>
                <TouchableOpacity
                    disabled={!selected}
                    style={tailwind.style(
                        `bg-black py-3 m-3`,
                        !selected && "bg-gray-200"
                    )}
                    onPress={() => {

                    }}
                >
                    <Text style={tailwind`text-center text-white text-lg`}>
                        Choose {selected?.title}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

type RidesData = {
    id: string;
    title: string;
    icon: string;
    type: string;
    description: string;
}[];

const ridesData: RidesData = [
    {
        id: "234",
        icon: "barcode",
        title: "Scan",
        type: "font-awesome",
        description: "scan the VIN on your vehicle",
    },
    {
        id: "567",
        icon: "keyboard-o",
        type: "font-awesome",
        title: "Manual",
        description: "type in all vehicle information",
    }
];

const SURGE_CHARGE_RATE = 1.5;

export default EnterManualCard;
