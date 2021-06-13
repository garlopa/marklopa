import * as React from 'react'

const Layout = ({ title, children }) => {
  let header = <h1>{title}</h1>

  return (
    <div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
        {` `}
        <a href="#">Marklopa</a>
      </footer>
    </div>
  )
}

export default Layout
