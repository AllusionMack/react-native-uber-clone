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
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackList } from "./MapScreenNavigation";

const RideOptionsCard = () => {
  const navigation = useNavigation<NavigateCardProp>();
  const [selected, setSelected] = useState<RidesData[0] | null>(null);
  const travelTimeInformation = useSelector(selectTravelTimeInfo);


  const getSource = (title: string) => {
    if (title === 'Standard') {
      return require('../assets/car-trans.png');
    } else if (title === 'Commercial') {
      return require('../assets/commercial-trans.png');
    } else if (title === 'Motorcycle') {
      return require('../assets/motor-trans.png');
    } else if (title === 'Recreational') {
      return require('../assets/rv-trans.png');
    }
  };

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
          Select a Vehicle Class
        </Text>
      </View>
      <FlatList
        data={ridesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image, width, height, margin }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tailwind.style(
              `flex-row justify-between items-center px-6`,
              id === selected?.id && "bg-gray-200"
            )}
          >
            <Image
              style={{
                width: width,
                height: height,
                marginTop: margin,
                marginBottom: margin,
                resizeMode: "center",
              }}
              source={getSource(title)}
            />
            <View style={tailwind`-ml-8`}>
              <Text style={tailwind`text-lg font-bold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration.text}</Text>
            </View>
            <Text style={tailwind`text-lg`}></Text>
          </TouchableOpacity>
        )}
      />
      <View style={tailwind`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          disabled={!selected}
          style={tailwind.style(
            `bg-black py-3 m-3`,
            !selected && "bg-gray-200"
          )}
          onPress={() => navigation.navigate("ManualOrScanCard")}
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
  multiplier: number;
  image: any;
  width: number;
  height: number;
  margin: number;
}[];

const ridesData: RidesData = [
  {
    id: "Uber-X-123",
    title: "Standard",
    multiplier: 1,
    image: require('../assets/car-trans.png'),
    width: 50,
    height: 100,
    margin: 0,
  },
  {
    id: "Uber-XL-456",
    title: "Commercial",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
    width: 50,
    height: 100,
    margin: 0,
  },
  {
    id: "Uber-LUX-789",
    title: "Motorcycle",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
    width: 50,
    height: 100,
    margin: 0,
  },
  {
    id: "rv-123",
    title: "Recreational",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
    width: 50,
    height: 100,
    margin: 10,
  },
];

const SURGE_CHARGE_RATE = 1.5;

type NavigateCardProp = NativeStackNavigationProp<StackList, "RideOptionsCard">;

export default RideOptionsCard;
