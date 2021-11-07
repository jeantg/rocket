import React from "react";
import { Map, AutoComplete, RecomendedProfessional } from "../../components";
import { useMap } from "../../context/MapContext";
import * as S from "./MainStyle";

export const Main = () => {
  const { isSearching } = useMap();
  return (
    <S.Container>
      <S.Appbar>
        <S.Logo
          resizeMode="contain"
          source={require("../../assets/rocketLogo.png")}
        />
      </S.Appbar>
      <S.Header>
        <AutoComplete
          options={[
            { label: "Babá", value: "Baba" },
            { label: "Serviços Gerais", value: "Serviços Gerais" },
            { label: "Eletricista predial", value: "Eletricista" },
            { label: "Eletricista residencial", value: "Eletricista" },
          ]}
          value=""
          placeholder="Busque um serviço"
        />
      </S.Header>

      <Map />

      {!isSearching && <RecomendedProfessional />}
    </S.Container>
  );
};
