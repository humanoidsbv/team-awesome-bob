/* eslint-disable react/jsx-props-no-spreading */
import React, { ComponentProps } from "react";

import { Meta, Story } from "@storybook/react";

import EntryButton from "../components/entrybutton/EntryButton";

export default {
  title: "EntryButton",
  component: EntryButton,
  argTypes: {
    type: {
      options: ["Primary", "Secondary"],
      control: { type: "select" },
    },
    children: {
      control: { type: "input" },
    },
  },
} as Meta;

const Template: Story<ComponentProps<typeof EntryButton>> = (args) => <EntryButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  type: "Primary",
  label: "Test",
};

export const Secondary = Template.bind({});

Primary.args = {
  type: "Secondary",
  label: "Test",
};
