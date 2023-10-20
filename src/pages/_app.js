import { ServerInterceptor } from '@/api-handling/server-interceptor';
import '../styles/tailwind.css'
import { Provider } from 'react-redux';
import store from '@/store/store';
function MyApp({ Component, pageProps }) 

{
  ServerInterceptor();
  return <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
}

export default MyApp
