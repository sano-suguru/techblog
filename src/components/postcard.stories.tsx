import "semantic-ui-css/semantic.min.css"

import React from "react"

import PostCard, { Props } from "./postcard"

export default {
  title: "Tech Blog/PostCard",
}

const Template = (
  args: JSX.IntrinsicAttributes & Props & { children?: React.ReactNode }
) => <PostCard {...args} />

const args: JSX.IntrinsicAttributes & Props & { children?: React.ReactNode } = {
  title: "ReactのUIコンポーネント20種類を比較してみた",
  eyecatch:
    "https://cdn.pixabay.com/photo/2019/01/30/20/46/build-3965373_1280.jpg",
  publishDate: "2020-08-11",
  authorIcon: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
  authorName: "Nossa",
}

const argTypes: { [key in keyof Props]: { control: {} } } = {
  title: { control: "text" },
  eyecatch: { control: "text" },
  publishDate: { control: "text" },
  authorName: { control: "text" },
  authorIcon: { control: "text" },
}

export const Sample = Template.bind({})
Sample.args = args
Sample.argTypes = argTypes
