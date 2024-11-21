import Layout from './layout';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from '../redux/store';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
