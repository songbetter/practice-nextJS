import Head from 'next/head'
import Layout from '../components/layout/Layout'
import { ModalProvider } from '../store/modal-context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <Layout>
        <Head>
          <title>Practice NextJS</title>
          <meta name="description" content="Practice NextJs" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ModalProvider>
  )
}

export default MyApp
