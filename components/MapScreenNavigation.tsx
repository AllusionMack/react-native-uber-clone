import React from "react";
import RideOptionsCard from "./RideOptionsCard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManualOrScanCard from "./ManualOrScanCard";
import EnterManualCard from "./EnterManualCard";

export type StackList = {
  NavigateCard: undefined;
  RideOptionsCard: undefined;
  ManualOrScanCard: undefined;
  EnterManualCard: undefined;
};

const Stack = createNativeStackNavigator<StackList>();

const MapScreenNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="RideOptionsCard">
      {/* <Stack.Screen
        name="HomeScreen"
        component={}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name="RideOptionsCard"
        component={RideOptionsCard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ManualOrScanCard"
        component={ManualOrScanCard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EnterManualCard"
        component={EnterManualCard}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MapScreenNavigation;
