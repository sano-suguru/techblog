import React from "react"
import { Grid as SUGrid } from "semantic-ui-react"

export type Props = {
  background: string
  repository: {
    owner: string
    name: string
  }
}

const Footer: React.FC<Props> = ({ background, repository }) => (
  <footer
    style={{
      background: background,
      width: "100%",
      position: "absolute",
      bottom: 0,
    }}
  >
    <SUGrid>
      <SUGrid.Column
        textAlign="center"
        style={{
          color: "#FAFAFA",
          fontSize: "16px",
        }}
      >
        <p>&copy; 2020, Built with Gatsby</p>
        <p>
          createdBy&nbsp;
          <b>
            <a
              target="_blank"
              rel="noopener"
              href={`https://github.com/${repository.owner}`}
            >
              @{repository.owner}
            </a>
          </b>
        </p>
        <p>
          source code is&nbsp;
          <b>
            <a
              target="_blank"
              rel="noopener"
              href={`http://github.com/${repository.owner}/${repository.name}`}
            >
              here
            </a>
          </b>
        </p>
        <p>This site uses Google Analytics.</p>
      </SUGrid.Column>
    </SUGrid>
  </footer>
)

export default Footer
