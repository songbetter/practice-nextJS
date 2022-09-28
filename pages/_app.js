import Head from 'next/head'
import Layout from '../components/layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Practice NextJS</title>
        <meta name="description" content="Practice NextJs" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
