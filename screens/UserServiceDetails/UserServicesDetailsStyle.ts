import { Dimensions, StyleSheet } from "react-native";
import styled from "styled-components/native";
export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#02d9fdff",
  },
  userAvatar: {
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  button: {
    position: "absolute",
    top: Dimensions.get("screen").height - 186,
    width: "100%",
    zIndex: 10,
    backgroundColor: "#02d9fdff",

    borderRadius: 0,
  },
});
export const Container = styled.View`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #fff;
`;
export const ServiceAvatar = styled.Image`
  width: 100%;
  height: 200px;
`;
export const UserAvatar = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 50px;
`;
export const UserAvatarContent = styled.View`
  width: 150px;
  height: 150px;
  background-color: #fff;
  border: 1px solid #02d9fdff;
  position: absolute;
  z-index: 10;
  border-radius: 75px;
  align-self: center;
  align-items: center;
  justify-content: center;
  top: 120px;
`;
export const UserDescriptionContent = styled.View`
  width: 100%;

  top: 10px;
  padding: 0 10px;
  padding-right: 15px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;
export const Text = styled.Text`
  font-size: 18px;
  margin-left: 5px;
  color: #4a4a4a;
  margin-right: 10px;
`;
export const TextContent = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 5px 0;
`;
export const ServiceContent = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px;
  padding-bottom: 30px;
  padding-top: 20px;
`;
export const StartContent = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StartCount = styled.Text`
  font-size: 18px;
  color: #000;
`;
export const StartAvaliation = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const Pricing = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;
export const TextDescription = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #a6a6a6;
`;
export const ContentAvaliationCards = styled.ScrollView``;
export const ContentTitle = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;
export const Title = styled.Text`
  margin-left: 10px;
  font-size: 20px;
  color: #000;
`;
export const NameContent = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding-right: 10px;
`;
