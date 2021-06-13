import * as React from 'react'

const Layout = ({ title, children }) => {
  return (
    <div className="py-10">
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            {title}
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</div>
      </main>
      <footer>
        © {new Date().getFullYear()}
        {` `}
        <a href="#">Marklopa</a>
      </footer>
    </div>
  )
}

export default Layout
