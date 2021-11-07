import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #fff;
  height: 100%;
`;
export const Header = styled.SafeAreaView`
  width: 100%;
  z-index: 100;
  position: absolute;
  background-color: #fff;
  top: 120px;
`;
export const Appbar = styled.View`
  display: flex;
  width: 100%;
  padding-bottom: 10px;
  padding-top: 60px;
  background-color: #fff;
  position: absolute;

  z-index: 1;
`;
export const Logo = styled.Image`
  width: 150px;
  align-self: center;

  height: 50px;
`;
