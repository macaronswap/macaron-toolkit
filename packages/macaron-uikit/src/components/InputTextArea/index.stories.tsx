import React from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import Heading from "../Heading/Heading";
import InputTextArea from "./InputTextArea";

const Row = styled.div`
  display: flex;
  margin-bottom: 32px;

  & > textarea + textarea {
    margin-left: 16px;
  }
`;

export default {
  title: "Components/InputTextArea",
  component: InputTextArea,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return (
    <div>
      <>
        <Heading mb="16px">TextArea</Heading>
        <Row>
          <InputTextArea value="Value" />
          <InputTextArea placeholder="Placeholder..." />
          <InputTextArea value="Disabled" disabled />
          <InputTextArea value="Success" isSuccess />
          <InputTextArea value="Warning" isWarning />
        </Row>
      </>
    </div>
  );
};
