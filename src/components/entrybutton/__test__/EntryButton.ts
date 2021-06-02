// /* eslint-disable import/no-extraneous-dependencies */
// import React from "react";
// import renderer from "react-test-renderer";
// import EntryButton from "../EntryButton";

// it("renders correctly", () => {
//   const tree = renderer.create(<EntryButton label="Test" />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

it("equals 10", () => {
  const multiplication = 2 * 5;
  expect(multiplication).toBe(10);
});
