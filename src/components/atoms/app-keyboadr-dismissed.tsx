import { Keyboard, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";

export const AppKeyboardDismissedView = styled(TouchableWithoutFeedback).attrs({
  onPress: () => Keyboard.dismiss(),
})``;
