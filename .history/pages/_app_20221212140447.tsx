import '../styles/globals.css'
import type { AppProps } from 'next/app';
import {SessionProvider} from 'next-auth/react';
import { Session } from "next-auth";
import Header from './components/Header';
import { ApolloProvider } from '@apollo/client';

import { Toaster } from 'react-hot-toast';

import client from '../apollo-client';



function MyApp({ Component, pageProps }: AppProps<{ session: Session }> ){
  return(  
  <ApolloProvider client={client} >
  <SessionProvider session={pageProps.session}>
    <Toaster/>
    <Header/>
  <Component {...pageProps} />
</SessionProvider>
</ApolloProvider>
  )}
export default MyApp;
