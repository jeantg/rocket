import styled from "styled-components/native";
import { StyleSheet } from "react-native";
export const Container = styled.View`
  flex-direction: column;
  display: flex;
  position: absolute;
  background-color: #fff;
  padding-top: 20px;
  z-index: 10;
  top: 166px;
`;
export const Content = styled.ScrollView.attrs({ horizontal: true })``;
export const styles = StyleSheet.create({
  card: {
    margin: 10,
    width: 150,
    borderRadius: 20,
    paddingBottom: 5,
    borderColor: "#02d9fdff",
  },
});
export const Title = styled.Text`
  margin-left: 10px;
  font-size: 20px;
  color: #000;
`;
