import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Text } from "react-native";

import { AuthUse } from "../context/auth";
import { Container } from "./indexStyled";
import { Loged } from "./loged";
import { Unloged } from "./unloged";

export default function Root() {
  const { userData, globalLoading } = AuthUse();

  if (globalLoading)
    return (
      <Container>
        <Text>App carregando...</Text>
      </Container>
    );
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      {userData ? <Loged /> : <Unloged />}
    </NavigationContainer>
  );
}
