import { FormikContext } from "formik";
import { useContext } from "react";
import RNPickerSelect from "react-native-picker-select";
import { TextInput } from "react-native-paper";
import * as S from "./SelectStyle";
import React from "react";
import _ from "lodash";
type Options = {
  label: string;
  value: string;
};
type Props = {
  onChange?: (e: string) => void;
  options: Options[];
  name: string;
  label: string;
  placeholder: string;
};
export const Select = ({
  onChange,
  name,
  placeholder,
  label,
  options,
}: Props) => {
  const { setFieldValue, values } = useContext(FormikContext);
  return (
    <RNPickerSelect
      onValueChange={(value) => {
        setFieldValue(name, value);
        onChange && onChange(value);
      }}
      placeholder={{
        label: placeholder,
      }}
      items={options as any}
    >
      <TextInput
        placeholder="Selecione a área de atuação"
        label={label}
        mode="outlined"
        value={_.get(values, name)}
        style={S.styles.input}
      />
    </RNPickerSelect>
  );
};
