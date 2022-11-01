import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
`;

export const TextS = styled.Text`
  color: white;
  font-size: 20px;
  width: 20%;
  font-weight: bold;
`;
export const InputForm = styled.TextInput`
  background: white;
  width: 70%;
  margin: 0 10px;
  padding: 0 5px;
  border-radius: 8px;
`;
export const Form = styled.View``;
export const FormSection = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin: 5px 0;
`;
