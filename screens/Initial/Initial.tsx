import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const Initial = () => {
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const user = JSON.parse((await AsyncStorage.getItem("@user")) as any);

      if (!user) {
        navigation.navigate("Splash" as any);
      } else {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: "Main" as any,
            },
          ],
        });
        navigation.navigate("Main" as any);
      }
    })();
  }, []);

  return <></>;
};
