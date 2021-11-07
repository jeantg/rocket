import styled from "styled-components/native";
import { StyleSheet } from "react-native";
export const Container = styled.View`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 20px;
`;

export const Logo = styled.Image`
  width: 100%;
  align-self: center;
  height: 100px;
`;
export const Text = styled.Text`
  font-size: 28px;
  text-align: center;
  color: #5c5c5c;
  margin-bottom: 10px;
`;
export const Description = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #5c5c5c;
  margin-bottom: 10px;
`;
export const FooterText = styled.Text`
  font-size: 15px;
  text-align: left;
  color: #5c5c5c;
`;
export const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    width: "90%",
  },
});
