import styled from "styled-components/native";
import { StyleSheet } from "react-native";
export const Container = styled.View`
  background-color: #fff;
  width: 150px;
  height: 100px;
`;
export const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 2,
  },
});
