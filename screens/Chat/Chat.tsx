import { Feather } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { Appbar, Avatar } from "react-native-paper";
import * as S from "./ChatStyle";
import { GiftedChat } from "react-native-gifted-chat";
export const Chat = () => {
  const p = useRoute<any>();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 289,
        text: "Não esqueça de me avaliar, eu ganho pontos de fidelidade e descontos na rocket",
        createdAt: new Date().setMinutes(2),
        user: {
          _id: 2,
          name: "Sara",
          uri: "sara.jpg",
        },
      },
      {
        _id: 2569,
        text: "Só me contratar pelo aplicativo, dai vai marcar na agenda quando chegar 10min antes vai enviar uma notificação.",
        createdAt: new Date().setMinutes(2),
        user: {
          _id: 2,
          name: "Sara",
          uri: "sara.jpg",
        },
      },
      {
        _id: 45,
        text: "Ok fechado!",
        createdAt: new Date().setMinutes(1),
        user: {
          _id: 1,
          uri: "fernando.jpg",
          name: "Fernando",
        },
      },
      {
        _id: 256,
        text: "Sim estou disponível",
        createdAt: new Date().setMinutes(1),
        user: {
          _id: 2,
          name: "Sara",
          uri: "sara.jpg",
        },
      },
      {
        _id: 55,
        text: "Está disponível para hoje das 20h às 22h?",
        createdAt: new Date().setMinutes(1),
        user: {
          _id: 1,
          uri: "fernando.jpg",
          name: "Fernando",
        },
      },
      {
        _id: 2568,
        text: "Olá fernando",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Sara",
          uri: "sara.jpg",
        },
      },
      {
        _id: 15,
        text: "Olá sará",
        createdAt: new Date(),
        user: {
          _id: 1,
          uri: "fernando.jpg",
          name: "Fernando",
        },
      },
    ]);
  }, []);
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);
  const title = p.params.title;
  return (
    <>
      <S.Container>
        <Appbar.Header>
          <Appbar.BackAction />
          <Appbar.Content title={"Converse com " + title} />
          <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
      </S.Container>
      <GiftedChat
        placeholder="Enviar uma mensagem"
        messages={messages}
        onSend={(messages) => onSend(messages)}
        renderAvatar={() => (
          <Avatar.Image size={40} source={require("../../assets/sara.jpg")} />
        )}
        renderSend={() => {
          return (
            <Feather
              name="send"
              size={24}
              color="#b8b8b8"
              style={{ marginBottom: 8, marginRight: 5 }}
            />
          );
        }}
        user={{
          _id: 1,
        }}
      />
    </>
  );
};
