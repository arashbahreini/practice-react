import Layout from './layout'
import 'bootstrap/dist/css/bootstrap.css';

export default function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
