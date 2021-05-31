/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React, { ComponentProps } from "react";

import { Meta, Story } from "@storybook/react";

import EntryButton from "../components/entrybutton/EntryButton";

export default {
  title: "EntryButton",
  component: EntryButton,
  argTypes: {
    type: {
      options: ["Add", "Cancel"],
      control: { type: "select" },
    },
    width: {
      control: { type: "range", min: 100, max: 500 },
    },
  },
} as Meta;

const Template: Story<ComponentProps<typeof EntryButton>> = (args) => <EntryButton {...args} />;

export const Add = Template.bind({});

Add.args = {
  type: "Add",
  label: "Test",
};

export const Cancel = Template.bind({});

Cancel.args = {
  type: "Cancel",
  label: "Test",
};
