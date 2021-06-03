import React from "react";
import renderer from "react-test-renderer";

import EntryButton from "../EntryButton";

it("renders correctly", () => {
  const entryButtonTree = renderer
    .create(<EntryButton handleClick={() => {}} isVisible type="AddButton" label="test" />)
    .toJSON();
  expect(entryButtonTree).toMatchSnapshot();
});
