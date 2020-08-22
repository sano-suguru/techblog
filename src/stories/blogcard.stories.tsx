import React from 'react';
import "semantic-ui-css/semantic.min.css"

import BlogCard from '../components/blogcard'

export default {
  title: "Tech Blog/BlogCard",
}
export const exampleStory = () => (
  <BlogCard
    title="ReactのUIコンポーネント20種類をを比較してみた"
    eyecatch="https://cdn.pixabay.com/photo/2019/01/30/20/46/build-3965373_1280.jpg"
    publishDate="2020-08-11"
    authorIcon="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
    authorName="taskeknight" />
)