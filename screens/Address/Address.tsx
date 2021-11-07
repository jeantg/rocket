import * as S from "./AddressStyle";
import React from "react";
import { Formik, FormikProps } from "formik";
import { TextField } from "../../components";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
export const Address = () => {
  const navigation = useNavigation();
  return (
    <Formik
      initialValues={{ zipcode: "" }}
      onSubmit={async (values) => {
        await AsyncStorage.setItem("@user", JSON.stringify(values));
        navigation.reset({
          index: 0,
          routes: [
            {
              name: "Main" as any,
            },
          ],
        });
        navigation.navigate("Main" as any);
      }}
    >
      {({ handleSubmit }: FormikProps<any>) => (
        <S.Container>
          <S.Form>
            <TextField name="zipcode" placeholder="Cep" label="Cep" />
            <TextField name="city" placeholder="Cidade" label="Cidade" />
            <TextField name="state" placeholder="Estado" label="Estado" />
            <TextField name="district" placeholder="Bairro" label="Bairro" />
            <TextField name="number" placeholder="Número" label="Número" />
            <TextField
              name="complement"
              placeholder="Complemento"
              label="Complemento"
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
