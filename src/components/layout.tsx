import * as React from 'react'

const Layout = ({ title, children }) => {
  return (
    <div className="py-10">
      <header>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              {title}
            </h1>
            <p className="text-sm font-medium text-gray-500">
              You can type in the left box using markdown which will update in real time in the right panel
            </p>
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</div>
      </main>
      <footer>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
          © {new Date().getFullYear()}
          {` `}
          <a href="#">Marklopa</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
