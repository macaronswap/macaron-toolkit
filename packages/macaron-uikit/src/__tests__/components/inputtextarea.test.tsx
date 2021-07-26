import React from "react";
import { renderWithTheme } from "../../testHelpers";
import InputTextArea from "../../components/InputTextArea/InputTextArea";

const handleChange = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<InputTextArea value="inputTextArea" onChange={handleChange} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <textarea
        class="sc-bdfBwQ dtjLGO"
        value="inputTextArea"
      />
    </DocumentFragment>
  `);
});
