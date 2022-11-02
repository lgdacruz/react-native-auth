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
  font-size: 20px;
  width: 20%;
  font-weight: bold;
  background: lightgreen;
  padding: 0 5px;
  height: 100%;
`;
export const InputForm = styled.TextInput`
  font-size: 16px;
  background: white;
  width: 70%;
  height: 100%;
  padding: 0 5px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const Form = styled.View``;
export const FormSection = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 40px;
  margin: 5px 0;
`;
interface button {
  margin?: number;
  windth?: number;
  color?: string;
}
export const ButtonD = styled.Pressable<button>`
  background: ${(props) => (props.color ? props.color : "lightgreen")};
  margin: ${(props) => (props.margin ? `${props.margin}px` : "0px")};
  width: ${(props) => (props.windth ? `${props.windth}px` : "100px")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 5px;
`;
export const TextButton = styled.Text<button>`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : "lightgreen")};
`;
