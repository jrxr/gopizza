import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import brandImg from "../../assets/brand.png";

import { Button } from "@components/Button";
import { Input } from "@components/Input";

import {
  Container,
  Content,
  Title,
  Brand,
  ForgotPassword,
  ForgotPasswordLabel,
} from "./styles";

export function SignIn() {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Content>
          <Brand source={brandImg} />
          <Title>Login</Title>
          <Input
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <Input placeholder="Senha" type="secondary" secureTextEntry />Î
          <ForgotPassword>
            <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
          </ForgotPassword>
          <Button title="Entrar" type="secondary" />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
