import { Link } from "gatsby"
import React from "react"
import {
  Button as SUButton,
  Grid as SUGrid,
  Header as SUHeader,
  Icon as SUIcon,
  Label as SULabel,
} from "semantic-ui-react"

export type Props = {
  siteTitle: string
  background: string
  repository: {
    owner: string
    name: string
  }
}

const Header: React.FC<Props> = ({ siteTitle, background, repository }) => (
  <SUHeader
    as="header"
    style={{
      background: background,
    }}
  >
    <SUGrid
      style={{
        margin: `0 auto`,
        maxWidth: `960px`,
      }}
    >
      <SUGrid.Column width={5}>
        <h1>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </SUGrid.Column>
      <SUGrid.Column floated="right" width={5}>
        <a
          href={`http://github.com/${repository.owner}/${repository.name}`}
          target="_blank"
          rel="noopener"
        >
          <SUButton as="div" labelPosition="right">
            <SUButton icon>
              <SUIcon color="black" name="github" size="large" />
            </SUButton>
            <SULabel
              basic
            >{`${repository.owner} / ${repository.name}`}</SULabel>
          </SUButton>
        </a>
      </SUGrid.Column>
    </SUGrid>
  </SUHeader>
)

export default Header
