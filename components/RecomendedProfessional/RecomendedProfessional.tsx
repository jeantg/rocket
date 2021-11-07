import React from "react";
import { Card, Paragraph, Avatar, Title } from "react-native-paper";

import * as S from "./RecomendedProfessionalStyle";
export const RecomendedProfessional = () => {
  return (
    <S.Container>
      <S.Title>Profissionais em alta</S.Title>
      <S.Content>
        <Card elevation={5} style={S.styles.card as any} mode="outlined">
          <Avatar.Image
            size={40}
            style={{ marginLeft: 10, marginTop: 10 }}
            source={require("../../assets/fernando.jpg")}
          />
          <Card.Content>
            <Title>Fernando</Title>
            <Paragraph>Eletricista predial.</Paragraph>
          </Card.Content>
        </Card>
        <Card elevation={5} style={S.styles.card as any} mode="outlined">
          <Avatar.Image
            size={40}
            style={{ marginLeft: 10, marginTop: 10 }}
            source={require("../../assets/rudi.jpg")}
          />
          <Card.Content>
            <Title>Rudi</Title>
            <Paragraph>Serviços gerais</Paragraph>
          </Card.Content>
        </Card>
        <Card elevation={5} style={S.styles.card as any} mode="outlined">
          <Avatar.Image
            size={40}
            style={{ marginLeft: 10, marginTop: 10 }}
            source={require("../../assets/sara.jpg")}
          />
          <Card.Content>
            <Title>Sará</Title>
            <Paragraph>Babá</Paragraph>
          </Card.Content>
        </Card>
      </S.Content>
    </S.Container>
  );
};
