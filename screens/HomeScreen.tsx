import { Image, View } from "react-native";
import { setDestination, setOrigin } from "../app/slices/navigationSlice";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import NavFavorites from "../components/NavFavorites";
import NavOptions from "../components/NavOptions";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tailwind from "tailwind-react-native-classnames";
import { useDispatch } from "react-redux";

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={tailwind`p-5`}>
        <Image
          style={{ width: 250, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://lemonsquad.com/images/layout/logo_dark_wide.png",
          }}
        />
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Get started"
          enablePoweredByContainer={false}
          minLength={2}
          fetchDetails={true}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details?.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          query={{
            key: 'AIzaSyAsSbQlGlR1hoyu6WLh1I6tyRJLl1SX8Fw',
            language: "en",
          }}
          styles={{
            container: {
              flex: 0,
            },
          }}
        />
        <NavOptions />
        <NavFavorites shouldSetOrigin />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
