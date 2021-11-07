import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import { DefaultTheme, Provider } from "react-native-paper";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold_Italic,
} from "@expo-google-fonts/roboto";
import { MapProvider } from "./context/MapContext";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const isLoadingComplete = useCachedResources();

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold_Italic,
  });
  if (!isLoadingComplete || !fontsLoaded) {
    return null;
  } else {
    return (
      <MapProvider>
        <Provider theme={DefaultTheme}>
          <StatusBar backgroundColor="#fff" />
          <SafeAreaProvider>
            <NavigationContainer>
              <Navigation />
            </NavigationContainer>
            <StatusBar />
          </SafeAreaProvider>
        </Provider>
      </MapProvider>
    );
  }
}
