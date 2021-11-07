import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  z-index: 2;
`;
export const CalloutContainer = styled.View`
  background-color: #fff;
  border-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 15px;
  display: flex;
  width: 150px;
  margin-left: 27px;
  flex-direction: column;
`;
export const CalloutText = styled.Text`
  color: #c7c7c7;
`;
export const Name = styled.Text`
  color: #000;
`;
export const StarContainer = styled.View`
  background-color: #fff;
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  align-items: center;
  left: 0;
  padding: 2px;
  top: 2px;

  right: 0;
`;
export const StarCount = styled.Text`
  color: #000;
  margin-left: 5px;
`;
