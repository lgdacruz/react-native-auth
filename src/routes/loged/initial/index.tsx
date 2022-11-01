import { ActivityIndicator, Button, Text } from "react-native";

import { AuthUse } from "../../../context/auth";
import { ThemeUse } from "../../../context/theme";
import { Container, Perfil, TextS } from "./indexStyled";

export const Initial = () => {
  const { LogOut, loading, userData } = AuthUse();
  const { lightGreen } = ThemeUse();
  return (
    <Container>
      <Perfil source={{ uri: userData.photo }} />
      <TextS>Nome: {userData.name}</TextS>
      <TextS>Email: {userData.email}</TextS>

      {loading ? (
        <ActivityIndicator size="large" color={lightGreen} />
      ) : (
        <Button title="Deslogar" onPress={() => LogOut()} />
      )}
    </Container>
  );
};
