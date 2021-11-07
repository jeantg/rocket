import { FormikContext } from "formik";
import { TextInput } from "react-native-paper";
import React, { useContext } from "react";
import * as S from "./TextFieldStyle";
type Props = {
  name: string;
  label?: string;
  placeholder?: string;
};
export const TextField = ({ ...rest }: Props & any) => {
  const { setFieldValue } = useContext(FormikContext);
  return (
    <TextInput
      {...rest}
      style={S.styles.input}
      mode="outlined"
      onChangeText={(text) => setFieldValue(rest.name, text)}
    />
  );
};
