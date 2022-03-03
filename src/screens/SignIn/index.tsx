import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { KeyboardAvoidingView, Platform } from "react-native";

import {
  Brand,
  Container,
  Content,
  ForgotPasswordButton,
  ForgotPasswordLabel,
  Title
} from "./styles";

import brandImg from '@assets/brand.png';
import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Content>
          <Brand source={brandImg} />

          <Title>Login</Title>

          <Input
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
          />

          <Input
            placeholder="Senha"
            type="secondary"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />

          <ForgotPasswordButton onPress={() => {}}>
            <ForgotPasswordLabel>
              Esqueci minha senha
            </ForgotPasswordLabel>
          </ForgotPasswordButton>

          <Button
            title="Entrar"
            type="secondary"
            onPress={() => {}}
            isLoading={false}
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  )
}