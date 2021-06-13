import * as React from 'react'
import { useEffect, useState } from 'react'
import { PageProps, graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
const gfm = require('remark-gfm')

type DataProps = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const sampleText = `
# Marklopa Example

## GFM Support
### Strikethrough

~one~ or ~~two~~ tildes.

### Table

| a | b  |  c |  d  |
| - | :- | -: | :-: |
| Fafufi | Fifofi  | Lalala |  1000  |
| Fafufi | Fifofi  | Lalala |  1000  |
| Fafufi | Fifofi  | Lalala |  1000  |

### Todo

* [ ] to do
* [x] done
`

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const [value, setValue] = useState('')

  useEffect (() => {
    loadSampleData()
    return () => {}
  }, [])

  const loadSampleData = () => {
    setValue(sampleText)
  }

  const onChange = event => {
    setValue(event.target.value)
  }

  return (
    <Layout title={siteTitle}>
      <textarea value={value} onChange={onChange} />
      <ReactMarkdown remarkPlugins={[gfm]} children={value} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
