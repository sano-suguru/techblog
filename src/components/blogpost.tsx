import React from "react"
import {
  Container as SUContainer,
  Divider as SUDivider,
  Header as SUHeader,
  Icon as SUIcon,
  Image as SUImage,
  Label as SULabel,
} from "semantic-ui-react"

type Category = {
  categoryName: string
  categorySlug: string
  id: string
}

export type Props = {
  mdHtml: string
  authorIcon: string
  authorName: string
  publishDate: string
  publishDateJP: string
  title: string
  categories: Category[]
  eyecatch: string
}

const BlogPost: React.FC<Props> = ({
  mdHtml,
  authorIcon,
  authorName,
  publishDate,
  publishDateJP,
  title,
  categories,
  eyecatch,
}) => {
  return (
    <SUContainer text as="article">
      <aside>
        <SULabel as="a" image size="big">
          <img src={authorIcon} />
          {`@${authorName}`}
        </SULabel>

        <time dateTime={publishDate}>
          <SUIcon name="pencil" />
          <span>{publishDateJP}</span>
        </time>
      </aside>

      <SUHeader as="h1" size="huge">
        {title}
      </SUHeader>

      <aside>
        {categories.map(c => (
          <SULabel as="a" tag className={c.categorySlug} key={c.id}>
            {c.categoryName}
          </SULabel>
        ))}
      </aside>
      <SUDivider hidden />
      <SUImage src={eyecatch} alt="アイキャッチ" fluid />
      <div dangerouslySetInnerHTML={{ __html: mdHtml }} />
    </SUContainer>
  )
}

export default BlogPost
