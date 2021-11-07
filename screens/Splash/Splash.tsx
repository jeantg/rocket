import React from "react";
import * as S from "./SplashStyle";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
export const Splash = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.Logo
        resizeMode="contain"
        source={require("../../assets/rocketLogo.png")}
      />
      <S.Text>Seja bem-vindo à Rocket</S.Text>
      <S.Description>
        A maior plataforma de profissionais do Brasil.
      </S.Description>
      <S.FooterText>
        A melhor forma de encontrar e contratar profissionais.
      </S.FooterText>
      <Button
        mode="contained"
        color="#02d9fdff"
        labelStyle={{ color: "#fff" }}
        onPress={() => navigation.navigate("Signup" as any)}
        style={S.styles.button}
      >
        Continuar
      </Button>
    </S.Container>
  );
};
