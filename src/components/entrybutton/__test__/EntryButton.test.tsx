/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";

import EntryButton from "../EntryButton";

// it("should result in the entryButton being invisible", () => {
//   EntryButton
// });

it("renders correctly", () => {
  const entryButtonTree = renderer
    .create(<EntryButton handleClick={() => {}} isVisible type="AddButton" label="test" />)
    .toJSON();
  expect(entryButtonTree).toMatchSnapshot();
});

// function mockHandleClick() {
//   return true;
// }

// it("checks initial isVisible state", () => {

//   expect(isVisible).toBe(true);

// });

// it("checks if click is handled", () => {});
