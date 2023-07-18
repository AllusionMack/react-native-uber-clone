import MapView from "react-native-maps";
import React, { useEffect, useRef, useState } from "react";
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInfo,
} from "../app/slices/navigationSlice";
import { useDispatch, useSelector } from "react-redux";

import MapViewDirections from "react-native-maps-directions";
import tailwind from "tailwind-react-native-classnames";
import * as Location from 'expo-location';



const Map = () => {
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef<MapView>(null);
  const [userLocation, setUserLocation] = useState<any>(null);

  const getCurrentLocation = async () => {
    try {
      // Ask for permission to access location
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      // Get the location data
      let location = await Location.getCurrentPositionAsync({});
      setUserLocation(location);
      console.log('Current location:', location.coords.latitude, location.coords.longitude);
    } catch (error) {
      console.error('An error occurred while trying to get the location:', error);
    }
  }

  useEffect(() => {
    getCurrentLocation();
    /*
    if (!origin || !destination) return;

    mapRef.current?.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
    */
  }, []);

  useEffect(() => {
    //if (!origin || !destination) return;

    /*
    const getTravelTime = async () => {
      const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=AIzaSyAsSbQlGlR1hoyu6WLh1I6tyRJLl1SX8Fw`;
      const response = await fetch(url);
      const data = await response.json();
      dispatch(setTravelTimeInfo(data.rows[0].elements[0]));
    };
    */

    // getTravelTime();

    if (userLocation) {
      setTimeout(() => {
        mapRef.current?.animateToRegion({
          latitude: userLocation?.coords.latitude,
          longitude: userLocation?.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }, 3000);
      }, 1000);
    }
  }, [userLocation]);

  return (
    <MapView
      ref={mapRef}
      initialRegion={{
        latitude: userLocation?.coords.latitude || 36.7783,
        longitude: userLocation?.coords.longitude || -119.4179,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      mapType="mutedStandard"
      style={tailwind`flex-1`}
    >
    </MapView>
  );
};

export default Map;
