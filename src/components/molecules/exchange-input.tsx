import { TextInputProps, Image, Text, View } from "react-native";
import SelectDropdown, {
  SelectDropdownProps,
} from "react-native-select-dropdown";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "styled-tools";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ICurrency } from "../../types";
import { Fragment } from "react";

type Props = Pick<
  TextInputProps,
  "value" | "onChangeText" | "editable" | "onFocus" | "onBlur"
> &
  Pick<SelectDropdownProps, "onSelect">;

const buttonStyle = {
  width: 150,
};

const buttonTextStyle = {
  fontSize: 14,
};

const ExchangeInputWrapper = styled.View`
  border: solid #000 2px;
  flex-direction: row;
  font-size: ${theme("fontSize")};
`;

const ExchangeInputElement = styled.TextInput.attrs({
  keyboardType: "decimal-pad",
})`
  flex: 1;
  font-size: 20px;
  padding-left: ${theme("indentSmall")};
  padding-right: ${theme("indentSmall")};
`;

const RowChildContainer = styled.View`
  align-items: center;
  flex-direction: row;
  gap: ${theme("indentSmall")};
  padding: ${theme("indentSmall")};
`;
const RowChildImage = styled.Image.attrs({ resizeMode: "contain" })`
  width: 15px;
  height: 15px;
`;

const RowChild = (item: ICurrency) => (
  <RowChildContainer>
    <RowChildImage source={{ uri: item.image.small }} />
    <Text>{item.name}</Text>
  </RowChildContainer>
);

const ButtonChild = (currency?: ICurrency) => {
  return (
    <Fragment>
      {currency ? (
        <RowChildContainer>
          <RowChildImage source={{ uri: currency.image.small }} />
          <Text>{currency.name}</Text>
        </RowChildContainer>
      ) : (
        <RowChildContainer>
          <Text>Select option</Text>
        </RowChildContainer>
      )}
    </Fragment>
  );
};

export const ExchangeInput = ({ onSelect, ...props }: Props) => {
  const currencies = useSelector(
    (state: RootState) => state.echange.currencies
  );

  return (
    <ExchangeInputWrapper>
      <ExchangeInputElement {...props} />
      <SelectDropdown
        buttonStyle={buttonStyle}
        buttonTextStyle={buttonTextStyle}
        renderCustomizedButtonChild={ButtonChild}
        renderCustomizedRowChild={RowChild}
        defaultButtonText="Select currency"
        renderDropdownIcon={() => <FontAwesome name="toggle-down" />}
        data={currencies}
        onSelect={onSelect}
      />
    </ExchangeInputWrapper>
  );
};
