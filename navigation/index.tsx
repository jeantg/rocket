import { Signup } from "../screens/Signup/Signup";
import { Main } from "../screens/Main/Main";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserServiceDetails } from "../screens/UserServiceDetails/UserServiceDetails";
import React from "react";
import { Initial } from "../screens/Initial/Initial";
import { Splash } from "../screens/Splash/Splash";
import { Address } from "../screens/Address/Address";
import { Chat } from "../screens/Chat/Chat";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Initial">
      <Stack.Screen
        name="Initial"
        component={Initial}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Address"
        component={Address}
        options={{ headerTitle: "Endereço" }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerTitle: "Inscreva-se" }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ServiceDetails"
        component={UserServiceDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default Navigation;
