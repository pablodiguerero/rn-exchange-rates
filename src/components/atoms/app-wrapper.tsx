import styled from "styled-components/native";
import { theme } from "styled-tools";

export const AppSafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: ${theme('indent')};
  background-color: ${theme("bgColor")};
  padding-left: ${theme('indentInnerLeft')};
  padding-right: ${theme('indentInnerRight')};
`;
