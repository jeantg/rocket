import { Searchbar, List } from "react-native-paper";
import React, { useState } from "react";
import * as S from "./AutoCompleteStyle";
import { useMap } from "../../context/MapContext";
import { servicesValues } from "../../constants/ServicesValues";

type Option = { label: string; value: string };
type Props = {
  options: Option[];
  value: string;
  onChange: (t: string) => void;
};
export const AutoComplete = ({
  options,
  value,
  onChange,
  ...rest
}: Props & any) => {
  const [visible, setVisible] = React.useState(false);
  const [text, setText] = useState(value);
  const { setServices, setIsSearching } = useMap();
  function handleChange(t: string) {
    setIsSearching(!!t ? true : false);
    setText(t);
    setVisible(!!t);
    onChange && onChange(t);
  }
  function filterOptions() {
    return options.filter((item: Option) =>
      item.label.toLowerCase().includes(text?.toLowerCase())
    );
  }
  function handleFilterServices(t: string) {
    setServices([]);
    const services = servicesValues.filter((item) =>
      item.type?.toLowerCase().includes(t?.toLowerCase())
    );

    setServices(services);
    setVisible(false);
  }
  return (
    <S.Container>
      <Searchbar
        value={text}
        {...(rest as any)}
        onChangeText={handleChange}
        onC
      />
      {visible &&
        filterOptions().map((option: Option) => (
          <List.Item
            key={option.label}
            title={option.label}
            onPress={() => {
              setText(option.label);
              handleFilterServices(option.label);
            }}
            style={S.styles.listItem}
          />
        ))}
    </S.Container>
  );
};
