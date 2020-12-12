import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const CityContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 12px;
`;

export const City = styled.Text`
  font-size: 25px;
  margin-bottom: -25px;
`;

export const Image = styled.Image`
  width: 17px;
  height: 17px;
  margin-bottom: -25px;
  margin-right: 5px;
`;
export const ImageButton = styled.Image`
  width: 26px;
  height: 26px;

`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 10;
  right: 0;
  border-radius: 50;
`;

export const Error = styled.Text`
  font-size: 35px;
  text-align: center;
  color: red;
`;
