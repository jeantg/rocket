import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {
  Appbar,
  Divider,
  Card,
  Paragraph,
  Avatar,
  Button,
} from "react-native-paper";

import * as S from "./UserServicesDetailsStyle";

export const UserServiceDetails = () => {
  const navigation = useNavigation();

  const p = useRoute<any>();
  const service = p.params.service;
  const title = p.params.title;

  const _goBack = () => navigation.goBack();

  return (
    <>
      <Appbar.Header style={S.styles.header}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title={title} />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <S.Container>
        <S.ServiceAvatar source={service.coverImage} resizeMode="stretch" />
        <S.UserAvatarContent style={S.styles.userAvatar}>
          <S.UserAvatar source={service.uri} resizeMode="contain" />
        </S.UserAvatarContent>
        <S.ServiceContent>
          <S.StartContent>
            <S.Pricing>{service.pricing}</S.Pricing>
            <S.TextDescription>estimado por hora</S.TextDescription>
          </S.StartContent>
          <S.StartContent>
            <S.StartAvaliation>
              <Entypo name="star-outlined" size={15} color="black" />
              <S.StartCount>18</S.StartCount>
            </S.StartAvaliation>
            <S.TextDescription>avaliações</S.TextDescription>
          </S.StartContent>
        </S.ServiceContent>
        <Divider />
        <S.UserDescriptionContent>
          <S.TextContent>
            <AntDesign name="user" size={20} color="#a3a3a3" />
            <S.NameContent>
              <S.Text>{service.name}</S.Text>
              <Button
                mode="contained"
                style={{ backgroundColor: "#02d9fdff" }}
                onPress={() =>
                  navigation.navigate("Chat" as any, { title: service.name })
                }
              >
                Contratar
              </Button>
            </S.NameContent>
          </S.TextContent>
          <S.TextContent>
            <Entypo name="location-pin" size={20} color="#a3a3a3" />
            <S.Text>
              R. Ramiro Barcelos, 2350 - Santa Cecília, Porto Alegre - RS,
              90035-003
            </S.Text>
          </S.TextContent>
        </S.UserDescriptionContent>
        <Divider />
        <S.ContentAvaliationCards>
          <S.ContentTitle>
            <AntDesign name="caretdown" size={18} color="#a3a3a3" />
            <S.Title>{`O que os clientes dizem de ${service.name}`}</S.Title>
          </S.ContentTitle>
          <Divider />
          <Card>
            <Card.Title
              title="Fernando"
              left={() => (
                <Avatar.Image
                  size={40}
                  source={require("../../assets/fernando.jpg")}
                ></Avatar.Image>
              )}
            />
            <Card.Content>
              <Paragraph>Excelente profissional.</Paragraph>
            </Card.Content>
          </Card>
          <Divider />
        </S.ContentAvaliationCards>
        <Button
          mode="contained"
          style={S.styles.button}
          labelStyle={{ color: "#000" }}
          onPress={() =>
            navigation.navigate("Chat" as any, { title: service.name })
          }
        >
          Mensagem
        </Button>
      </S.Container>
    </>
  );
};
