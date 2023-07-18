import { TouchableOpacity, View } from "react-native";

import { HomeScreenProp } from "../components/NavOptions";
import { Icon } from "react-native-elements";
import Map from "../components/Map";
import MapScreenNavigation from "../components/MapScreenNavigation";
import React from "react";
import tailwind from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import RideOptionsCard from "../components/RideOptionsCard";

const MapScreen = () => {
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={tailwind`bg-gray-50 absolute top-8 left-4 z-50 p-3 rounded-full shadow-lg`}
      >
        <Icon name="menu" />
      </TouchableOpacity>
      <View style={tailwind`h-1/3`}>
        <Map />
      </View>
      <View style={tailwind`h-2/3`}>
        <MapScreenNavigation />
      </View>
    </View>
  );
};

export default MapScreen;
