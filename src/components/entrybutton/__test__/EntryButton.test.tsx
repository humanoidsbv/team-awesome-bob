/* eslint-disable import/no-extraneous-dependencies */
// import { mount } from "enzyme";
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

// it("should update isVisible on click", () => {
//   const state = jest.fn(() => true);
//   const wrapper = mount(<EntryButton label="test" handleClick={state} />);
//   const handleClick = jest.spyOn(React, "useState");
//   handleClick.mockImplementation((isVisible) => [isVisible, setIsVisible]);
//   wrapper.simulate("click");
//   expect(state).toBeTruthy();
// });
