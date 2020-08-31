import styled from 'styled-components/native';

export const Wrapper = styled.View`
  align-items: center;
  background-color: #000000ab;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export const Container = styled.View`
  align-items: center;
  background-color: #fff;
  height: auto;
  padding: 22px;
  position: relative;
  width: 328px;
`;

export const ContainerHeader = styled.View`
  margin-bottom: 16px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Headline = styled.Text`
  color: #212121;
  font-weight: bold;
  font-size: 22px;
  left: 0;
`;

export const IconClose = styled.Image`
  height: 24px;
  width: 24px;
`;

export const IconCloseContainer = styled.TouchableOpacity``;

export const ContainerDescription = styled.View`
  align-self: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Description = styled.Text`
  text-align: center;
  font-size: 16px;
`;

export const WrapperButtons = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
`;

export const ContainerButton = styled.View`
  align-items: center;
  justify-content: center;
  margin: 0px 12px;
`;