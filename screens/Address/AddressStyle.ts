import styled from "styled-components/native";
import { StyleSheet } from "react-native";
export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;

  flex-direction: column;
`;
export const Form = styled.View`
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  padding-top: 20px;
`;
export const Text = styled.Text<{ fontSize?: number }>`
  font-size: ${({ fontSize }) => `${fontSize || 20}px`};
  font-family: "Roboto";
  margin: 5px 0;
  align-self: flex-start;
  margin-left: 20px;
  color: #5c5c5c;
`;

export const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    width: "90%",
    backgroundColor: "#02d9fdff",
  },
  select: {
    width: "100%",
  },
});
