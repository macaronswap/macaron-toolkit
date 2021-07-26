import styled, { DefaultTheme } from "styled-components";
import { InputTextAreaProps } from "./types";

interface StyledInputTextAreaProps extends InputTextAreaProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success
 */
const getBoxShadow = ({ isSuccess = false, isWarning = false, theme }: StyledInputTextAreaProps) => {
  if (isWarning) {
    return theme.shadows.warning;
  }

  if (isSuccess) {
    return theme.shadows.success;
  }

  return theme.shadows.inset;
};

const InputTextArea = styled.textarea<InputTextAreaProps>`
  background-color: ${({ theme }) => theme.colors.input};
  border: 0;
  border-radius: 6px;
  box-shadow: ${getBoxShadow};
  color: ${({ theme }) => theme.colors.text};
  display: block;
  font-size: 16px;
  outline: 0;
  padding: 0 16px;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.backgroundDisabled};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.textDisabled};
    cursor: not-allowed;
  }

  &:focus:not(:disabled) {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`;

InputTextArea.defaultProps = {
  isSuccess: false,
  isWarning: false,
};

export default InputTextArea;
