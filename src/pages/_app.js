
import '../styles/tailwind.css'
import { useState } from 'react';
import { ServerInterceptor } from '@/api-handling/server-interceptor';
import { Provider, useSelector } from 'react-redux';
import store from '@/store/store';
import Loader from '@/components/Loader';
function MyApp({ Component, pageProps }) 
{

  ServerInterceptor();
  return <Provider store={store}>
  <Component {...pageProps} />
    <Loader/>
  </Provider>
}

export default MyApp
