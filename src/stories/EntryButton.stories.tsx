/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React, { ComponentProps } from "react";

import { Meta, Story } from "@storybook/react";

import EntryButton from "../components/entrybutton/EntryButton";

export default {
  title: "EntryButtonButton",
  component: EntryButton,
  argTypes: {
    type: {
      options: ["AddButton", "CancelButton"],
      control: { type: "select" },
    },
    width: {
      control: { type: "range", min: 100, max: 500 },
    },
  },
} as Meta;

const Template: Story<ComponentProps<typeof EntryButton>> = (args) => <EntryButton {...args} />;

export const AddButton = Template.bind({});

AddButton.args = {
  type: "AddButton",
  label: "Test",
};

export const CancelButton = Template.bind({});

CancelButton.args = {
  type: "CancelButton",
  label: "Test",
};
