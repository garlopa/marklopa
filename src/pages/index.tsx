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

## Code Example
\`\`\`
npm install
\`\`\`

## Emphasis

**This is bold text**

*This is italic text*

## Blockquotes

> This is a blockquote

## Lists

Unordered

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

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

  useEffect(() => {
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
      <div className="grid grid-cols-2 divide-x divide-gray-300 py-8">
        <div className="w-auto h-full p-2">
          <textarea
            className="w-full h-full px-3 py-2 text-gray-700 border rounded-lg"
            value={value}
            onChange={onChange}
          />
        </div>
        <div className="w-auto px-6">
          <article className="w-full prose">
            <ReactMarkdown remarkPlugins={[gfm]} children={value} />
          </article>
        </div>
      </div>
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
