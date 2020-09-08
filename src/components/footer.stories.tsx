import "semantic-ui-css/semantic.min.css"

import React from "react"

import Footer, { Props } from "./footer"

export default {
  title: "Tech Blog/Footer",
}

const Template = (
  args: JSX.IntrinsicAttributes & Props & { children?: React.ReactNode }
) => <Footer {...args} />

const args: JSX.IntrinsicAttributes & Props & { children?: React.ReactNode } = {
  background: "linear-gradient(0.25turn, #ff8c00, #ffba55)",
  repository: {
    owner: "sano-suguru",
    name: "techblog",
  },
}

const argTypes: { [key in keyof Props]: { control: {} } } = {
  background: { control: "text" },
  repository: { control: "object" },
}

export const Sample = Template.bind({})
Sample.args = args
Sample.argTypes = argTypes
