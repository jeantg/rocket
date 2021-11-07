import * as S from "./SignupStyle";
import React from "react";
import { Formik, FormikProps } from "formik";
import { TextField, Select } from "../../components";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
export const Signup = () => {
  const navigation = useNavigation();
  return (
    <Formik
      initialValues={{ name: "", actuatorBranch: "" }}
      onSubmit={() => navigation.navigate("Address" as any)}
    >
      {({ handleSubmit }: FormikProps<any>) => (
        <S.Container>
          <S.Form>
            <TextField name="name" placeholder="Nome" label="Nome" />
            <TextField name="email" placeholder="Nome" label="E-mail" />
            <TextField
              name="password"
              placeholder="Senha"
              label="Senha"
              secureTextEntry={true}
            />
            <TextField
              name="repassword"
              secureTextEntry={true}
              placeholder="Repita a Senha"
              label="Repita a Senha"
            />
            <TextField
              name="hourPricing"
              placeholder="Qual o seu valor hora pretentido"
              label="Valor hora"
            />
            <Select
              name="actuatorBranch"
              label="Área de atuação"
              placeholder="Selecione a área de atuação"
              options={[{ label: "Babá", value: "Baba" }]}
            />
          </S.Form>
          <S.Text fontSize={13}>
            *Você poderá editar essas informações mais tarde
          </S.Text>
          <Button
            onPress={handleSubmit as any}
            mode="contained"
            style={S.styles.button}
          >
            Salvar
          </Button>
        </S.Container>
      )}
    </Formik>
  );
};
