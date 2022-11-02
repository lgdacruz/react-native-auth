import { useState } from "react";
import { ActivityIndicator } from "react-native";

import { AuthUse } from "../../../context/auth";
import { ThemeUse } from "../../../context/theme";
import { LoginType } from "../../../types";
import {
  ButtonD,
  Container,
  Form,
  FormSection,
  InputForm,
  Logo,
  TextButton,
  TextS,
} from "./indexStyled";

export const Login = ({ navigation }) => {
  const [form, setForm] = useState<LoginType>({} as LoginType);

  const { LogIn, loading } = AuthUse();
  const { lightGreen } = ThemeUse();

  return (
    <Container>
      <Logo source={require("../../../assets/devtocruz.png")} />

      <Form>
        <FormSection>
          <TextS>Email</TextS>
          <InputForm
            value={form.email}
            autoCapitalize="none"
            onChangeText={(value: string) => {
              setForm((prev) => {
                return { ...prev, email: value };
              });
            }}
          />
        </FormSection>

        <FormSection>
          <TextS>Senha</TextS>
          <InputForm
            onChangeText={(value: string) => {
              setForm((prev) => {
                return { ...prev, password: value };
              });
            }}
            value={form.password}
            secureTextEntry
          />
        </FormSection>
      </Form>
      {loading ? (
        <ActivityIndicator size="large" color={lightGreen} />
      ) : (
        <ButtonD onPress={() => LogIn(form?.email, form?.password)} margin={10}>
          <TextButton color="black">Entrar</TextButton>
        </ButtonD>
      )}
      <ButtonD
        onPress={() => navigation.navigate("Create")}
        color="transparent"
        margin={40}
        windth={200}
      >
        <TextButton>Criar conta</TextButton>
      </ButtonD>
    </Container>
  );
};
