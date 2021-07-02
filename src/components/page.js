import * as React from 'react'
import Layout from './layout'

const Page = ({ children }) => {
  return (
    <Layout>
      <main>
        { children }
      </main>
    </Layout>
  )
}

export default Page