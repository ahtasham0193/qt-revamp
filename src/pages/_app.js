
import '../styles/tailwind.css'
import { useState } from 'react';

import { ServerInterceptor } from '@/api-handling/server-interceptor';
import { Provider } from 'react-redux';
import store from '@/store/store';
function MyApp({ Component, pageProps }) 
{
  const [isLoading, setIsLoading] = useState(true);

  ServerInterceptor();
  return <Provider store={store}>
  <Component {...pageProps} />
  {/* {
    isLoading &&  <Loader/>
  } */}

  </Provider>
}

export default MyApp
