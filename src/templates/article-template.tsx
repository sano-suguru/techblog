import React from "react"
import BlogPost from "../components/blogpost"

const Article: React.FC = () => {
  return (
    <>
      {/* TODO: GraphQLから取得したデータを渡す */}
      {/* <BlogPost /> */}
      <ul className="postlink">
        <li className="prev">
          <a href="base-blogpost.html" rel="next">
            <i className="fas fa-chevron-left" />
            <span>前の記事</span>
          </a>
        </li>
        <li className="next">
          <a href="base-blogpost.html" rel="next">
            <span>次の記事</span>
            <i className="fas fa-chevron-right" />
          </a>
        </li>
      </ul>
    </>
  )
}

export default BlogPost
