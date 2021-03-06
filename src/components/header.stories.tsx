import "semantic-ui-css/semantic.min.css"

import React from "react"

import Header, { Props } from "./header"

export default {
  title: "Tech Blog/Header",
}

const Template = (
  args: JSX.IntrinsicAttributes & Props & { children?: React.ReactNode }
) => <Header {...args} />

const args: JSX.IntrinsicAttributes & Props & { children?: React.ReactNode } = {
  siteTitle: "日々是開発",
  background: "linear-gradient(0.25turn, #ff8c00, #ffba55)",
  repository: {
    owner: "sano-suguru",
    name: "techblog",
  },
}

const argTypes: { [key in keyof Props]: { control: {} } } = {
  siteTitle: { control: "text" },
  background: { control: "text" },
  repository: { control: "object" },
}

export const Sample = Template.bind({})
Sample.args = args
Sample.argTypes = argTypes
