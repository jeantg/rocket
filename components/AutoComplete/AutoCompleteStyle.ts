import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  menu: {
    width: "100%",
    left: -2,
  },
  listItem: {
    backgroundColor: "#fff",
  },
});

export const Container = styled.View`
  display: flex;
  flex-direction: column;
`;
