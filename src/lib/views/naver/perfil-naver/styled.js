import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background-color: #fff;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const NaverImage = styled.Image`
  height: 288px;
  width: 100%;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
`;

export const NaverDescriptionContainer = styled.ScrollView`
  flex: 1;
  padding: 24px 16px 40px 16px;
  width: 100%;
`;

export const NaverName = styled.Text`
  color: #212121;
  font-family: Montserrat-Bold;
  font-size: 22px;
  margin-bottom: 4px;
`;

export const NaverJob = styled.Text`
  font-family: Montserrat-Regular;
  font-size: 16px;
  color: #212121;
  margin-bottom: 24px;
`;

export const NaverSubdescriptionContainer = styled.View`
  margin-bottom: 24px;
`;

export const NaverSubdescriptionTitle = styled.Text`
  color: #212121;
  font-family: Montserrat-SemiBold;
`;

export const NaverSubdescriptionValues = styled.Text`
  color: #212121;
  font-family: Montserrat-Regular;
`;

export const WrapperButtons = styled.View`
  align-items: center;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
  margin-top: 8px;
`;

export const ContainerButton = styled.TouchableOpacity`
  align-items: center;
  background-color: ${(props) => props.bgColor};
  border: ${props => props.brPixel} ${props => props.brSolid} ${(props) => props.bdColor};
  flex-direction: row;
  height: 40px;
  justify-content: space-between;
  padding: 0 36px;
  width: 156px;
`;

export const TextButton = styled.Text`
  color: ${(props) => props.color};
  font-family: Montserrat-Regular;
  font-size: 16px;
  text-align: center;
`;

export const IconButton = styled.Image`
  height: ${(props) => props.height ?? null};
  width: ${(props) => props.width ?? null};
`;
