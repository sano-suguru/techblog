import React from "react"
import {
  Card as SUCard,
  Grid as SUGrid,
  Image as SUImage,
  Label as SULabel,
} from "semantic-ui-react"

export type Props = {
  title: string
  eyecatch: string
  publishDate: string
  authorName: string
  authorIcon: string
}

const PostCard: React.FC<Props> = ({
  title,
  eyecatch,
  publishDate,
  authorName,
  authorIcon,
}) => {
  return (
    <SUGrid.Column>
      <SUCard>
        <SUImage src={eyecatch} wrapped ui={false} />
        <SUCard.Content>
          <SUCard.Header>{title}</SUCard.Header>
          <SUCard.Meta>
            <span className="date">{publishDate}</span>
          </SUCard.Meta>
        </SUCard.Content>
        <SUCard.Content>
          <SULabel
            as="a"
            content={authorName}
            image={{
              avatar: true,
              spaced: "right",
              src: authorIcon,
            }}
          />
        </SUCard.Content>
      </SUCard>
    </SUGrid.Column>
  )
}
export default PostCard
