import { FlatList, Text, TouchableOpacity, View } from "react-native";
import {
  selectOrigin,
  setDestination,
  setOrigin,
} from "../app/slices/navigationSlice";
import { useDispatch, useSelector } from "react-redux";

import { HomeScreenProp } from "./NavOptions";
import { Icon } from "react-native-elements";
import { Point } from "react-native-google-places-autocomplete";
import React from "react";
import tailwind from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const NavFavorites = ({ shouldSetOrigin }: { shouldSetOrigin?: boolean }) => {
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <FlatList
      data={favoritesData}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View
          style={[
            tailwind`bg-gray-200`,
            {
              height: 0.5,
            },
          ]}
        />
      )}
      renderItem={({ item: { name, icon, type, description } }) => (
        <TouchableOpacity
          style={tailwind`flex-row items-center py-5`}
          onPress={() => { }}
        >
          <Icon
            style={tailwind`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type={type}
            color="white"
            size={18}
          />
          <View>
            <Text style={tailwind`font-bold text-lg`}>{name}</Text>
            <Text style={tailwind`text-gray-500`}>{description}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

type FavoritesData = {
  id: string;
  name: string;
  icon: string;
  type: string;
  description: string;
}[];

const favoritesData: FavoritesData = [
  {
    id: "234",
    icon: "user",
    name: "Account",
    type: "font-awesome",
    description: "manage cars, payments and more",
  },
  {
    id: "567",
    icon: "history",
    type: "font-awesome",
    name: "History",
    description: "view inspection history",
  },
  {
    id: "568",
    icon: "comments",
    type: "font-awesome",
    name: "Support",
    description: "get help now",
  },
];

export default NavFavorites;
