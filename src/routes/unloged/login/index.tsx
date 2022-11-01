import { useState } from "react";
import { ActivityIndicator, Button } from "react-native";

import { AuthUse } from "../../../context/auth";
import { ThemeUse } from "../../../context/theme";
import { LoginType } from "../../../types";
import {
  Container,
  Form,
  FormSection,
  InputForm,
  Logo,
  TextS,
} from "./indexStyled";

export const Login = ({ navigation }) => {
  const [login, setLogin] = useState<LoginType>({} as LoginType);

  const { LogIn, loading } = AuthUse();
  const { lightGreen } = ThemeUse();

  return (
    <Container>
      {/* <Logo source={require("../../../assets/devtocruz.png")} /> */}
      <Logo source={require("../../../assets/devtocruz.png")} />

      <Form>
        <FormSection>
          <TextS>Email</TextS>
          <InputForm
            value={login.email}
            autoCapitalize="none"
            onChangeText={(value: string) => {
              setLogin((prev) => {
                return { ...prev, email: value };
              });
            }}
          />
        </FormSection>

        <FormSection>
          <TextS>Senha</TextS>
          <InputForm
            onChangeText={(value: string) => {
              setLogin((prev) => {
                return { ...prev, password: value };
              });
            }}
            value={login.password}
            secureTextEntry
          />
        </FormSection>
      </Form>
      {loading ? (
        <ActivityIndicator size="large" color={lightGreen} />
      ) : (
        <Button
          onPress={() => LogIn(login.email, login.password)}
          title="Entrar"
          color={lightGreen}
        />
      )}
      <Button
        onPress={() => navigation.navigate("Create")}
        title="Criar conta"
        color="white"
      />
    </Container>
  );
};
